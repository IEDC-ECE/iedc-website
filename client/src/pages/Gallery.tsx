import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import img1 from "@assets/bengal_e_summit_2025_1.jpg";
import img2 from "@assets/bengal_e_summit_2025_2.jpg";
import img3 from "@assets/bengal_e_summit_2025_3.jpg";
import img4 from "@assets/bengal_e_summit_2025_4.jpg";
import img5 from "@assets/bengal_e_summit_2025_5.jpg";
import img6 from "@assets/bengal_e_summit_2025_6.jpg";
import img7 from "@assets/bengal_e_summit_2025_7.jpg";

const galleryImages = [
  {
    src: img1,
    alt: "Bengal E-Summit 2025 Inauguration",
    title: "Inauguration Ceremony",
    description: "Grand opening of Bengal E-Summit 2025",
  },
  {
    src: img2,
    alt: "Bengal E-Summit 2025 Investopia",
    title: "Investopia Competition",
    description: "Entrepreneurs pitching to investors",
  },
  {
    src: img3,
    alt: "Bengal E-Summit 2025 Startup Expo",
    title: "Startup Expo",
    description: "Innovative prototypes on display",
  },
  {
    src: img4,
    alt: "Bengal E-Summit 2025 Pitch Perfect",
    title: "Pitch Perfect",
    description: "Competitive pitching event",
  },
  {
    src: img5,
    alt: "Bengal E-Summit 2025 Business Event",
    title: "This is Buziness",
    description: "Business simulation competition",
  },
  {
    src: img6,
    alt: "Bengal E-Summit 2025 Mind Master",
    title: "Mind Master Quiz",
    description: "Knowledge testing competition",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function Gallery() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Showcasing our recent activities, events, and achievements
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1.5 bg-gradient-to-r from-blue-900 to-blue-400 mx-auto rounded-full"
          />
        </div>
      </section>

      <section className="py-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="relative group rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(30,58,138,0.1)] hover:shadow-[0_20px_60px_rgba(30,58,138,0.2)] transition-shadow duration-500 bg-gray-100 p-2">
              <img
                src={img7}
                alt="Bengal E-Summit 2025 CHATJPG Event"
                className="w-full h-[500px] object-cover rounded-[1.5rem] group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-10 z-10">
                <Badge className="bg-blue-600 text-white mb-4 px-3 py-1 border-none shadow-md">Featured</Badge>
                <h3 className="text-3xl font-bold text-white mb-2">Bengal E-Summit 2025</h3>
                <p className="text-blue-100 text-lg font-medium">Moments from our flagship entrepreneurship summit</p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {galleryImages.map((image, index) => (
              <motion.div key={index} variants={itemVariants} className="group cursor-pointer">
                <div className="overflow-hidden rounded-[1.5rem] shadow-[0_0_30px_rgba(30,58,138,0.06)] group-hover:shadow-[0_15px_40px_rgba(30,58,138,0.15)] group-hover:-translate-y-2 transition-all duration-300 bg-white border border-blue-50/50 p-1.5">
                  <div className="overflow-hidden rounded-[1.2rem] bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{image.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white max-w-3xl mx-auto rounded-[2rem] border-0 shadow-2xl relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <CardContent className="p-12 relative z-10">
                <h3 className="text-3xl font-extrabold mb-4">Join Our Innovation Journey</h3>
                <p className="text-lg md:text-xl text-blue-100 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                  Be part of the next generation of innovators and entrepreneurs. Experience cutting-edge technology and build solutions for tomorrow.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-xl border-none">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

