import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, ExternalLink, Calendar } from "lucide-react";
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
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Journal Publications</h1>
          <p className="text-xl">Research published in peer-reviewed academic journals</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {journalData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
                <p className="text-gray-600 mt-2">{yearData.publications.length} Publications</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.publications.map((pub, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Journal Article
                          </Badge>
                          {pub.indexing && (
                            <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                              {pub.indexing}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {pub.paper}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Authors</p>
                            <p className="text-sm text-gray-600">{pub.authors}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700">Journal</p>
                          <p className="text-sm text-gray-600">{pub.journal}</p>
                        </div>

                        {pub.year && (
                          <div className="flex items-start">
                            <Calendar className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Year</p>
                              <p className="text-sm text-gray-600">{pub.year}</p>
                            </div>
                          </div>
                        )}

                        {pub.volume && (
                          <div>
                            <p className="text-sm font-medium text-gray-700">Volume</p>
                            <p className="text-sm text-gray-600">{pub.volume}</p>
                          </div>
                        )}

                        {pub.pages && (
                          <div>
                            <p className="text-sm font-medium text-gray-700">Pages</p>
                            <p className="text-sm text-gray-600">{pub.pages}</p>
                          </div>
                        )}

                        {pub.doi && (
                          <div className="mt-4">
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-iedc-blue hover:text-iedc-dark-blue font-medium transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View DOI
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
