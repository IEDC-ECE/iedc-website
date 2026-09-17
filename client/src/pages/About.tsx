import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, Rocket, Users, Eye, Target, 
  Globe, GraduationCap, Cpu, Handshake 
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function About() {
  return (
    <motion.div
      className="bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-10">
          <motion.div 
            className="inline-block bg-white text-blue-900 px-8 py-2 rounded-full mb-8 shadow-[0_8px_30px_rgb(30,58,138,0.12)] border border-blue-100/50 backdrop-blur-md font-semibold tracking-wide"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-sm uppercase tracking-widest text-blue-600">Est. 2023</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-8 text-slate-900 tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Us</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 font-light text-slate-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Innovation and Entrepreneurship Development Center
          </motion.p>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-900 to-blue-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* About Us Overview */}
      <section className="py-16 relative z-20 mt-4 mx-4 md:mx-auto max-w-7xl rounded-[2.5rem] border border-blue-50/50 shadow-[0_20px_60px_rgba(30,58,138,0.06)] bg-white/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="text-center group" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <Settings className="text-blue-900 h-10 w-10 group-hover:rotate-90 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Research</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Cutting-edge research in emerging technologies and advanced systems</p>
            </motion.div>
            <motion.div className="text-center group" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <Rocket className="text-blue-900 h-10 w-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Innovation</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Product development and groundbreaking real-world business solutions</p>
            </motion.div>
            <motion.div className="text-center group" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <Users className="text-blue-900 h-10 w-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Community</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Fostering trained, skilled, and highly capable student communities</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/30 to-transparent -translate-y-1/2 skew-y-3 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-blue-900 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_20px_40px_rgba(30,58,138,0.3)] rotate-3 hover:rotate-12 transition-transform duration-500">
              <Eye className="text-white h-12 w-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Vision</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="bg-white border-0 shadow-[0_0_40px_rgba(30,58,138,0.08)] rounded-[2rem] mb-16 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-900 to-blue-500"></div>
              <CardContent className="p-10 md:p-16">
                <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center font-medium italic">
                  "To promote research, product development and business incubation ecosystem for the students – fostering a trained and skilled student community that will work in cutting edge technologies and build new-age businesses to solve technological challenges for making the earth a better place for all living objects."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white border border-blue-50/50 shadow-[0_0_30px_rgba(30,58,138,0.06)] rounded-[1.5rem] h-full hover:shadow-[0_0_50px_rgba(30,58,138,0.12)] hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="text-blue-700 h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Global Impact</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Creating solutions that benefit all living beings on Earth through innovative technology.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-white border border-blue-50/50 shadow-[0_0_30px_rgba(30,58,138,0.06)] rounded-[1.5rem] h-full hover:shadow-[0_0_50px_rgba(30,58,138,0.12)] hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="text-blue-700 h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Student Development</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Building a skilled community of students ready for tomorrow's challenges.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-white border border-blue-50/50 shadow-[0_0_30px_rgba(30,58,138,0.06)] rounded-[1.5rem] h-full hover:shadow-[0_0_50px_rgba(30,58,138,0.12)] hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Cpu className="text-blue-700 h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Cutting-edge Tech</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Working with the latest technologies to solve real-world problems.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-white border border-blue-50/50 shadow-[0_0_30px_rgba(30,58,138,0.06)] rounded-[1.5rem] h-full hover:shadow-[0_0_50px_rgba(30,58,138,0.12)] hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Handshake className="text-blue-700 h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Business Ecosystem</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Creating a supportive environment for new-age business development.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-blue-900 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_20px_40px_rgba(30,58,138,0.3)] -rotate-3 hover:-rotate-12 transition-transform duration-500">
              <Target className="text-white h-12 w-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="bg-white border-0 shadow-[0_0_50px_rgba(30,58,138,0.1)] rounded-[2rem] mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-70"></div>
              <CardContent className="p-10 md:p-16 relative z-10">
                <blockquote className="text-xl leading-relaxed text-slate-600 text-center font-medium">
                  "The IEDC ECE is committed to fostering a culture of research and product development among students. Its primary objective is to nurture a student community proficient in cutting-edge technologies through creativity and innovation. Under the mentorship of faculty members, students at the IEDC work in diverse fields including Robotics, IoT, RF & Microwave, Machine Learning, AI, Augmented Reality, Virtual Reality, and unmanned aerial and ground vehicles. The center strives for excellence by developing industry-ready products with significant real-world impact. Additionally, it focuses on cultivating entrepreneurship and tackling technological and business challenges faced by startups."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
