import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Users, Target, Sparkles, ExternalLink } from "lucide-react";

const startups = [
  {
    id: 1,
    name: "EDUTECH AI",
    mentor: "Dr. Subhabrata Banerjee",
    members: "Sutavra Mitra, Srudyuti Dey",
    license: "LICENSE NO.- PENDING",
    objective: "Online Education Platform with Digital Twin and ERP Model",
    website: "https://edutech-frontend.vercel.app/",
    color: "from-blue-500 to-indigo-600"
  }
];

export default function InnovationStartups() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-xl border border-white/20">
              <Rocket className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Incubated Startups
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto font-light leading-relaxed">
              Discover the next-generation companies born from our innovation ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative group rounded-[2.5rem] p-1 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative h-full bg-white/80 backdrop-blur-2xl rounded-[2.25rem] p-8 md:p-12 overflow-hidden border border-white/50 z-10">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                      <Sparkles className="w-64 h-64 text-indigo-900" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-20">
                      
                      {/* Left: Logo/Icon Placeholder */}
                      <div className={`w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br ${startup.color} flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-500/30 transform group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 border-4 border-white`}>
                        <span className="text-4xl md:text-5xl font-black text-white text-center leading-tight shadow-sm">
                          {startup.name.split(' ').map(w => w[0]).join('')}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                          <h2 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-900 tracking-tight">
                            {startup.name}
                          </h2>
                          <Badge className="px-4 py-1.5 text-sm font-bold bg-amber-100 text-amber-700 border-amber-200 shadow-sm uppercase tracking-wider rounded-full self-start sm:self-auto">
                            {startup.license}
                          </Badge>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-transparent p-5 rounded-2xl border border-indigo-100/50 mb-6">
                          <div className="flex items-start gap-3">
                            <Target className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <p className="text-lg text-slate-700 font-medium leading-relaxed">
                              {startup.objective}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group-hover:border-indigo-100 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                              <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Mentor</p>
                              <p className="text-sm font-semibold text-slate-800">{startup.mentor}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group-hover:border-indigo-100 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                              <Users className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Founders / Members</p>
                              <p className="text-sm font-semibold text-slate-800">{startup.members}</p>
                            </div>
                          </div>
                        </div>

                        {startup.website && (
                          <div className="mt-8 pt-6 border-t border-indigo-100/50 flex sm:justify-end">
                            <a 
                              href={startup.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 group/btn w-full sm:w-auto"
                            >
                              Visit Website
                              <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}