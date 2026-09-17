import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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

const eventsByYear = {
  2024: [
    {
      id: "bengal-e-summit-2024",
      name: "Bengal E-Summit 2024",
      edition: "First Edition",
      date: "July 27–28, 2024",
      venue: "IEM Gurukul Campus",
      participants: "Over 500 attendees",
      description: "A vibrant platform for knowledge sharing, networking, and investment opportunities featuring the flagship Investopia competition.",
      status: "completed",
      category: "Summit"
    },
    {
      id: "national-science-day-2024",
      name: "National Science Day Celebration",
      edition: "Annual Celebration",
      date: "February 28, 2024",
      venue: "IEM Salt Lake Campus",
      participants: "100+ participants",
      description: "Celebrating the discovery of the Raman Effect by Sir C.V. Raman with scientific exhibitions, research presentations, and innovation contests.",
      status: "completed",
      category: "Celebration"
    }
  ],
  2025: [
    {
      id: "bengal-e-summit-2025",
      name: "Bengal E-Summit 2025",
      edition: "Second Edition",
      date: "July 2025 (TBA)",
      venue: "IEM Gurukul Campus",
      participants: "Expected 800+ attendees",
      description: "Expanded edition focusing on sustainable innovation and green technology entrepreneurship.",
      status: "upcoming",
      category: "Summit"
    },
    {
      id: "triwizard-trials-2025",
      name: "The Triwizard Trials",
      edition: "Inaugural Edition",
      date: "2025",
      venue: "Godrej Genesis, Kolkata",
      participants: "Expected 200+ participants",
      description: "A Hogwarts-inspired AI challenge with three magical events—Defence Against Dark Prompts, The Chambers of Agents, and Charms Without Wands.",
      status: "upcoming",
      category: "Competition"
    }
  ]
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'summit': return 'bg-iedc-blue';
    case 'workshop': return 'bg-green-600';
    case 'competition': return 'bg-purple-600';
    case 'symposium': return 'bg-orange-600';
    case 'celebration': return 'bg-cyan-600';
    default: return 'bg-gray-600';
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-200/50 shadow-sm';
    case 'upcoming': return 'bg-blue-50 text-blue-700 border-blue-200/50 shadow-sm';
    default: return 'bg-slate-50 text-slate-700 border-slate-200/50 shadow-sm';
  }
};

export default function EventsOverview() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Fostering innovation, entrepreneurship, and collaboration through impactful events
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1.5 bg-gradient-to-r from-blue-900 to-blue-400 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Events by Year */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(eventsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, events]) => (
              <div key={year} className="mb-20">
                <div className="flex items-center mb-10">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-blue-100"></div>
                  <div className="px-8 py-2 rounded-full border border-blue-50 bg-white shadow-[0_0_20px_rgba(30,58,138,0.03)]">
                    <h2 className="text-3xl font-extrabold text-blue-900">{year}</h2>
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-blue-100"></div>
                </div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {events.map((event) => (
                    <motion.div key={event.id} variants={itemVariants}>
                      <Card className="bg-white border border-blue-50/50 shadow-[0_0_30px_rgba(30,58,138,0.06)] rounded-[1.5rem] h-full hover:shadow-[0_0_50px_rgba(30,58,138,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col group">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6 gap-2">
                            <Badge className={`${getCategoryColor(event.category)} text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm`}>
                              {event.category}
                            </Badge>
                            <Badge className={`${getStatusColor(event.status)} px-3 py-1 text-xs font-semibold rounded-full`}>
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                          </div>

                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-tight">{event.name}</h3>
                          <p className="text-sm font-medium text-blue-600 mb-6">{event.edition}</p>

                          <div className="space-y-3 mb-6 flex-1">
                            <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-50 p-2 rounded-lg">
                              <Calendar className="h-4 w-4 mr-3 text-blue-600" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-50 p-2 rounded-lg">
                              <MapPin className="h-4 w-4 mr-3 text-blue-600" />
                              {event.venue}
                            </div>
                            <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-50 p-2 rounded-lg">
                              <Users className="h-4 w-4 mr-3 text-blue-600" />
                              {event.participants}
                            </div>
                          </div>

                          <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                            {event.description}
                          </p>

                          <div className="mt-auto">
                            {(event.status === 'completed' || event.id === 'bengal-e-summit-2025' || event.id === 'triwizard-trials-2025') ? (
                              <Link href={`/events/${event.id}`}>
                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-colors cursor-pointer border border-blue-100/50 group/btn">
                                  <span className="text-sm font-bold text-blue-900">View Event Details</span>
                                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/btn:translate-x-1 transition-transform">
                                    <ArrowRight className="h-4 w-4 text-blue-600" />
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Sparkles className="h-4 w-4 mr-2 text-slate-400" />
                                <span className="text-sm font-medium text-slate-500">More details coming soon</span>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Stay Updated</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Don't miss out on our upcoming events and opportunities. Follow us for the latest updates
              on workshops, competitions, summits, and networking events.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <Calendar className="h-10 w-10 text-blue-900 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Regular Events</h3>
              <p className="text-slate-500 font-medium">Monthly workshops and quarterly competitions</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <Users className="h-10 w-10 text-blue-900 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Community</h3>
              <p className="text-slate-500 font-medium">Connect with fellow entrepreneurs and innovators</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgb(30,58,138,0.08)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgb(30,58,138,0.15)] transition-all duration-300 border border-blue-100/50">
                <MapPin className="h-10 w-10 text-blue-900 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Multiple Venues</h3>
              <p className="text-slate-500 font-medium">Events across our campuses and partner locations</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}