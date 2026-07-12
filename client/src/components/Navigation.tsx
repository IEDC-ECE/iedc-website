import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Lightbulb, Menu, X, ChevronDown } from "lucide-react";
import iedcLogo from "@assets/IEDC_Logo_1753773593525.png";
import iemLogo from "@assets/iem_logo_1754317566104.png";
import uemLogo from "@assets/uem_logo_1754317566102.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "People", path: "/people" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const innovationSubItems = [
  { name: "Research Verticals", path: "/research-verticals" },
  { name: "Sponsored Research", path: "/innovation/grants" },
  { name: "Projects", path: "/innovation/projects" },
  { name: "Patents", path: "/innovation/patents" },
  { name: "Publications", path: "/innovation/publications" },
  { name: "Start-ups", path: "/innovation/startups" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* IEM Logo - Left */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src={iemLogo} 
                alt="IEM Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Home, About, People */}
              {navigationItems.slice(0, 3).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location === item.path
                      ? "iedc-blue font-semibold"
                      : "iedc-gray hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Innovation & Research Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  location.startsWith('/innovation')
                    ? "iedc-blue font-semibold"
                    : "iedc-gray hover:text-blue-600"
                }`}>
                  Innovation & Research
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg">
                  {innovationSubItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.path} className="hover:bg-iedc-light-gray">
                      <Link href={subItem.path} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Events, Gallery, Contact */}
              {navigationItems.slice(3).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location === item.path
                      ? "iedc-blue font-semibold"
                      : "iedc-gray hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* UEM Logo - Right (Desktop) */}
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-center">
              <img 
                src={uemLogo} 
                alt="UEM Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="iedc-gray">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Home, About, People */}
                  {navigationItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        location === item.path
                          ? "iedc-blue font-semibold"
                          : "iedc-gray hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Innovation & Research Section for Mobile */}
                  <div className="px-3 py-2">
                    <div className="text-base font-medium iedc-gray mb-2">Innovation & Research</div>
                    <div className="pl-4 space-y-2">
                      {innovationSubItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-2 py-1 text-sm transition-colors ${
                            location === subItem.path
                              ? "iedc-blue font-semibold"
                              : "text-gray-600 hover:text-blue-600"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Events, Gallery, Contact */}
                  {navigationItems.slice(3).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        location === item.path
                          ? "iedc-blue font-semibold"
                          : "iedc-gray hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
