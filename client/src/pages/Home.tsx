import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Eye, Target, Users, Rocket, Images, Mail, TrendingUp, Calendar } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import iedcLogo from "@assets/IEDC_Logo_1753773593525.png";

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

      {/* Quick Links Section */}
      <section className="py-16 bg-white relative z-10 border-t-4 border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 iedc-gray"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Quick Links
          </motion.h2>
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
