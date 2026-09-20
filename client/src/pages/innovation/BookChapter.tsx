import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Calendar, ExternalLink, Building2, FileText, Hash } from "lucide-react";
import { motion } from "framer-motion";

type BookChapterPublication = {
  paper: string;
  authors: string;
  publisher?: string;
  year: string;
  isbn?: string;
  publication?: string;
  bookSeries?: string;
  pages?: string;
  doi?: string;
};

type AcademicYearData = {
  year: string;
  publications: BookChapterPublication[];
};

const bookChapterData: AcademicYearData[] = [
  {
    year: "July 2024 - June 2025",
    publications: [
      {
        paper: "C++ Chronicles: Epic Adventures in the Galaxy of Coding",
        authors: "Banerjee S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9601-118-5",
      },
      {
        paper: "A Little Dictionary of Data Structures: Building Blocks for Efficient Algorithms",
        authors: "Banerjee S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9649-001-6",
      },
      {
        paper: "Unveiling Big Data: Unlocking Insights",
        authors: "Banerjee S., Banerjee B.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9649-005-4",
      },
      {
        paper: "Utilization of Personalized PageRank for Protein–Protein Interaction Analysis for Identification of Potential Therapeutic Targets in Alzheimer's Disease",
        authors: "Sengupta A., Chakraborty S., Gangopadhyay M.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Proceedings of IEMTRONICS 2024",
        bookSeries: "Lecture Notes in Electrical Engineering, vol 1229",
        doi: "10.1007/978-981-97-4780-1_23",
      },
      {
        paper: "Quantum Mechanics",
        authors: "Goswami S., Ghosh M.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9618-502-9",
      },
      {
        paper: "Essential Equations: A Quick Reference for Physics Enthusiasts",
        authors: "Goswami S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9618-501-2",
      },
      {
        paper: "Implementing Artificial Intelligence and Machine Learning in Environmental Engineering: A Critical Analysis",
        authors: "Maiti S.K., Chakraborty S., Chakraborty A.S., Das S.",
        publisher: "Springer Nature",
        year: "2024",
        publication: "Big Data Analytics for Environmental Monitoring and Management",
        pages: "165-181",
        doi: "10.1007/978-981-97-4966-9_9",
      },
      {
        paper: "Underwater Communication with Active Controlled Flux Compression Using Unipolar Pulsed Supply and Boost Converter Techniques",
        authors: "Tarafdar B., Bhattacharjee S., Dutta Chowdhury A., Ghosh P., Samanta A.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Intelligent Systems and Sustainable Computing. ICISSC 2024. Smart Innovation, Systems and Technologies, vol 421",
        doi: "10.1007/978-981-97-6683-3_15",
      },
      {
        paper: "Heart Disease Prediction: A Comprehensive Machine Learning Approach Leveraging Data Balancing, Feature Selection, and Classification",
        authors: "Shil M., Gangopadhyay M.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Proceedings of IEMTRONICS 2024. Lecture Notes in Electrical Engineering, vol 1229",
        doi: "10.1007/978-981-97-4780-1_62",
      },
    ],
  },
  {
    year: "July 2023 - June 2024",
    publications: [
      {
        paper: "Pothole Detection Using Ensemble Learning-Based Approach for Maintenance of Indian Roads",
        authors: "Bhowmik T., Mukherjee A., Sau K., Kundu A., Sarkar S.",
        publisher: "Springer, Singapore",
        year: "2024",
        publication: "Proceedings of IEMTRONICS 2023. Lecture Notes in Electrical Engineering, vol 1117",
        pages: "661-672",
        doi: "10.1007/978-981-99-9436-6_48",
      },
    ],
  },
];

export default function InnovationBookChapter() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-xl border border-white/20">
              <FileText className="w-8 h-8 text-fuchsia-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-fuchsia-200">
              Books & Book Chapters
            </h1>
            <p className="text-xl md:text-2xl text-fuchsia-100/80 max-w-3xl mx-auto font-light leading-relaxed">
              Published academic books and contributions to edited volumes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {bookChapterData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-20">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px bg-fuchsia-200 flex-1"></div>
                <h2 className="text-3xl font-black text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-fuchsia-700 px-4">
                  {yearData.year}
                </h2>
                <div className="h-px bg-fuchsia-200 flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {yearData.publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                    className="h-full"
                  >
                    <div className="relative group rounded-[2rem] bg-white hover:bg-gradient-to-br hover:from-white hover:to-fuchsia-50/50 transition-all duration-500 shadow-xl hover:shadow-2xl shadow-fuchsia-900/5 hover:shadow-purple-500/20 h-full border border-gray-100 flex flex-col overflow-hidden">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 to-fuchsia-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="p-8 flex flex-col h-full z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={`shadow-sm transition-colors ${
                            pub.isbn ? "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-200" : "bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 border-fuchsia-200"
                          }`}>
                            <BookOpen className="w-3 h-3 mr-1" />
                            {pub.isbn ? "Book" : "Book Chapter"}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-fuchsia-700 transition-colors line-clamp-3">
                          {pub.paper}
                        </h3>

                        <div className="space-y-4 mb-6 flex-grow">
                          <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <User className="text-fuchsia-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Author(s)</p>
                              <p className="text-sm font-semibold text-slate-700 leading-snug">{pub.authors}</p>
                            </div>
                          </div>
                          
                          {(pub.publisher || pub.publication || pub.bookSeries) && (
                            <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <Building2 className="text-fuchsia-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                              <div className="space-y-2">
                                {pub.publisher && (
                                  <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Publisher</p>
                                    <p className="text-sm font-semibold text-slate-700 leading-snug">{pub.publisher}</p>
                                  </div>
                                )}
                                {pub.publication && (
                                  <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Publication</p>
                                    <p className="text-sm font-semibold text-slate-700 leading-snug italic">{pub.publication}</p>
                                  </div>
                                )}
                                {pub.bookSeries && (
                                  <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Book Series</p>
                                    <p className="text-sm font-semibold text-slate-700 leading-snug">{pub.bookSeries}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                            <div className="flex items-center gap-1.5">
                               <Calendar className="w-4 h-4 text-fuchsia-500" />
                               <span>{pub.year}</span>
                            </div>
                            {pub.isbn && (
                              <div className="flex items-center gap-1.5">
                                 <Hash className="w-4 h-4 text-fuchsia-500" />
                                 <span>{pub.isbn}</span>
                              </div>
                            )}
                            {pub.pages && (
                              <div className="flex items-center gap-1.5">
                                 <FileText className="w-4 h-4 text-fuchsia-500" />
                                 <span>pp: {pub.pages}</span>
                              </div>
                            )}
                          </div>

                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-fuchsia-600 hover:text-fuchsia-800 font-bold transition-colors group/link mt-2 lg:mt-0"
                            >
                              DOI
                              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
