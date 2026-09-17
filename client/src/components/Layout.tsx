import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className={`fixed top-0 left-0 right-0 z-50 pb-2 pointer-events-none ${isHome ? "pt-0" : "pt-4"}`}>
        <div className="pointer-events-auto">
          <Navigation />
        </div>
      </div>
      <main className={`flex-grow ${isHome ? "" : "pt-28"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
