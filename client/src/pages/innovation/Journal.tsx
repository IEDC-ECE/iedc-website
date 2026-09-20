import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, ExternalLink, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { journalPublications2025To2026 } from "@/data/publications-2025-2026";

type JournalPublication = {
  paper: string;
  authors: string;
  doi?: string;
  journal: string;
  volume?: string;
  pages?: string;
  year?: string;
  indexing?: string;
};

type AcademicYearData = {
  year: string;
  publications: JournalPublication[];
};

const journalData: AcademicYearData[] = [
  {
    year: "July 2025 - June 2026",
    publications: journalPublications2025To2026,
  },
  {
    year: "July 2024 - June 2025",
    publications: [
      {
        paper: "An ultra-fast settling and low area bit synchronizer architecture",
        authors: "Ghosh A., Dhar A.S.",
        doi: "10.1007/s10470-025-02364-6",
        journal: "Analog Integrated Circuits and Signal Processing",
        volume: "123",
        pages: "22",
      },
      {
        paper: "Design of 1-bit Full Adder using output wired CMOS Inverter based Threshold Gate",
        authors: "Sarkar M., Taki G.S.",
        doi: "10.15864/ajec.1205",
        journal: "American Journal of Electronics & Communication (AJEC)",
        volume: "1, Issue 2",
        pages: "5",
      },
      {
        paper: "A Structured Basis to Determine Equivalent Dielectric Properties of Homogeneous Phantom Liquid Representing Multilayer Biological Tissues for SAR Measurement",
        authors: "Kundu A., Patra K., Gupta B., Mallick A.I.",
        doi: "10.2528/PIERB24042204",
        journal: "Progress In Electromagnetics Research B",
        volume: "108",
        pages: "1-16",
      },
      {
        paper: "Predicting lumen maintenance of phosphor-converted light emitting diodes in Indian tropical conditions using machine learning",
        authors: "Chakraborty A., Mukherjee C., Ganguly R., Mitra M.",
        doi: "10.1007/s12596-024-01529-2",
        journal: "Journal of Optics",
        pages: "1-15",
      },
      {
        paper: "Enhanced artificial neural network-based SER model in low-resource Indian language",
        authors: "Mukherjee C., Mondal P., Sarkar K., Paul S., Saha A., Chakraborty A.",
        doi: "10.1007/s41870-024-02095-5",
        journal: "International Journal of Information Technology",
        volume: "17, Issue 1",
        pages: "263-277",
      },
      {
        paper: "A Comparative Study on Formaldehyde Detection Capabilities in Pristine Graphene and Ag-Doped Graphene Sheet",
        authors: "Maity I., Bhanja S., Chatterjee S.",
        doi: "10.37591/JoPC",
        journal: "Journal of Polymer and Composites (JoPC)",
        volume: "13, Issue 1",
        pages: "801-809",
      },
      {
        paper: "Modeling of ZnO based Nano Sensor Device for Evaluating Electronic Interaction with NO2 Pollutant: Combining Multiphysics Simulation and DFT Study",
        authors: "Maity I., Jha A.K., Shaw Y.",
        doi: "10.37591/JoPC",
        journal: "Journal of Polymer and Composites (JoPC)",
        volume: "13, Issue 2",
        pages: "211-219",
      },
      {
        paper: "Performance Analysis of Dual Junction Solar Cell Devices utilizing Sub cells of In0.51Ga0.49P and GaAs to Study Key Solar Cell Parameters via TCAD based Simulation",
        authors: "Maity I., Bhattacharjee A., Mondal A.",
        doi: "10.37591/JoPC",
        journal: "Journal of Polymer and Composites (JoPC)",
        volume: "13, Issue 1",
        pages: "829-837",
      },
      {
        paper: "First Principle based Computations to Evaluate Propane and Butane Detection Capabilities of Gold Doped Graphene based Gas Sensor Devices",
        authors: "Maity I., Bhanja S.",
        doi: "10.1051/epjconf/202532501006",
        journal: "European Physical Journal (EPJ)- WOC",
        volume: "325",
      },
      {
        paper: "Molecular Orientation-Dependent Divergence into Electro-Chemical Sensing Performance of Pd-decorated ZnO Nanosheets during Guanine Adsorption: A Comparative Analysis",
        authors: "Maity I., Hazra S., Majumdar A.",
        doi: "10.1051/epjconf/202532501007",
        journal: "European Physical Journal (EPJ)-WOC",
        volume: "325",
      },
      {
        paper: "Structural and Electronic Properties of 2D Transition Metal Dichalcogenides: MoS2 and MoSe2",
        authors: "Maity I., Biswas S.",
        journal: "RP Material: Proceedings",
        volume: "3, Issue 1",
        pages: "22-27",
      },
      {
        paper: "Computation of Key Analog Circuit Parameters Employing Different Topological Configuration of Current Mirror Circuits: A Comprehensive Analysis of Gain, Noise, and Power Consumption",
        authors: "Maity I., Majumdar A.",
        journal: "RP Current Trends in Engineering and Technology",
        volume: "3, Issue 2",
        pages: "23-29",
      },
      {
        paper: "A Novel Approach to Design Combinational Digital System Blocks (Demultiplexer and Encoder) based on Reversible Logic Gates",
        authors: "Maity I., Dey A.",
        journal: "RP Current Trends in Engineering and Technology",
        volume: "3, Issue 2",
        pages: "40-45",
      },
      {
        paper: "Highly miniaturized Gysel power divider with suppression of harmonics employing multiple transmission line techniques",
        authors: "Kumar M., Kumar S., Sen G., Das S.",
        doi: "10.1016/j.aeue.2025.156012",
        journal: "AEU - International Journal of Electronics and Communications",
        volume: "201",
      },
      {
        paper: "Design of a 3D Printed Helical Antenna having High Gain for 2.4 GHz ISM Band Applications",
        authors: "Bal S., Mandal S., Abdullha M.M., Sen G.",
        doi: "10.14429/dsj.20901",
        journal: "Defence Science Journal",
        volume: "75, Issue 3",
        pages: "325-330",
      },
      {
        paper: "Preparation Design and Implementation of a Portable Microwave Sensor for Characterization of Edible Oils",
        authors: "Dhar S., Paul P., Mandal S., Sen G.",
        doi: "10.1109/LSENS.2024.3491764",
        journal: "IEEE Sensors Letters",
        volume: "8, Issue 12",
        pages: "1-4",
      },
      {
        paper: "Design of a Compact SRR Loaded Polarization-Independent Wideband Meta-Material Rasorber with a Narrow Transmission Window",
        authors: "Kumar A., Sen G., Ghosh J.",
        doi: "10.2528/PIERM24120201",
        journal: "Progress In Electromagnetics Research M",
        volume: "131",
        pages: "37-44",
      },
      {
        paper: "Compact/Deep and Wide Harmonic Suppressed Filtering Wilkinson Power Divider",
        authors: "Kumar M., Sen G., Parui S.K., Das S.",
        doi: "10.1002/mop.70111",
        journal: "Microwave and Optical Technology Letters",
        volume: "67",
      },
      {
        paper: "Interdigital Coupled Compact FSS Reflector for UWB Antenna Gain Enhancement",
        authors: "Sen G., Das S.",
        doi: "10.2528/PIERL24042202",
        journal: "Progress In Electromagnetics Research Letters",
        volume: "120",
        pages: "47-52",
      },
      {
        paper: "A Bibliometric Analysis of Naturopathy Treatment Modalities for Diabetes Mellitus",
        authors: "Mondal H., Komarraju S., Sathyanath D., Muralidharan S., Gayen R.K.",
        doi: "10.4103/jpbs.jpbs_486_25",
        journal: "Journal of Pharmacy and Bioallied Sciences",
      },
      {
        paper: "Repetitive Transcranial Magnetic Stimulation in Stroke Rehabilitation: A Bibliometric Review",
        authors: "Juhi A., Gayen R.K., Sharma S. et al.",
        doi: "10.7759/cureus.79509",
        journal: "Cureus",
        volume: "17, Issue 2",
      },
      {
        paper: "Exploring the Research Landscape of Transcranial Direct Current Stimulation in Stroke: A Bibliometric Review",
        authors: "Juhi A., Gayen R.K., Das M. et al.",
        doi: "10.7759/cureus.76510",
        journal: "Cureus",
        volume: "16, Issue 12",
      },
      {
        paper: "Radar-based object detection at drones and underground facilities for enhanced environmental perception in Indian mines",
        authors: "Sanyal P., Halder T., Ghosh A., Basak A., Gayen R.K., Chakravarty D.",
        journal: "ISAR Journal of Science and Technology",
        volume: "2, Issue 10",
        pages: "78-86",
      },
      {
        paper: "Spectacle of the human and imagery alien study",
        authors: "Nag I., Shome L., Basu S., Chowdhury S., Dutta D., Halder T., Gayen R.K., Chakravarty D.",
        journal: "ISAR Journal of Science and Technology",
        volume: "2, Issue 10",
        pages: "93-101",
      },
      {
        paper: "Graphical User Interface of Phase Unwrapping in InSAR, MRI and enhanced by Ashmit transform 2 post-processing step",
        authors: "Chowdhury S., Halder T., Misra Ray A., Basak A., Gayen R.K., Chakravarty D.",
        journal: "ISAR Journal of Science and Technology",
        volume: "2, Issue 10",
        pages: "87-92",
      },
      {
        paper: "Wormhole, a perspective of Dihedral from a running observer",
        authors: "Chowdhury S., Mukherjee A., Halder T., Gayen R.K., Misra Ray A., Chakravarty D.",
        journal: "ISAR Journal of Science and Technology",
        volume: "2, Issue 10",
        pages: "70-77",
      },
      {
        paper: "Brain, Breast and Chest Cancer of human bodies' exploration using Ashmit transform",
        authors: "Chowdhury S., Halder T., Gayen R.K., Chakravarty D.",
        doi: "10.1109/JRFID.2024.3422788",
        journal: "ISAR Journal of Medical and Pharmaceutical Sciences",
        volume: "2, Issue 10",
        pages: "104-114",
      },
      {
        paper: "Three Dual-Band and Dual-Linearly Polarized Antenna Configurations for UHF-RFID and WLAN Applications",
        authors: "Sarkar S.",
        doi: "10.1155/2024/2326362",
        journal: "IEEE Journal of Radio Frequency Identification",
        volume: "8",
        pages: "571-579",
      },
      {
        paper: "An Ultrathin Multiband Chiral Metasurface for Transmission and Asymmetric Absorption of Electromagnetic Waves",
        authors: "Sarkar S., Gupta B.",
        doi: "10.1515/freq-2024-0172",
        journal: "International Journal of RF and Microwave Computer-Aided Engineering",
        volume: "2024",
      },
      {
        paper: "A metasurface with three different configurations for absorption, transmission or reflection of incident electromagnetic waves",
        authors: "Sarkar S.",
        doi: "10.1109/ACCESS.2024.3511015",
        journal: "Frequenz",
      },
      {
        paper: "A Triple-Band Slotted Patch Antenna With Metasurface Loading for UHF-RFID, Satellite Communication, and 5G Applications",
        authors: "Sarkar S., Gupta B.",
        doi: "10.1109/ACCESS.2024.3511015",
        journal: "IEEE Access",
        volume: "13",
        pages: "80-89",
      },
      {
        paper: "Celebrating 25 years of the High impedance surface: Understanding its Working Principles and Exploring its Applications",
        authors: "Sarkar S.",
        doi: "10.1109/MMM.2025.3442223",
        journal: "IEEE Microwave Magazine",
        volume: "26, Issue 11",
      },
      {
        paper: "An Antenna-based Permittivity Sensor for Liquid and Solid Characterization with a Dedicated Uplink Band and Provision for LTE Communication",
        authors: "Sarkar S.",
        doi: "10.1109/JSEN.2025.3410810",
        journal: "IEEE Sensors Journal",
        volume: "25, Issue 16",
      },
      {
        paper: "A Circularly Polarized UHF- and Microwave-RFID Reader with a Metasurface-Inspired Superstrate",
        authors: "Sarkar S.",
        doi: "10.1109/LAWP.2025.3397370",
        journal: "IEEE Antennas and Wireless Propagation Letter",
      },
      {
        paper: "On Providing Energy Harvested Multi-hop D2D Communication with UAV Bridge in Disaster Area",
        authors: "Ghosh S., Roy S.D., Panigrahi B., Kundu S.",
        doi: "10.1007/s11277-024-11152-8",
        journal: "Wireless Personal Communications",
        volume: "138, Issue 3",
        pages: "1501-1529",
      },
      {
        paper: "Reactively Loaded CPW Fed Dual Notched Pentagonal Ultrawide Band Antenna",
        authors: "Chakraborty S., Pathak N.N., Chakraborty M.",
        doi: "10.2528/PIERC24052702",
        journal: "Progress In Electromagnetics Research C",
        volume: "146",
        pages: "127-139",
      },
      {
        paper: "Triple notched coplanar waveguide-fed novel ultrawide band antenna with time domain analysis",
        authors: "Chakraborty S., Gupta B., Chattopadhyay A., Pathak N.N., Chakraborty M.",
        doi: "10.1080/09205071.2024.2426673",
        journal: "Journal of Electromagnetic Waves and Applications",
        volume: "38, Issue 18",
        pages: "2124-2148",
      },
      {
        paper: "On the Performance of Rate Splitting Multiple Access for ISAC in Device-to-Multi-Device IoT Communications",
        authors: "Ghosh S., Singh K., Jung H., Li C.-P., Duong T.Q.",
        doi: "10.1109/TCCN.2024.3475729",
        journal: "IEEE Transactions on Cognitive Communications and Networking",
        volume: "11, Issue 1",
        pages: "333-348",
      },
    ],
  },
  {
    year: "July 2023 - June 2024",
    publications: [
      {
        paper: "Crystallinity Study of Electrodeposited SnO2 on FTO Substrate",
        authors: "Agasti U., Karmakar S., Kundu S.K., Sarkar M., Chatterjee S.",
        doi: "10.4028/p-5Z5LcE",
        journal: "Key Engineering Materials (Volume 980)",
        pages: "33-40",
      },
      {
        paper: "Role of Power Density, Frequency, Direction of Arrival and Polarization of Incident Field on Specific Absorption Rate Distribution Inside a Multilayer Fruits Model",
        authors: "Kundu A., Gupta B., Mallick A.I.",
        doi: "10.2528/PIERB24021102",
        journal: "Progress In Electromagnetics Research B",
        volume: "105",
        pages: "123-136",
      },
      {
        paper: "Music Recommendation System Using Collaborative Filtering and K-Means Clustering",
        authors: "Mukhopadhyay A. et al.",
        journal: "International Journal of Creative Research Thoughts (IJCRT)",
        volume: "11, Issue 7",
        pages: "e417-e423",
      },
      {
        paper: "Cadence Virtuoso Based Circuit Simulation of Universal Logic Gates: A Broad Tutorial",
        authors: "Maity I.",
        journal: "RP Current Trends in Engineering and Technology (ISSN: 2583-5491)",
        volume: "3, Issue 1",
        pages: "1-7",
      },
      {
        paper: "Design of an ultra-thin Polarization-Insensitive Quad-band Meta-material Absorber for C and X-band Applications",
        authors: "Surbhi, Kumar A., Kumar P., Sah P., Kumar M., Sen G.",
        doi: "10.37896/JXAT15.12/32905",
        journal: "JXAT",
        volume: "XV, Issue 12",
      },
      {
        paper: "On some Morita invariant radicals of semirings",
        authors: "Das M., Sardar S.K.",
        doi: "10.7151/dmgaa.1408",
        journal: "Discussiones Mathematicae General Algebra and Applications",
        volume: "43",
        pages: "85-100",
      },
      {
        paper: "A Low Profile Circularly Polarized Microstrip Antenna with Equilateral Triangular Patch and Parasitic Elements for Dual Application Band",
        authors: "Shaw M.",
        doi: "10.2528/PIERM23080904",
        journal: "Progress In Electromagnetics Research M",
        volume: "121",
        pages: "49-62",
      },
      {
        paper: "C-Band and L-Band AirSAR Image Fusion Technique using Anisotropic Diffusion",
        authors: "Choudhury A.P., Halder T., Gayen R.K., Roy A.M., Chakravarty D.",
        doi: "10.1016/j.matpr.2022.02.393",
        journal: "Materials Today: Proceedings",
        volume: "58, Part 1",
        pages: "433-436",
      },
      {
        paper: "Global Research Trend on Allergic Skin Disorders: A Bibliometric Analysis from 2001 to 2020",
        authors: "Podder I., Mondal H., Gayen R.K.",
        doi: "10.4103/idoj.idoj_481_22",
        journal: "Indian Dermatol Online J.",
        volume: "14, Issue 3",
        pages: "342-346",
      },
      {
        paper: "Outage Analysis of Hybrid VLC-RF System for IoT Application under Energy Harvesting",
        authors: "Ghosh S.",
        doi: "10.1007/s11235-023-01054-w",
        journal: "Telecommunication Systems",
        volume: "84",
      },
      {
        paper: "On the Performance of End-to-End Cooperative NOMA-Based IoT Networks With Wireless Energy Harvesting",
        authors: "Ghosh S., Al-Dweik A., Alouini M.-S.",
        doi: "10.1109/JIOT.2023.3267564",
        journal: "IEEE Internet of Things Journal",
        volume: "10, Issue 18",
        pages: "16253-16270",
      },
      {
        paper: "On EE Maximization in D2D-CRN With Eavesdropping Using LSTM-Based Channel Estimation",
        authors: "Ghosh S., Maity S.P., Chakraborty C.",
        doi: "10.1109/TCE.2024.3370313",
        journal: "IEEE Transactions on Consumer Electronics",
        volume: "70, Issue 1",
        pages: "3906-3913",
      },
      {
        paper: "Characteristics of ECR Plasma Etched and Heat Treated Commercial Copper Foil",
        authors: "Karmakar S., Kundu S.K., Bandyopadhyay S.K., Taki G.S.",
        doi: "10.1002/masy.202100355",
        journal: "Macromolecular Symposia",
        volume: "407, Issue 1",
      },
    ],
  },
];

