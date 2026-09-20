import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Client } from "@notionhq/client";

// Initialize Notion client (will safely fail if no key provided until route is hit)
const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY || "dummy",
});

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

      const [fundingResponse, grantsResponse] = await Promise.all([
        notion.databases.query({ database_id: fundingDbId }),
        notion.databases.query({ database_id: grantsDbId }),
      ]);

      const getText = (prop: any) => {
        if (!prop) return "";
        if (prop.type === "title" && prop.title.length > 0) return prop.title[0].plain_text;
        if (prop.type === "rich_text" && prop.rich_text.length > 0) return prop.rich_text[0].plain_text;
        if (prop.type === "select" && prop.select) return prop.select.name;
        if (prop.type === "number") return prop.number.toString();
        if (prop.type === "date" && prop.date) return prop.date.start;
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
          amount: getText(findProp(["amount", "fund", "money"])) || "TBD",
          date: getText(findProp(["date", "time", "year"])) || "Recent",
          tag: getText(findProp(["tag", "stage", "round", "type"])) || "Seed",
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
          provider: getText(findProp(["provider", "agency", "grantor", "source"])) || "Govt. Agency",
          amount: getText(findProp(["amount", "grant", "fund"])) || "TBD",
          date: getText(findProp(["date", "time", "year"])) || "Recent",
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
