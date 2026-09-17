import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Eye, Target, Users, Rocket, Images, Mail, TrendingUp, Calendar, Briefcase, Award, Lightbulb, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import iedcLogo from "@assets/IEDC_Logo_1753773593525.png";
import iemLogo from "@assets/iem_logo_1754317566104.png";
import uemLogo from "@assets/uem_logo_1754317566102.png";

// Import Hero Background Images
import heroImg1 from "@/assets/hero_images/iedc-4.jpeg";
import heroImg2 from "@/assets/hero_images/iedc-1.jpeg";
import heroImg3 from "@/assets/hero_images/iedc-2.jpeg";
import heroImg4 from "@/assets/hero_images/iedc-3.jpeg";
import heroImg5 from "@/assets/hero_images/iedc-5.jpeg";
import heroImg6 from "@/assets/hero_images/iedc-6.jpeg";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6];

const quickLinks = [
  {
    icon: Info,
    title: "About Us",
    description: "Learn about our vision, mission and objectives",
    path: "/about",
  },
  {
    icon: Users,
    title: "People",
    description: "Meet our faculty and student community",
    path: "/people",
  },
  {
    icon: TrendingUp,
    title: "Research Verticals",
    description: "Explore our core technology focus areas",
    path: "/research-verticals",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Bengal E-Summit 2024 and upcoming events",
    path: "/events",
  },
  {
    icon: Rocket,
    title: "Start-ups",
    description: "Companies we've incubated",
    path: "/innovation/startups",
  },
  {
    icon: Images,
    title: "Gallery",
    description: "Our activities and events",
    path: "/gallery",
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Get in touch with us",
    path: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Innovation & Research",
    description: "Patents, grants, publications and projects",
    path: "/innovation/patents",
  },
];

const opportunities = {
  funding: [
    { id: 1, title: "TechNova Seed Round", amount: "$500,000", date: "Oct 2024", tag: "Seed" },
    { id: 2, title: "GreenEnergy Solutions", amount: "$2M", date: "Sep 2024", tag: "Series A" },
    { id: 3, title: "FinTech App", amount: "$150,000", date: "Aug 2024", tag: "Pre-seed" },
  ],
  grants: [
    { id: 1, title: "AI in Healthcare", provider: "Govt. Research Board", amount: "₹50L", date: "Nov 2024" },
    { id: 2, title: "Smart IoT Agriculture", provider: "Innovation Ministry", amount: "₹25L", date: "Oct 2024" },
    { id: 3, title: "Renewable Energy Grid", provider: "DST", amount: "₹75L", date: "Sep 2024" },
  ],
  internships: [
    { id: 1, role: "Software Eng Intern", company: "TechNova", duration: "6 Months", location: "Remote" },
    { id: 2, role: "Data Science Intern", company: "AI Labs", duration: "3 Months", location: "On-site" },
    { id: 3, role: "Hardware Design", company: "IoT Systems", duration: "6 Months", location: "Hybrid" },
  ]
};

