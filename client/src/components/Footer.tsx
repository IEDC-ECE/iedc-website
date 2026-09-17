import { Link } from "wouter";
import { Lightbulb } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import iedcLogo from "@assets/IEDC_Logo_1753773593525.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "People", path: "/people" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { name: "Contact", path: "/contact" },
];

const innovationLinks = [
  { name: "Research Verticals", path: "/research-verticals" },
  { name: "Start-ups", path: "/innovation/startups" },
  { name: "Patents", path: "/innovation/patents" },
  { name: "Sponsored Research", path: "/innovation/grants" },
  { name: "Publications", path: "/innovation/publications" },
  { name: "Projects", path: "/innovation/projects" },
];

export default function Footer() {
  return (
    <footer className="bg-iedc-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={iedcLogo} 
                alt="IEDC IEM Salt Lake Logo" 
                className="w-10 h-10 mr-3 object-contain"
              />
              <div>
                <div className="text-lg font-bold">IEDC</div>
                <div className="text-xs text-gray-400">IEM Salt Lake</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Innovation and Entrepreneurship Development Center at IEM Salt Lake, fostering innovation and entrepreneurship since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Innovation & Research</h3>
            <ul className="grid grid-cols-2 gap-2">
              {innovationLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Developed by-{" "}
            <a 
              href="https://www.linkedin.com/in/sutavrariomitra6/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Sutavra
            </a>
            ,{" "}
            <a 
              href="https://www.linkedin.com/in/srudyuti-dey-021620322/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Srudyuti
            </a>
            {" "}&{" "}
            <a 
              href="https://www.linkedin.com/in/swarnavo-de-b5519a285/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Swarnavo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
