import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import iemLogo from "@assets/iem_logo_1754317566104.png";
import uemLogo from "@assets/uem_logo_1754317566102.png";
import iedcLogo from "@assets/IEDC_Logo_1753773593525.png";
import curtainBg from "@/assets/hero_images/iedc-4.jpeg";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden bg-transparent">
          
          {/* Left Panel (IEM) */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ delay: 2.0, duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full flex items-center justify-center relative shadow-2xl overflow-hidden"
          >
            {/* Seamless Background Left Half */}
            <img src={curtainBg} alt="" className="absolute left-0 w-[200%] max-w-[200%] h-full object-cover z-0" />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center z-20"
            >
              <img
                src={iemLogo}
                alt="IEM Logo"
                className="w-32 md:w-56 h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Panel (UEM) */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ delay: 2.0, duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full flex items-center justify-center relative shadow-2xl overflow-hidden"
          >
            {/* Seamless Background Right Half */}
            <img src={curtainBg} alt="" className="absolute right-0 w-[200%] max-w-[200%] h-full object-cover z-0" />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center z-20"
            >
              <img
                src={uemLogo}
                alt="UEM Logo"
                className="w-32 md:w-56 h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
          
          {/* Central Logo & Text Layer - Zooms out */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 15, opacity: 0 }}
            transition={{ delay: 2.0, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <img
                src={iedcLogo}
                alt="IEDC Logo"
                className="w-48 md:w-72 h-auto object-contain mb-4"
              />
              <h2 className="text-3xl md:text-5xl font-bold iedc-gray tracking-wide text-center">
                Welcome to IEDC-ECE
              </h2>
            </motion.div>
          </motion.div>

          {/* Central Seam */}
          <motion.div
            initial={{ opacity: 1, scaleY: 1 }}
            animate={{ opacity: 0, scaleY: 0 }}
            transition={{ delay: 1.9, duration: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
