import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Lightbulb, Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
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
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout>();
  const isDropdownOpenRef = React.useRef(false);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
    isDropdownOpenRef.current = true;
    setHoveredPath("/innovation");
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      isDropdownOpenRef.current = false;
      setHoveredPath(null);
    }, 200);
  };

  const handleNavLeave = () => {
    setTimeout(() => {
      if (!isDropdownOpenRef.current) {
        setHoveredPath(null);
      }
    }, 50);
  };

  const renderNavItem = (item: { name: string; path: string }) => {
    const isActive = location === item.path;
    const isHovered = hoveredPath === item.path;
    const showPill = isHovered || (isActive && !hoveredPath);

    return (
      <Link key={item.path} href={item.path}>
        <div
          className="relative px-5 py-2.5 rounded-full cursor-pointer transition-colors duration-300"
          onMouseEnter={() => {
            setHoveredPath(item.path);
            if (isDropdownOpenRef.current) {
              setIsDropdownOpen(false);
              isDropdownOpenRef.current = false;
            }
          }}
        >
          {showPill && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-white/20 dark:bg-black/20 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] backdrop-blur-md rounded-full pointer-events-none"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span
            className={`relative z-10 text-base font-bold transition-colors ${
              isActive || isHovered
                ? "text-blue-700 font-extrabold"
                : "text-gray-900 dark:text-gray-100"
            }`}
          >
            {item.name}
          </span>
        </div>
      </Link>
    );
  };

  const isDropdownActive = location.startsWith("/innovation");
  const isDropdownHovered = hoveredPath === "/innovation";
  const showDropdownPill = isDropdownHovered || (isDropdownActive && !hoveredPath);

  const isHome = location === "/";

  return (
    <motion.nav 
      initial={isHome ? { y: -200 } : { y: 0 }}
      animate={{ y: 0 }}
      transition={{ 
        delay: isHome ? 2.6 : 0, 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      }}
      className={`mx-4 lg:mx-auto max-w-7xl backdrop-blur-md border border-blue-900/30 transition-all duration-500 shadow-[0_0_50px_rgba(30,58,138,0.8)] overflow-hidden ${
        isHome 
          ? "bg-white rounded-b-[2.5rem] rounded-t-none mt-0 border-t-0" 
          : "bg-white/20 rounded-2xl mt-2"
      }`}
    >
      <div className="px-6 sm:px-8 lg:px-10 py-1">
        <div className="flex justify-between items-center h-20">
          {/* IEM Logo - Left */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src={iemLogo}
                alt="IEM Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className="ml-10 flex items-baseline space-x-2"
              onMouseLeave={handleNavLeave}
            >
              {/* Home, About, People */}
              {navigationItems.slice(0, 3).map(renderNavItem)}

              {/* Innovation & Research Dropdown */}
              <div 
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="relative px-5 py-2.5 rounded-full cursor-pointer transition-colors duration-300 flex items-center outline-none">
                    {showDropdownPill && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/20 dark:bg-black/20 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] backdrop-blur-md rounded-full pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-base font-bold flex items-center transition-colors ${
                        isDropdownActive || isDropdownHovered
                          ? "text-blue-700 font-extrabold"
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      Innovation & Research
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="glass border-white/20 shadow-xl rounded-xl"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {innovationSubItems.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.path}
                        className="hover:bg-white/30 dark:hover:bg-black/30 rounded-lg cursor-pointer"
                      >
                        <Link href={subItem.path} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Events, Gallery, Contact */}
              {navigationItems.slice(3).map(renderNavItem)}
            </div>
          </div>

          {/* UEM Logo - Right (Desktop) */}
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-center">
              <img
                src={uemLogo}
                alt="UEM Logo"
                className="h-16 w-auto object-contain"
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
              <SheetContent side="right" className="w-64 glass border-l border-white/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Home, About, People */}
                  {navigationItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
                        location === item.path
                          ? "text-blue-600 font-semibold bg-blue-500/10"
                          : "text-gray-700 hover:text-blue-600 hover:bg-black/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Innovation & Research Section for Mobile */}
                  <div className="px-3 py-2">
                    <div className="text-base font-medium text-gray-800 mb-2 px-1">
                      Innovation & Research
                    </div>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {innovationSubItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-2 py-1 rounded-md text-sm transition-colors ${
                            location === subItem.path
                              ? "text-blue-600 font-semibold bg-blue-500/10"
                              : "text-gray-600 hover:text-blue-600 hover:bg-black/5"
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
                      className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
                        location === item.path
                          ? "text-blue-600 font-semibold bg-blue-500/10"
                          : "text-gray-700 hover:text-blue-600 hover:bg-black/5"
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
      
      {/* Extended Navy Blue Marquee Section */}
      <div className="bg-blue-900 py-1.5 w-full relative z-50">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-white text-sm font-semibold tracking-wider">
            Welcome to the Innovation and Entrepreneurship Department of ECE, IEM SALTLAKE, KOLKATA.
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
