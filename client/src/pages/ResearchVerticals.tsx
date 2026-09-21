import { Card, CardContent } from "@/components/ui/card";
import {
  Bot, Wifi, Radio, Brain, Microchip, Signal, Target, FlaskConical, Presentation, FileText, ArrowRight, Sparkles, Zap, Rocket, Users
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const researchVerticals = [
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Designing intelligent machines, autonomous systems, and practical automation workflows that can move from lab prototypes to real deployments.",
    focusAreas: ["Mobile robots, manipulators, and sensor-guided control", "Autonomous navigation, embedded decision-making, and actuation", "Industrial automation concepts and human-assistive devices"],
    examples: "Student projects, competition platforms, and applied research prototypes.",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50/50 text-blue-600"
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    description: "Building connected devices that sense, compute, and communicate reliably across edge hardware, wireless links, and cloud dashboards.",
    focusAreas: ["Low-power sensing nodes and smart instrumentation", "Edge firmware, device integration, and telemetry pipelines", "Connected monitoring solutions for labs, campuses, and industry use cases"],
    examples: "Smart dashboards, remote monitoring systems, and campus-scale deployments.",
    color: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50/50 text-emerald-600"
  },
  {
    icon: Radio,
    title: "RF, Microwave & Antenna Systems",
    description: "Exploring high-frequency design, propagation behavior, and antenna structures for modern wireless, sensing, and communication applications.",
    focusAreas: ["Antenna modeling, tuning, and performance optimization", "RF front-end concepts, matching networks, and measurement workflows", "Communication hardware for wireless links, sensing, and telemetry"],
    examples: "Antenna studies, RF prototypes, and link-quality validation experiments.",
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50/50 text-purple-600"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Applying data-driven methods to classification, prediction, vision, and decision support problems with a strong focus on practical usefulness.",
    focusAreas: ["Machine learning pipelines for structured and unstructured data", "Computer vision, pattern recognition, and predictive analytics", "AI-assisted tools that complement hardware, research, and product development"],
    examples: "Prototype models, analytics systems, and AI-enabled student products.",
    color: "from-orange-400 to-rose-500",
    bgLight: "bg-orange-50/50 text-orange-600"
  },
  {
    icon: Microchip,
    title: "VLSI & Semiconductor Design",
    description: "Working from digital logic to chip-level thinking, with attention to design flow, verification, and implementation constraints.",
    focusAreas: ["Digital design fundamentals, RTL thinking, and verification", "Low-power and high-reliability design trade-offs", "Simulation-driven exploration of circuit and system behavior"],
    examples: "Logic blocks, design exercises, and hardware-oriented academic projects.",
    color: "from-sky-400 to-blue-600",
    bgLight: "bg-sky-50/50 text-sky-600"
  },
  {
    icon: Signal,
    title: "Wireless Communication Systems",
    description: "Studying how information moves through modern networks and how to improve robustness, throughput, and spectrum efficiency.",
    focusAreas: ["Digital communication concepts and signal-processing foundations", "System-level analysis for modulation, coding, and channel effects", "Wireless applications spanning sensing, control, and data exchange"],
    examples: "Communication experiments, protocol studies, and systems integration work.",
    color: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50/50 text-amber-600"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function ResearchVerticals() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-blue-600/20 to-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-emerald-600/20 to-teal-600/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 font-medium text-sm mb-8 backdrop-blur-md shadow-2xl">
              <Sparkles className="w-4 h-4" />
              <span>Explore our technological focus areas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-8 tracking-tight">
              Research Verticals
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              A deeper look at the technology focus areas that shape our student projects, 
              faculty-led initiatives, and applied research collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Target, title: "Focused Spaces", desc: "Every vertical is chosen to match a real technical need, ensuring research stays grounded in relevant problems." },
              { icon: FlaskConical, title: "Prototype-First", desc: "Ideas are tested through hardware builds, simulations, and software demos before being scaled." },
              { icon: Presentation, title: "Lab to Dissemination", desc: "We move from experiments to publications, presentations, grant proposals, and deployable concepts." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                    <item.icon className="w-32 h-32" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h2>
                  <p className="text-slate-500 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              These verticals are where our research culture becomes visible in practice. Each area 
              combines problem-solving, prototyping, and iterative learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Verticals Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {researchVerticals.map((vertical, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex">
                <div className={`group relative p-1 rounded-3xl bg-gradient-to-b from-white to-slate-100 hover:to-white transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 flex flex-col w-full overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${vertical.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="bg-white rounded-[1.4rem] p-8 flex flex-col h-full relative z-10 border border-transparent group-hover:border-white/50 transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vertical.color} p-[1px] shadow-lg shadow-slate-200 group-hover:shadow-xl transition-all duration-500 group-hover:rotate-3`}>
                        <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center overflow-hidden">
                          <div className={`w-full h-full ${vertical.bgLight} flex items-center justify-center transition-colors duration-500`}>
                            <vertical.icon className="h-7 w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 transition-all">{vertical.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">{vertical.description}</p>
                    
                    <div className="mt-auto space-y-6">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <Zap className="w-3 h-3 text-amber-500" /> Core Focus
                        </h4>
                        <ul className="space-y-3">
                          {vertical.focusAreas.map((area, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${vertical.color} mt-1.5 flex-shrink-0`} />
                              <span className="leading-tight">{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Outcomes</h4>
                        <p className="text-sm text-slate-500 font-medium">{vertical.examples}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] bg-slate-950 text-white shadow-2xl overflow-hidden relative border border-slate-800"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
              <div className="lg:col-span-2 p-10 md:p-16 lg:p-20">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold text-blue-200 mb-8 backdrop-blur-sm">
                  <ArrowRight className="w-4 h-4" />
                  Research Roadmap
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">From research direction <br className="hidden md:block"/>to working systems.</h2>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-12">
                  The goal of these verticals is not just topic coverage. They help students and 
                  mentors choose a clear problem space, build depth, and connect that work to 
                  prototypes, grants, publications, presentations, and start-up ideas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Project Formation", desc: "Problem selection, scoping, and technical ownership." },
                    { title: "Validation", desc: "Testing, benchmarking, simulation, and iteration." },
                    { title: "Knowledge Output", desc: "Papers, reports, demos, and technical documentation." },
                    { title: "Applied Impact", desc: "Startup ideas, partnerships, and deployable tools." }
                  ].map((step, idx) => (
                    <div key={idx} className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-400 font-black mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 border-t lg:border-t-0 lg:border-l border-white/10 p-10 md:p-16 flex flex-col justify-center backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-8 text-white">Related Resources</h3>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { icon: FileText, text: "Mission and Vision", to: "/" },
                    { icon: Users, text: "People who drive the work", to: "/team" },
                    { icon: Rocket, text: "Innovation showcases", to: "/innovation" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.to}>
                        <a className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
                          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                            <link.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <span className="font-medium group-hover:text-white transition-colors text-lg">{link.text}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}