// Helper component for animating numbers
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentHeroImage}
              src={heroImages[currentHeroImage]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Subtle overlay to ensure white text remains readable without color tinting */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="text-center">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img 
                src={iedcLogo} 
                alt="IEDC IEM Salt Lake Logo" 
                className="w-32 h-32 object-contain drop-shadow-2xl"
              />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Innovation and Entrepreneurship Development Center
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-4 font-light tracking-wide text-blue-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              IEM Salt Lake
            </motion.p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10 border-t-4 border-blue-900 overflow-hidden">
        
        {/* Left Side IEM Logo */}
        <div className="hidden xl:flex absolute left-4 2xl:left-12 top-1/2 -translate-y-1/2 z-0 group pointer-events-none">
          <img src={iemLogo} alt="IEM Logo" className="w-32 2xl:w-48 opacity-100 transition-transform hover:scale-105 duration-500 drop-shadow-2xl pointer-events-auto cursor-pointer" />
        </div>
        
        {/* Right Side UEM Logo */}
        <div className="hidden xl:flex absolute right-4 2xl:right-12 top-1/2 -translate-y-1/2 z-0 group pointer-events-none">
          <img src={uemLogo} alt="UEM Logo" className="w-32 2xl:w-48 opacity-100 transition-transform hover:scale-105 duration-500 drop-shadow-2xl pointer-events-auto cursor-pointer" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold iedc-gray mb-4">Latest Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the latest startup funding, research grants, and internship opportunities available through our network.
              <br className="hidden md:block" />
              <span className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-indigo-700 font-semibold rounded-full text-sm border border-indigo-100 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
                Fully automated & AI-curated in real time
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startup Funding Column */}
            <motion.div 
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-900 hover:shadow-[0_20px_40px_rgba(30,58,138,0.08)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1 group/card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover/card:bg-blue-400/20 transition-all duration-500"></div>
              
              <button className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-blue-900 hover:bg-blue-100 transition-colors z-20 group/refresh" aria-label="Refresh">
                <RefreshCw className="w-5 h-5 group-hover/refresh:rotate-180 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100/80 relative z-10 pr-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold iedc-gray tracking-tight">Startup Funding</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Recent investments</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-grow relative z-10">
                {opportunities.funding.map(item => (
                  <div key={item.id} className="group/item p-5 rounded-2xl bg-gray-50/50 hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-100 hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800 group-hover/item:text-blue-700 transition-colors text-lg">{item.title}</h4>
                      <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">{item.amount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="bg-white group-hover/item:bg-blue-50 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm border border-gray-100 group-hover/item:border-blue-100 transition-colors">{item.tag}</span>
                      <span className="font-medium">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View All Funding <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
              </button>
            </motion.div>

            {/* Grant-in-aid Column */}
            <motion.div 
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-900 hover:shadow-[0_20px_40px_rgba(147,51,234,0.08)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1 group/card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl group-hover/card:bg-purple-400/20 transition-all duration-500"></div>
              
              <button className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-blue-900 hover:bg-blue-100 transition-colors z-20 group/refresh" aria-label="Refresh">
                <RefreshCw className="w-5 h-5 group-hover/refresh:rotate-180 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100/80 relative z-10 pr-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold iedc-gray tracking-tight">Grant-in-aid</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Research & Innovation</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-grow relative z-10">
                {opportunities.grants.map(item => (
                  <div key={item.id} className="group/item p-5 rounded-2xl bg-gray-50/50 hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-100 hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800 group-hover/item:text-purple-700 transition-colors text-lg pr-4">{item.title}</h4>
                      <ExternalLink className="w-5 h-5 text-gray-300 group-hover/item:text-purple-500 transition-colors flex-shrink-0" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-600">{item.provider}</span>
                        <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                      </div>
                      <span className="text-purple-600 font-bold bg-purple-50 px-3 py-1 rounded-full text-sm">{item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-4 rounded-2xl bg-gray-50 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View All Grants <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
              </button>
            </motion.div>

            {/* Internships Column */}
            <motion.div 
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-900 hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] transition-all duration-500 flex flex-col h-full hover:-translate-y-1 group/card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl group-hover/card:bg-teal-400/20 transition-all duration-500"></div>
              
              <button className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-blue-900 hover:bg-blue-100 transition-colors z-20 group/refresh" aria-label="Refresh">
                <RefreshCw className="w-5 h-5 group-hover/refresh:rotate-180 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100/80 relative z-10 pr-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/30 transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold iedc-gray tracking-tight">Internships</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Student opportunities</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-grow relative z-10">
                {opportunities.internships.map(item => (
                  <div key={item.id} className="group/item p-5 rounded-2xl bg-gray-50/50 hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-teal-100 hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800 group-hover/item:text-teal-700 transition-colors text-lg line-clamp-1 pr-2">{item.role}</h4>
                      <span className="text-teal-700 font-bold bg-teal-50 px-3 py-1 rounded-full text-xs whitespace-nowrap">{item.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">{item.company.charAt(0)}</div>
                        <span className="font-medium text-gray-600 text-sm">{item.company}</span>
                      </div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-4 rounded-2xl bg-gray-50 hover:bg-teal-500 hover:text-white text-teal-600 font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View All Internships <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-16 h-1.5 bg-blue-900 rounded-full mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center iedc-gray">
              Quick Links
            </h2>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 w-full max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {quickLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={link.path}>
                  <div className="flex flex-col items-center group cursor-pointer w-24 md:w-28 lg:w-32">
                    <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full glass-panel flex items-center justify-center mb-4 group-hover:bg-white/90 dark:group-hover:bg-black/80 group-hover:-translate-y-2 shadow-[0_0_15px_rgba(30,58,138,0.2)] group-hover:shadow-[0_0_30px_rgba(30,58,138,0.6)] transition-all duration-300 relative overflow-hidden border border-blue-900">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <link.icon className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-blue-900 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300 relative z-10" />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold iedc-gray text-center leading-tight group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-iedc-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={175} />+
              </div>
              <div className="text-lg text-blue-100 font-medium tracking-wide">Research Publications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={2} />+
              </div>
              <div className="text-lg text-blue-100 font-medium tracking-wide">Startup Incubation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <AnimatedNumber value={30} />+
              </div>
              <div className="text-lg text-blue-100 font-medium tracking-wide">Sponsored Research</div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
