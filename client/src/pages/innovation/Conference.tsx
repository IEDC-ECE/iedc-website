import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, ExternalLink, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { conferencePublications2025To2026 } from "@/data/publications-2025-2026";

type ConferencePublication = {
  paper: string;
  authors: string;
  doi?: string;
  conference: string;
  date: string;
  indexing?: string;
};

type AcademicYearData = {
  year: string;
  publications: ConferencePublication[];
};

const conferenceData: AcademicYearData[] = [
  {
    year: "July 2025 - June 2026",
    publications: conferencePublications2025To2026,
  },
  {
    year: "July 2024 - June 2025",
    publications: [
      {
        paper: "Comparative Study of Machine Learning Models for Diabetes Prediction",
        authors: "Das A.K., Basak S., Choudhary S.",
        doi: "10.1109/IEMENTech65115.2025.10959680",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 31 - February 2, 2025",
      },
      {
        paper: "A Brief Review on Photocatalytic Materials for Waste Water Treatment",
        authors: "Saha P., Seth S., Saha S., Kundu S.K., Karmakar S.",
        doi: "10.1109/IEMENTech65115.2025.10959605",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Lithium-Ion Batteries in EVs: Comparative Analysis and BMS Innovations",
        authors: "Karmakar S., Sengupta S., Pal N., Choudhary Y.V., Jana A., Kundu S.K.",
        doi: "10.1109/IEMENTech65115.2025.10959342",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Fetal Health Classification Using Machine Learning on Cardiotocography Data",
        authors: "Karmakar S., Ray S., Basak S., Chatterjee S., Kundu S.K.",
        doi: "10.1109/IEMENTech65115.2025.10959387",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "A Brief Review on AI Based Stock Market Prediction Tools",
        authors: "Basu S., Shaw A., Thakur R., Kundu S.K., Karmakar S.",
        doi: "10.1109/IEMENTech65115.2025.10959511",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "UAV-Driven Surveillance: Security Enhancement with ML and Edge Detection Integrating LIDAR Sensor for Trespassing and Area Mapping",
        authors: "Karmakar S., Saha S., Saha S., Aich S., Saha N., Roy D., Padala P.",
        doi: "10.1109/IEMENTech65115.2025.10959636",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "FPGA-Based Adaptive Traffic Management System for Optimizing Five-Point Intersection Flow",
        authors: "Karmakar S. et al.",
        doi: "10.1109/IEMENTech65115.2025.10959162",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Development of a Cost-Effective and Portable Digital Storage Oscilloscope Using Raspberry Pi Pico and Mobile App",
        authors: "Karmakar S. et al.",
        doi: "10.1109/IEMENTech65115.2025.10959540",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Real-Time Virtual Classroom Platform: Integrating React, Firebase, WebRTC, and Socket.io",
        authors: "Das A.K., Ghosh S.",
        doi: "10.1109/IEMENTech65115.2025.10959621",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 31 - February 2, 2025",
      },
      {
        paper: "Design and FPGA Implementation of an Efficient Squarer Circuit Using Reversible Logic",
        authors: "Saha M.L., Roy D., Maity A., Sinha A., Sarkar M., Ghosh A.",
        doi: "10.1109/EDKCON62339.2024.10870860",
        conference: "IEEE International Conference of Electron Devices Society Kolkata Chapter (EDKCON)",
        date: "2024",
      },
      {
        paper: "A Single CORDIC Based Architecture for Real-time Tomographic Image Reconstruction for Industrial Applications",
        authors: "Ghosh A., Dhar A.S., Chakrabarti I.",
        doi: "10.1109/CALCON63337.2024.10914154",
        conference: "IEEE Calcutta Conference (CALCON) 2024",
        date: "2024",
      },
      {
        paper: "Designing of Smart Pothole Detection System",
        authors: "Maji A., Sinha S., Banerjee S., Das A.K., Gangopadhyay M., Rateria R.",
        doi: "10.1109/ICCES63552.2024.10860139",
        conference: "IEEE 9th International Conference on Communication and Electronics Systems (ICCES2024)",
        date: "December 16-18, 2024",
      },
      {
        paper: "Fine-Tuning Gemma-2B for Text-to-SQL Generation",
        authors: "Neogi H., Ray J., Banerjee S.",
        doi: "10.1109/ICCES63552.2024.10860111",
        conference: "IEEE 9th International Conference on Communication and Electronics Systems (ICCES2024)",
        date: "December 16-18, 2024",
      },
      {
        paper: "Deep Learning for Brain Tumor Detection with FPGA Pathway",
        authors: "Mallick A., Prasad H., Maji P., Banerjee S., Mondal H.K.",
        doi: "10.1109/iSES63344.2024.00082",
        conference: "IEEE 9th International Conference on Communication and Electronics Systems (ICCES2024)",
        date: "December 16-18, 2024",
      },
      {
        paper: "Machine Learning Driven Framework for Flood Risk Index Calculation",
        authors: "Sarkar S., Mondal S., Banerjee S.",
        doi: "10.1109/IEMENTech65115.2025.10959467",
        conference: "IEEE 8th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2025)",
        date: "January 31 - February 2, 2025",
      },
      {
        paper: "Comparative Analysis of CNN and KNN for Facial Recognition-Based Attendance Systems",
        authors: "Ghorai A., Mandal D., Mukherjee S., Paul A., Pal A., Dey S., Roy S., Burman S., Gangopadhyay M., Banerjee S.",
        conference: "European Conference on Interdisciplinary Research in Technology and Management",
        date: "April 9-11, 2025",
      },
      {
        paper: "Design of a Voltage Controlled Millimeter-Wave Oscillator for 5G/6G Applications in 180nm CMOS Technology",
        authors: "Chatterjee S., Saha S., Das K., Ghosh A.",
        doi: "10.1109/IEMENTech65115.2025.10959429",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "A Polarization Independent Artificial Magnetic Conductor with Wide Reflection Phase Bandwidth and Good Angular Stability",
        authors: "Mondal A., Bose R., Pal S., Kundu A., Sarkar S.",
        doi: "10.1109/CALCON63337.2024.10914346",
        conference: "CALCON 2024",
        date: "2024",
      },
      {
        paper: "Dual-band and Dual-Linearly Polarized Square Patch Antenna with Circular Ring-shaped Slot",
        authors: "Kole A., Nandy R., Saha R., Kundu A., Sarkar S.",
        doi: "10.1109/CALCON63337.2024.10914322",
        conference: "CALCON 2024",
        date: "2024",
      },
      {
        paper: "Automated Crop Disease Detection Using Deep Learning: A Scalable Smart Farming Framework",
        authors: "Karmakar S., Mondal M., Mondal A., Chowdhury A., Choudhury S., Paul P., Biswas A.",
        doi: "10.1109/IEMENTech65115.2025.10959490",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 2025",
      },
      {
        paper: "IoT-Enhanced Battery Management System: Real-Time Monitoring, Predictive Analytics and Safety Optimization",
        authors: "Bhanja S., Sinha K., Pati S., Majumder A., Mukhopadhyay A., Chakraborty A.",
        doi: "10.1109/IEMENTech65115.2025.10959344",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 2025",
      },
      {
        paper: "Advanced Attendance Monitoring: A Unified System Using QR Codes and Facial Recognition",
        authors: "Pati S., Majumder A., Gangopadhyay M., Sen G., Chakraborty A.",
        doi: "10.1109/IEMENTech65115.2025.10959151",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 2025",
      },
      {
        paper: "FPGA-Based 3D EM/MPM Simulation Framework for Medical Image Segmentation Applications",
        authors: "Karmakar S., Chakraborty A., Banerjee S., Mondal A., Dutta S., Nandi S.",
        doi: "10.1109/IEMENTech65115.2025.10959571",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 2025",
      },
      {
        paper: "Non-Invasive Junction Temperature Measurement Using Forward Voltage Drop of High-Power pcLED Under Tropical Conditions",
        authors: "Chakraborty A., Ganguly R., Mitra M.",
        doi: "10.1109/IEMENTech65115.2025.10959524",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "January 2025",
      },
      {
        paper: "Secured Visible Light Communication",
        authors: "Banerjee A., Pradhan D., Mukhopadhyay A.",
        doi: "10.1109/IEMENTech65115.2025.10959582",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Design of a Flexible Metasurface based dual Bandpass Filter in ISM and 5G cellular band for Bio-medical Applications",
        authors: "Bhattacharjee S., Nandi S., Chakraborty S., Sengupta A., Kundu S.K., Mukhopadhyay A., Gayen R.K.",
        doi: "10.1109/IEMENTech65115.2025.10959546",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Acetone Sensing Performance of Pristine and Gold Doped Graphene Sheet: A Comparative Analysis",
        authors: "Maity I., Chatterjee S., Bhanja S.",
        doi: "10.1109/VDAT63601.2024.10705732",
        conference: "28th IEEE International Symposium on VLSI Design and Test (VDAT-2024)",
        date: "September 1-3, 2024",
      },
      {
        paper: "Improvement in Toxic CO Detection Capabilities via Incorporating Pt Dopant into ZnO Nanotube based Gas Sensor Devices: An Atomistic Modeling",
        authors: "Maity I., Bhattacharya S., Majumdar A.",
        doi: "10.1109/EDKCON62339.2024.10870640",
        conference: "3rd IEEE Electron Devices Kolkata Conference (EDKCON 2024)",
        date: "November 30 - December 1, 2024",
      },
      {
        paper: "A Comprehensive Sensitivity Analysis of Adenine Nucleobase on Pristine and Platinum-Decorated ZnO Nanosheets: An Interaction Dynamics",
        authors: "Maity I., Bhaumik S., Hazra S.",
        doi: "10.1109/EDKCON62339.2024.10870659",
        conference: "3rd IEEE Electron Devices Kolkata Conference (EDKCON 2024)",
        date: "November 30 - December 1, 2024",
      },
      {
        paper: "Customized Design and Optimization of New Materials in Silvaco TCAD Tool by Understanding Inherent Material Defining Processes and Useful Simulation Methods: An Extensive Study",
        authors: "Maity I., Mondal A.",
        doi: "10.1109/EDKCON62339.2024.10870805",
        conference: "3rd IEEE Electron Devices Kolkata Conference (EDKCON 2024)",
        date: "November 30 - December 1, 2024",
      },
      {
        paper: "A Comprehensive Analysis on Comparator, Encoder Circuit to Develop Flash Type ADC Based on Different Implementation Routes",
        authors: "Maity I., Maity S., Bhattacharya S.",
        doi: "10.1109/SILCON63976.2024.10910918",
        conference: "IEEE Silchar Subsection Conference (SILCON-2024)",
        date: "November 15-17, 2024",
      },
      {
        paper: "Utilization of Image Processing Tools for a Comparative Study on RGB and HSV Color Space: Targeting Feature Extraction of Banana Fruit Image During Different Ripeness Stages",
        authors: "Maity I., Samanta S.",
        doi: "10.1109/SILCON63976.2024.10910858",
        conference: "IEEE Silchar Subsection Conference (SILCON 2024)",
        date: "November 15-17, 2024",
      },
      {
        paper: "Investigation on Electrochemical Sensing Properties of Rh-decorated Graphene Nanosheet in the Exposure of 1-Propanol Vapor: A DFT Study",
        authors: "Maity I., Bhanja S., Dutta R.",
        doi: "10.1109/CALCON63337.2024.10914226",
        conference: "IEEE Calcutta Conference (CALCON 2024)",
        date: "December 14-15, 2024",
      },
      {
        paper: "Modulation of Electronic Properties in Triple Metal Gate Vertical Tunnel Field-Effect Transistors by the Variation of Metal Gate Dielectrics",
        authors: "Maity I., Bhattacharjee A., Mondal A.",
        doi: "10.1109/CALCON63337.2024.10914239",
        conference: "IEEE Calcutta Conference (CALCON 2024)",
        date: "December 14-15, 2024",
      },
      {
        paper: "An Efficient Approach to Improve Diagnostic Accuracy into Findings of Breast Cancerous Cells with SVM and Logistic Regression Models",
        authors: "Maity I., Bhattacharya S., Maity S.",
        doi: "10.1109/C3IT60531.2024.10829468",
        conference: "4th International Conference on Computer Communication Control and Information Technology (C3IT-2024)",
        date: "September 28-29, 2024",
      },
      {
        paper: "Design and Simulation of a Low Power OTA based Low Noise Amplifier using Cadence Virtuoso",
        authors: "Maity I., Biswas A., Gangopadhyaya M.",
        conference: "International Conference on Interdisciplinary Research in Technology & Management (IRTM 2024)",
        date: "December 5-7, 2024",
      },
      {
        paper: "A First Principle Based Comparative Study Between Pristine and Au-modified Graphene Nanosheet towards Acetaldehyde Sensing Performance",
        authors: "Maity I., Chatterjee S., Bhanja S.",
        doi: "10.1109/VLSID64188.2025.00098",
        conference: "38th International Conference on VLSI Design & 24th International Conference on Embedded Systems (VLSID-2025)",
        date: "January 4-8, 2025",
      },
      {
        paper: "Exploring the Sensing Ability of Pristine and Ag-Doped WS₂ for Detection of Colon Cancer Biomarkers: A First-Principles Study",
        authors: "Maity I., Chatterjee S., Bhanja S.",
        doi: "https://doi.org/10.1007/s00542-025-05925-x",
        conference: "International Conference on Micro/Nanoelectronics Devices, Circuits and Systems (MNDCS 2025)",
        date: "January 29-31, 2025",
      },
      {
        paper: "Improving NH3 Gas Sensing Performance through Pt-doped ZnO Nanotube: An Atomistic Modeling Study",
        authors: "Maity I., Bhattacharya S., Maity S.",
        conference: "International Conference on Micro/Nanoelectronics Devices, Circuits and Systems (MNDCS 2025)",
        date: "January 29-31, 2025",
      },
      {
        paper: "Comparative Study between Pristine MoS2 and Rh-Doped MoS2 based 2D TMDs for Identifying the Presence of SO2 Gas",
        authors: "Maity I., Shaw Y., Gangopadhyay M.",
        conference: "5th International Conference on Current Trends in Materials Science and Engineering 2025 (CTMSE 2025)",
        date: "February 28 - March 2, 2025",
      },
      {
        paper: "Performance Analysis of MoS2 based Gas Sensor Devices Targeting to Detect Different Nitrogen Oxides",
        authors: "Maity I., Biswas S., Gangopadhyay M.",
        conference: "5th International Conference on Current Trends in Materials Science and Engineering 2025 (CTMSE 2025)",
        date: "February 28 - March 2, 2025",
      },
      {
        paper: "A Comparative Study on HSV and LAB Colour Space: Targeting Feature Extraction from Mango Sample Image",
        authors: "Maity I., Samanta S., Sharma P.",
        conference: "International Conference on Interdisciplinary Research in Technology & Management (IRTM 2024)",
        date: "December 5-7, 2024",
      },
      {
        paper: "A Comprehensive Study of the Correlation Between Blockchain Dynamics and Cybersecurity: Complementing Digital Trust and Security for Cryptocurrency Transactions",
        authors: "Maity I., Bhaumik S., Hazra S.",
        conference: "Interdisciplinary Research in Technology & Management (IRTM 2024)",
        date: "December 5-7, 2024",
      },
      {
        paper: "DFT-based Analysis of Toxic VOCs to Evaluate Their Structural Stability and Sustainability",
        authors: "Maity I., Shaw Y., Jha A.K.",
        conference: "International Conference on Advanced Physics for Sustainable Future: Innovations and Solutions (IEMPHYS 2024)",
        date: "October 25-27, 2024",
      },
      {
        paper: "A Metasurface-Based Flexible Triple Bandpass Filter in ISM and IoT Bands Towards Wearable Applications",
        authors: "Sengupta A., Banerjee S., Mishra V.K., Sen G., Sarkar S., Kundu A., Bhattacharya S.",
        doi: "10.1109/MAPCON61407.2024.10923507",
        conference: "IEEE Microwaves, Antennas, and Propagation Conference (MAPCON)",
        date: "2024",
      },
      {
        paper: "Design of a Multi-band printed Yagi-Uda antenna for CubeSat Communication",
        authors: "Sinha K., Sarkar S., Sen G.",
        doi: "10.1109/SILCON63976.2024.10910767",
        conference: "IEEE SILCON 2024",
        date: "2024",
      },
      {
        paper: "Design and Fabrication of a 3D Printed Helical Antenna for 2.45 GHz ISM Band Applications with Circular Polarization and High Gain",
        authors: "Bal S., Mandal S., Sen G.",
        doi: "10.1109/MAC61551.2024.10837373",
        conference: "IEEE MAC 2024",
        date: "October 2024",
      },
      {
        paper: "A Miniaturized Microstrip Three-Way Equal Power Divider using Hybrid Lumped and Distributed Elements and Recombinant Topology",
        authors: "Ghosh R., Das D., Sen G.",
        doi: "10.1109/CALCON63337.2024.10914243",
        conference: "IEEE CALCON 2024",
        date: "2024",
      },
      {
        paper: "Design of a Trishul Shape Triple-Band CPW-Fed Antenna for ISM band, IOT and Satellite Communication",
        authors: "Kundu S., Routh K., Sen G.",
        doi: "10.1109/CALCON63337.2024.10914274",
        conference: "IEEE CALCON 2024",
        date: "2024",
      },
      {
        paper: "A Gain Enhanced Dual Band Wearable Microstrip Antenna for IoT Band",
        authors: "Mondal N., Biswas A., Ram D., Kundu A., Sarkar S., Sen G., Bhattacharyya S.",
        doi: "10.46620/URSIEMTS25/DJUR8376",
        conference: "URSI International Symposium on Electromagnetic Theory (EMTS)",
        date: "2025",
      },
      {
        paper: "A Comparative Study of Filter Responses of Bandpass Filter for Sub-6 Band Application",
        authors: "Majumder A., Bharti D., Kumar M., Gangopadhyaya M., Sen G.",
        doi: "10.1109/IEMENTech65115.2025.10959555",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Design of a Triple Band Microstrip Patch Antenna and Its Performance Enhancement using Triple Band AMC for Wearable Applications",
        authors: "Koley S., Banerjee S., Ganguly M., Sen G.",
        doi: "10.1109/IEMENTech65115.2025.10959562",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Recent Advances in Planar and Conformal Meta-Surfaces in the Design of Multiband Array Antennas: Challenges and Opportunities",
        authors: "Choudhary S., Sen G., Gangopadhyay M., Sikder S.",
        doi: "10.1109/IEMENTech65115.2025.10959573",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Designing and Implementing an IoT-Based Long-Distance Fire-Extinguishment System \"Stationary 3-Axis Fire-Emergency Response Base\"",
        authors: "Kundu S., Dey S., Abdullha M.M., Sen G., Gangopadhyay M.",
        doi: "10.1109/IEMENTech65115.2025.10959508",
        conference: "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Optimized Brain Tumor Detection and Classification on Efficient Net B3",
        authors: "Banerjee S. et al.",
        doi: "10.1007/978-981-97-6806-6_33",
        conference: "Intelligent Electrical Systems and Industrial Automation",
        date: "November 2024",
      },
      {
        paper: "Fuzzy Logic Triggered Line Ensuing Robot with Edge And Obstacle Avoidance",
        authors: "Banerjee S. et al.",
        doi: "10.1007/978-981-97-6806-6_16",
        conference: "Intelligent Electrical Systems and Industrial Automation",
        date: "November 2024",
      },
      {
        paper: "Unveiling the Dynamics of Stock Market Crashes: From Price Bubbles to Machine",
        authors: "Banerjee S. et al.",
        doi: "10.1007/978-981-97-6806-6_14",
        conference: "Intelligent Electrical Systems and Industrial Automation",
        date: "November 2024",
      },
      {
        paper: "Advancements in Grey Wolf Optimization (GWO): A Comprehensive Evolution for",
        authors: "Banerjee S. et al.",
        doi: "10.1007/978-981-97-6806-6_13",
        conference: "Intelligent Electrical Systems and Industrial Automation",
        date: "November 2024",
      },
      {
        paper: "Leveraging Artificial Intelligence for Enhanced Stock Market Trading Strategy",
        authors: "Banerjee S. et al.",
        doi: "10.1007/978-981-97-6806-6_15",
        conference: "Intelligent Electrical Systems and Industrial Automation",
        date: "November 2024",
      },
      {
        paper: "Design and implementation of a portable Refrigerator for sustainable future",
        authors: "Adhya S., Paul A., Dutta S., Pal N., Saha S., Banerjee S., Sen G.",
        conference: "4th International conference on Interdisciplinary Research in Technology & Management (IRTM 2024)",
        date: "December 5-7, 2024",
      },
    ],
  },
  {
    year: "July 2023 - June 2024",
    publications: [
      {
        paper: "A Novel QR Code Based Smart Attendance Tracking System",
        authors: "Pati S., Bhanja S., Majumder A., Sahu S., Banerjee S., Sen G.",
        doi: "10.1109/IEMENTech60402.2023.10423485",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Optimizing Urban Mobility: A Comprehensive Framework for Smart Parking Systems Integration Using IoT and Sensor Technologies",
        authors: "Sen S., Mukherjee U., Banerjee S., Biswas A., Ray S., Chowdhuri S.",
        doi: "10.1109/IEMENTech60402.2023.10423488",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Securing the Skies: An UAV-Based Framework for Safe and Authenticated Product Delivery Using QR Codes",
        authors: "Saha S., Pati S., Majumder A., Bhanja S., Sen G., Banerjee S.",
        doi: "10.1109/IEMENTech60402.2023.10423544",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Unmanned Aerial Vehicle for District Surveillance with Computer Vision and Machine Learning",
        authors: "Saha S., Banerjee S., Dhar S., Bandyopadhyay A., Saha S., Ray S.",
        doi: "10.1109/IEMENTech60402.2023.10423491",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Development and Evaluation of a User-Friendly and Lightweight Weather Map Application: Enhancing Access to Real-Time Meteorological Data",
        authors: "Das A.K., Ghosh S.",
        doi: "10.1109/IEMENTech60402.2023.10423443",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 18-20, 2023",
      },
      {
        paper: "An Ultra Low Power Process Compensated Current Source for MICS Band Applications",
        authors: "Gayen S. et al.",
        doi: "10.1109/IEMENTech60402.2023.10423477",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Analysis of Lumen Maintenance of the High-Power pcLED bulbs produced in the Unorganized Sector under Tropical Conditions",
        authors: "Chakraborty A., Das M., Ganguly R., Mitra M.",
        doi: "10.1109/IEMENTech60402.2023.10423472",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Recurrent Neural Network-based Closing Index Prediction of Indian Software Industry Stocks",
        authors: "Mukherjee C., Chakraborty A., Chakraborty S., Chakraborty S., Roy P., Bhattacharjee A.",
        doi: "10.1109/IATMSI61012.2024.10503019",
        conference: "IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)",
        date: "March 2024",
      },
      {
        paper: "Power, Performance, and Area Optimisation of the RISC-V Processor",
        authors: "Ganguly A., Chakraborty A., Ambekar A.A., Mondal H.K.",
        doi: "10.1109/iSES63344.2024.00064",
        conference: "IEEE International Symposium on Smart Electronic Systems (iSES)",
        date: "December 2024",
      },
      {
        paper: "DroneMag: A novel approach using drone technology for detection of magnetic metal",
        authors: "Pati S., Mishra B.K., Bishnu S.K., Mukhopadhyay A., Chakraborty A.",
        doi: "10.1109/IEMENTech60402.2023.10423440",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Hand Gesture Based Recognition System",
        authors: "Mukhopadhyay A., Chakrabarty A., Das A.A., Sarkar A.",
        doi: "10.1109/IEMENTech60402.2023.10423509",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A Novel Approach to Personalized Comparison of Online Products Based on Price and Quality",
        authors: "Mukhopadhyay A., Mondal S., Paul P., Mitra D., Chakraborty A.",
        doi: "10.1109/IEMENTech60402.2023.10423514",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Maturity Level Detection of Banana Fruit by Image Processing Technique",
        authors: "Maity I., Kashyap M., Sarkar M., Kumar R.",
        conference: "8th International Conference on Computers and Devices for Communication (CODEC 2023)",
        date: "December 14-16, 2023",
      },
      {
        paper: "DFT based Molecular Structure Analysis of DNA Nucleotides: Quantum Chemistry based Approach",
        authors: "Maity I., Dutta R., Das D., Maity I.",
        doi: "10.1109/IEMENTech60402.2023.10423492",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech-2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Emxploring Arduino based Electronic Circuit Design: A Study of Innovative Applications and Prototypes",
        authors: "Maity I., Bhattacharya S., Bhattacharjee A., Bhaumik S., Shit A., Paul S., Gangopadhyaya M.",
        doi: "10.1109/IEMENTech60402.2023.10423427",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech-2023)",
        date: "December 18-20, 2023",
      },
      {
        paper: "Understanding 2-Propanol Sensing Mechanism of Pd Modified Graphene Based Gas Sensor Devices using DFT Study",
        authors: "Maity I., Das S., Gangopadhyay M., Maity I.",
        doi: "10.1109/VLSID60093.2024.00011",
        conference: "37th International Conference on VLSI Design & the 23rd International Conference on Embedded Systems (VLSID 2024)",
        date: "January 6-10, 2024",
      },
      {
        paper: "Detection of Breast Cancer using a Flexible Antenna at ISM Band",
        authors: "Sarkar D., Sen G.",
        doi: "10.1109/IEMENTech60402.2023.10423537",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Design of a Flexible Multiband Antenna with Frequency Reconfigurable Operation",
        authors: "Sen G.",
        conference: "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Dual-band and dual-polarized antenna for GPS band and IOT applications",
        authors: "Chowdhury S., Sinha K., Sen G.",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Design of a Miniaturized Antenna at GPS Band with Meander Slot Technique",
        authors: "Mandal S., Banerjee S., Sen G.",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "IOT Based Home Security System",
        authors: "Adhya S., Sen G.",
        doi: "10.1109/IEMENTech60402.2023.10423499",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Advancements in Fall Detection Technologies: A Comprehensive Review and Innovative Solutions",
        authors: "Basu I., Ray S., Sarkar S., Saha S., Panda S.",
        doi: "10.1109/IEMENTech60402.2023.10423535",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Applications of Machine Learning Techniques in Macroeconomic Analysis – A Review",
        authors: "Basu I., Mukherjee R.",
        conference: "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A low-profile circular microstrip antenna with recessed ground",
        authors: "Shaw M.",
        doi: "10.1109/IEMENTech60402.2023.10423519",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Low-Resolution Face Recognition(LRFR) System: A Review",
        authors: "Ali A., Ghosh A., Chakrabarty R., Chaudhuri S.S.",
        doi: "10.1109/IEMENTech60402.2023.10423438",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "The Future of Real-Time Remote Monitoring: The Role of Low-Cost IoT Sensor Systems",
        authors: "Chakrabarty R., Karmakar R., Das N.K., Shivam S., Mondal I.",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Weed Segmentation: A Novel Dataset, Benchmark and YOLO Baseline",
        authors: "Chakrabarty R., Sardar T., Koley S., Das S., Sengupta I., Ali A., Chaudhuri S.S.",
        doi: "10.1109/IEMENTech60402.2023.10423448",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Design and Performance Analysis of Dynamic and Hybrid CMOS Threshold Logic Based Full Adder Circuit",
        authors: "Sarkar M., Taki G.S., Chakraborty R., Agasti U., Gayen S.",
        doi: "10.1109/CODEC60112.2023.10465873",
        conference: "8th International Conference on Computers and Devices for Communication (CODEC)",
        date: "December 2023",
      },
      {
        paper: "High Impedance Surfaces: Unique Properties and Applications",
        authors: "Sarkar S.",
        conference: "IEMTRONICS 2024",
        date: "2024",
      },
      {
        paper: "Novel Ultrawide band Multi Input/Multi Output Antenna Design with Single Notch Characteristics and Investigation with Improved Isolation",
        authors: "Chakraborty S., Mukherjee M., Ray S., Pathak N.N., Chakraborty M.",
        doi: "10.1109/IEMENTech60402.2023.10423397",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "On the Performance Analysis of RSMA Based Transmission in STAR-RIS-Aided ISAC Systems",
        authors: "Ghosh S., Singh K., Pan C., Wu Q., Li C.-P.",
        doi: "10.1109/ICC51166.2024.10623034",
        conference: "IEEE International Conference on Communications (ICC 2024)",
        date: "2024",
      },
      {
        paper: "Downlink Rate Coverage Probability Analysis for HAP Assisted Backhauling of Small Cells Using 3GPP 3D Channel Models",
        authors: "Acharya T., S A., Ghosh S., Chandra T.",
        conference: "International Conference on Signal Processing and Communications (SPCOM)",
        date: "2024",
      },
      {
        paper: "Metal loaded 3D-FSS with adjustable Transmission Poles and Transmission Zeros",
        authors: "Ray S., Mondal S., Chatopadhyay C., Mishra G.K., Sanyal R., Sarkar P.P.",
        doi: "10.1109/CODEC60112.2023.10465902",
        conference: "8th International Conference on Computers and Devices for Communication (CODEC)",
        date: "December 2023",
      },
      {
        paper: "Automatic Anesthesia Based On Real Time Heart Beat",
        authors: "Shaw S., Sardar S., Chatterjee H., Ghosh G., Ray S.",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Design and development of Dual wide band Frequency Selective Surfaces",
        authors: "Mandal S., Ray J., Ray S., Mishra G.K., Sanyal R., Sarkar P.P., Mondal S.",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A Robotic Approach for Detecting Alive Human Beings during Conflict Situation",
        authors: "Pradhan D., Bhoumik S., Paul S., Banerjee A., Ghosh G., Ray S., Mukhopadhyay A., Das A.K.",
        doi: "10.1109/IEMENTech60402.2023.10423495",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Performance Analysis of FinFETs with Different Fin Structures",
        authors: "Ghoshal B., Karmakar S., Kundu S.K., Sarkar M.",
        conference: "IEEE 5th International Conference on Advances in Electronics and Communications",
        date: "2023",
      },
      {
        paper: "A Study on Device Properties of High Electron Mobility Transistors",
        authors: "Taki P., Padala P., Panja R., Karmakar S., Kundu S.K., Sarkar M.",
        doi: "10.1109/IEMENTech60402.2023.10423550",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Detection of induction motor faults: Through fuzzy logic and frequency analysis",
        authors: "Bishnu S.K., Sengupta S., Pal N., Karmakar S., Chakrabarty A., Biswas A.",
        doi: "10.1109/IEMENTech60402.2023.10423483",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Detection of Blood Glucose Level: A Machine Learning Approach",
        authors: "Karmakar S., Ghosh P.K., Kundu D., Chakraborty S., Ghosh S., Kundu S.K.",
        doi: "10.1109/IEMENTech60402.2023.10423401",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "In-Situ X-ray Photoelectron Spectroscopy of size-selected Al-Nanoclusters on Si-Substrate",
        authors: "Agasti U., Kundu S.K., Karmakar S., Sarkar M., Bhattacharyya S.",
        doi: "10.1109/IEMENTech60402.2023.10423513",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Advancements in Schottky Diode Technology: A Comprehensive Review",
        authors: "Karmakar S., Kundu S.K., Sarkar S., Mondal A., Bandyopadhyay A., Ray S., Kamal N.",
        doi: "10.1109/IEMENTech60402.2023.10423504",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "ECR plasma-assisted single-step synthesis of hydrogenated graphene",
        authors: "Karmakar S., Taki G.S.",
        doi: "10.1109/IEMENTech60402.2023.10423497",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A MATLAB Expedition Into Image Processing",
        authors: "Karmakar S., Mandal D., Pratihar M., Chakraborty A., Biswas A., Talukdar S.",
        doi: "10.1109/IEMENTech60402.2023.10423475",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Study of Field Distribution and Energy Density in an Indigenous DC Magnetron Sputtering Setup",
        authors: "Banerjee D., Ghosh S., Manna T., Kundu S.K., Karmakar S., Taki G.S.",
        doi: "10.1109/IEMENTech60402.2023.10423395",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A Novel Method for Accurate and Automated Brain Tumor Detection using CNN",
        authors: "Karmakar S. et al.",
        doi: "10.1109/IEMENTech60402.2023.10423493",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "Image Compression and Decompression based on FFT algorithm",
        authors: "Karmakar S., Mondal M., Roy D., Mitra S., Paul P., Pal T., Chakraborty A.",
        doi: "10.1109/IEMENTech60402.2023.10423491",
        conference: "7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech)",
        date: "December 2023",
      },
      {
        paper: "A Review on Bioinformatics using DNA Cryptography",
        authors: "Kairi A., Bhadra T., Karmakar S., Verma A., Saha S., Gupta S.",
        doi: "10.1109/IEMENTech65115.2025.10959556",
        conference: "8th International Conference on Materials Engineering & Nano-Technology (IEMENTech)",
        date: "2025",
      },
      {
        paper: "Crystallinity and Optical Property Analysis of Magnetron Sputtered Carbon Nitride Thin Films",
        authors: "Kundu S.K., Taki G.S.",
        conference: "IEMENTech 2023: 7th International Online Conference on Electronics, Materials Engineering",
        date: "2024",
      },
      {
        paper: "Third Eye: Obstacle Avoidance Device for Visually Impaired Persons",
        authors: "Karmakar S., Sengupta S., Roy A., Kundu S., Priya G.",
        conference: "IRTM 2023 International Conference on Interdisciplinary Research Technology and Management",
        date: "2024",
      },
    ],
  },
];