export default function InnovationJournal() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
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
              <BookOpen className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Journal Publications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto font-light leading-relaxed">
              Research published in high-impact peer-reviewed academic journals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {journalData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-20">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px bg-indigo-200 flex-1"></div>
                <h2 className="text-3xl font-black text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700 px-4">
                  {yearData.year}
                </h2>
                <div className="h-px bg-indigo-200 flex-1"></div>
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
                    <div className="relative group rounded-[2rem] bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 transition-all duration-500 shadow-xl hover:shadow-2xl shadow-blue-900/5 hover:shadow-indigo-500/20 h-full border border-gray-100 flex flex-col overflow-hidden">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="p-8 flex flex-col h-full z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-800 shadow-sm border-blue-200 transition-colors">
                            <FileText className="w-3 h-3 mr-1" />
                            Journal Article
                          </Badge>
                          {pub.indexing && (
                            <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                              {pub.indexing}
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-700 transition-colors line-clamp-3">
                          {pub.paper}
                        </h3>

                        <div className="space-y-4 mb-6 flex-grow">
                          <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <User className="text-indigo-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Authors</p>
                              <p className="text-sm font-semibold text-slate-700 leading-snug">{pub.authors}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <BookOpen className="text-indigo-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Journal</p>
                              <p className="text-sm font-semibold text-slate-700 leading-snug italic">{pub.journal}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                            {pub.volume && <span>Vol: {pub.volume}</span>}
                            {pub.pages && <span>pp: {pub.pages}</span>}
                          </div>

                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-bold transition-colors group/link"
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
