import { motion } from "framer-motion";
import { BookOpen, FileText, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const publicationCategories = [
  {
    title: "Journal Publications",
    description: "Research published in high-impact peer-reviewed academic journals",
    icon: BookOpen,
    link: "/innovation/publications/journal",
    color: "from-blue-400 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Conference Publications",
    description: "Papers presented at leading national and international conferences",
    icon: Users,
    link: "/innovation/publications/conference",
    color: "from-teal-400 to-emerald-600",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Books & Book Chapters",
    description: "Published academic books and contributions to edited volumes",
    icon: FileText,
    link: "/innovation/publications/books",
    color: "from-purple-400 to-fuchsia-600",
    shadow: "shadow-fuchsia-500/20"
  },
];

export default function InnovationPublications() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-xl border border-white/20">
              <BookOpen className="w-8 h-8 text-indigo-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              Research Publications
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100/80 max-w-3xl mx-auto font-light leading-relaxed">
              Explore our academic contributions, cutting-edge research, and published works advancing the frontiers of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} href={category.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="h-full"
                  >
                    <div className="relative group rounded-[2rem] p-1 bg-gradient-to-br from-white/80 to-white/40 hover:from-white hover:to-white transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer h-full border border-gray-100 overflow-hidden">
                      {/* Decorative Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
                        {/* Icon Container */}
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-lg ${category.shadow} transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-indigo-900 transition-colors">
                          {category.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 text-slate-700 font-bold group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors w-full justify-center">
                          Explore Collection
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