export default function InnovationConference() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-xl border border-white/20">
              <Users className="w-8 h-8 text-teal-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
              Conference Publications
            </h1>
            <p className="text-xl md:text-2xl text-teal-100/80 max-w-3xl mx-auto font-light leading-relaxed">
              Papers presented at leading national and international conferences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {conferenceData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-20">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px bg-teal-200 flex-1"></div>
                <h2 className="text-3xl font-black text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-emerald-700 px-4">
                  {yearData.year}
                </h2>
                <div className="h-px bg-teal-200 flex-1"></div>
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
                    <div className="relative group rounded-[2rem] bg-white hover:bg-gradient-to-br hover:from-white hover:to-teal-50/50 transition-all duration-500 shadow-xl hover:shadow-2xl shadow-teal-900/5 hover:shadow-emerald-500/20 h-full border border-gray-100 flex flex-col overflow-hidden">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="p-8 flex flex-col h-full z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-teal-100 hover:bg-teal-200 text-teal-800 shadow-sm border-teal-200 transition-colors">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Conference Paper
                          </Badge>
                          {pub.indexing && (
                            <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                              {pub.indexing}
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors line-clamp-3">
                          {pub.paper}
                        </h3>

                        <div className="space-y-4 mb-6 flex-grow">
                          <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <User className="text-teal-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Authors</p>
                              <p className="text-sm font-semibold text-slate-700 leading-snug">{pub.authors}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <Users className="text-teal-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Conference</p>
                              <p className="text-sm font-semibold text-slate-700 leading-snug italic">{pub.conference}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                            <div className="flex items-center gap-1.5">
                               <Calendar className="w-4 h-4 text-teal-500" />
                               <span>{pub.date}</span>
                            </div>
                          </div>

                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-800 font-bold transition-colors group/link"
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
