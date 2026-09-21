import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.get("/api/opportunities", async (req, res) => {
    try {
      if (!process.env.NOTION_SECRET_KEY) {
        return res.json({ useMock: true });
      }

      const fundingDbId = "3e04630d905d80e79ac3e74a5e1ee1b8";
      const grantsDbId = "3de4630d905d8095ba15cf3ea6ea01ba";

      const headers = {
        "Authorization": `Bearer ${process.env.NOTION_SECRET_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      };

      const fetchDb = async (dbId: string) => {
        const response = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
          method: 'POST',
          headers,
          body: JSON.stringify({})
        });
        if (!response.ok) {
          throw new Error(`Notion API error: ${response.statusText}`);
        }
        return response.json();
      };

      const [fundingResponse, grantsResponse] = await Promise.all([
        fetchDb(fundingDbId),
        fetchDb(grantsDbId),
      ]);

      const getText = (prop: any) => {
        if (!prop) return "";
        if (prop.type === "title" && prop.title.length > 0) return prop.title[0].plain_text;
        if (prop.type === "rich_text" && prop.rich_text.length > 0) return prop.rich_text[0].plain_text;
        if (prop.type === "select" && prop.select) return prop.select.name;
        if (prop.type === "multi_select" && prop.multi_select) return prop.multi_select.map((m: any) => m.name).join(", ");
        if (prop.type === "status" && prop.status) return prop.status.name;
        if (prop.type === "number") return prop.number.toString();
        if (prop.type === "date" && prop.date) return prop.date.start;
        if (prop.type === "url" && prop.url) return prop.url;
        return "";
      };

      const funding = fundingResponse.results.map((page: any) => {
        const props = page.properties;
        const findProp = (possibleNames: string[]) => {
          for (const name of possibleNames) {
            const key = Object.keys(props).find(k => k.toLowerCase().includes(name));
            if (key) return props[key];
          }
          return null;
        };

        return {
          id: page.id,
          title: getText(findProp(["name", "title", "startup"])) || "Unknown Startup",
          agency: getText(findProp(["agency", "provider"])) || "TBD",
          fit: getText(findProp(["fit", "tag"])) || "Unknown",
          target: getText(findProp(["target"])) || "All",
          deadline: getText(findProp(["deadline", "date"])) || "Rolling",
          source: getText(findProp(["source", "link", "url"])) || "",
        };
      });

      const grants = grantsResponse.results.map((page: any) => {
        const props = page.properties;
        const findProp = (possibleNames: string[]) => {
          for (const name of possibleNames) {
            const key = Object.keys(props).find(k => k.toLowerCase().includes(name));
            if (key) return props[key];
          }
          return null;
        };

        return {
          id: page.id,
          title: getText(findProp(["name", "title", "project"])) || "Research Project",
          agency: getText(findProp(["agency", "provider"])) || "TBD",
          fit: getText(findProp(["fit", "tag"])) || "Unknown",
          target: getText(findProp(["target"])) || "All",
          deadline: getText(findProp(["deadline", "date"])) || "Rolling",
          source: getText(findProp(["source", "link", "url"])) || "",
        };
      });

      res.json({ useMock: false, funding, grants });
    } catch (error) {
      console.error("Error fetching Notion data:", error);
      res.json({ useMock: true });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
