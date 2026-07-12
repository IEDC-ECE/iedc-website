import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Crown, Building, Users, ChevronRight } from "lucide-react";
import drSatyajitImg from "@assets/faculty_images/satyajit_chakrabarti.jpg";
import drMalayImg from "@assets/faculty_images/malay_gangopadhyay.jpg";
import drSubhabrataImg from "@assets/faculty_images/subhabrata_banerjee.jpg";
import drIndranilImg from "@assets/faculty_images/indranil_maity.jpg";
import drSayanSarkarImg from "@assets/faculty_images/Sayan Sarkar.jpeg";
import drSutanuGhoshImg from "@assets/faculty_images/Sutanu Ghosh.jpeg";
import drGobindaSenImg from "@assets/faculty_images/Gobinda Sen.jpeg";

// Student images
import sagnikChakrabortyImg from "@assets/student_images/sagnik_chakraborty.jpg";
import shrayasMitraImg from "@assets/student_images/shrayas_mitra.jpeg";
import sagnikAdhikaryImg from "@assets/student_images/sagnik_adhikary.jpg";
import snehangshuDeImg from "@assets/student_images/snehangshu_de.jpg";
import aditiRaiImg from "@assets/student_images/aditi_rai.jpg";
import deepBatabyalImg from "@assets/student_images/deep_batabyal.jpeg";
import shreyaskarGangulyImg from "@assets/student_images/shreyaskar_ganguly.jpg";
import arkaGhoshImg from "@assets/student_images/arka_ghosh.jpg";
import saheliDebImg from "@assets/student_images/saheli_deb.jpg";
import sayanChatterjeeImg from "@assets/student_images/sayan_chatterjee.jpg";
import prasunitaDeImg from "@assets/student_images/prasunita_de.jpg";
import ritabhasaChowdhuryImg from "@assets/student_images/ritabhasa_chowdhury.jpg";
import sulagnRoyImg from "@assets/student_images/sulagna_roy.jpg";
import sreshthaHiraImg from "@assets/student_images/sreshtha_hira.jpeg";
import rupshaGhosalImg from "@assets/student_images/rupsha_ghosal.jpg";
import nirmalyaKusumGhoshImg from "@assets/student_images/nirmalya_kusum_ghosh.jpg";
import imanDasImg from "@assets/student_images/iman_das.jpeg";
import anweshaGhoshImg from "@assets/student_images/anwesha_ghosh.jpg";
import swastikaTalukdarImg from "@assets/student_images/swastika_talukdar.jpg";
import adrikaLahiriImg from "@assets/student_images/adrika_lahiri.jpg";
import sumedhaGhoshImg from "@assets/student_images/sumedha_ghosh.jpeg";
import sangaBhattacharyaImg from "@assets/student_images/sanga_bhattacharya.png";
import rumaniSadhukhanImg from "@assets/student_images/rumani_sadhukhan.png";
import souptikBiswasImg from "@assets/student_images/souptik_biswas.jpeg";
import tanishaChakrabartiImg from "@assets/student_images/tanisha_chakrabarti.png";
import pratyushKumarDeyImg from "@assets/student_images/pratyush_kumar_dey.jpg";
import prayasRoyImg from "@assets/student_images/prayas_roy.jpeg";

const facultyMembers = [
  {
    name: "Dr. Satyajit Chakrabarti",
    designation: "Director, IEM-UEM Group",
    bio: "Provides strategic leadership and vision for the IEM-UEM Group, overseeing academic and entrepreneurial initiatives.",
    image: drSatyajitImg,
    icon: Crown,
    bgColor: "bg-purple-600",
  },
  {
    name: "Dr. Malay Gangopadhyay",
    designation: "Vice Principal, Institute of Engineering and Management",
    bio: "Leads the Electronics and Communications Engineering department, fostering research and innovation in engineering technologies.",
    image: drMalayImg,
    icon: Building,
    bgColor: "bg-iedc-blue",
  },
  {
    name: "Dr. Subhabrata Banerjee",
    designation: "Professor and Coordinator IEDC ECE",
    bio: "Oversees the Innovation and Entrepreneurship Development Cell (IEDC) within the Electronics and Communications Engineering department, driving student-driven projects, patents, and product development.",
    image: drSubhabrataImg,
    icon: Users,
    bgColor: "bg-green-600",
  },
  {
    name: "Dr. Indranil Maity",
    designation: "Associate Professor and Co-Coordinator IEDC ECE",
    bio: "Collaborates with Dr. Subhabrata Banerjee to manage IEDC activities, focusing on Sponsored Research, industry partnerships, and entrepreneurial training.",
    image: drIndranilImg,
    icon: Users,
    bgColor: "bg-iedc-light-blue",
  },
  {
    name: "Dr. Sayan Sarkar",
    designation: "Associate Professor",
    bio: "Collaborates with Dr. Subhabrata Banerjee to manage IEDC activities, focusing on Sponsored Research, industry partnerships, and entrepreneurial training.",
    image: drSayanSarkarImg,
    icon: Users,
    bgColor: "bg-orange-600",
  },
  {
    name: "Dr. Sutanu Ghosh",
    designation: "Associate Professor",
    bio: "Collaborates with Dr. Subhabrata Banerjee to manage IEDC activities, focusing on Sponsored Research, industry partnerships, and entrepreneurial training.",
    image: drSutanuGhoshImg,
    icon: Users,
    bgColor: "bg-teal-600",
  },
  {
    name: "Dr. Gobinda Sen",
    designation: "Associate Professor",
    bio: "Collaborates with Dr. Subhabrata Banerjee to manage IEDC activities, focusing on Sponsored Research, industry partnerships, and entrepreneurial training.",
    image: drGobindaSenImg,
    icon: Users,
    bgColor: "bg-cyan-600",
  },
];


// Student members organized by sub-committee hierarchy - students appear in ALL their committees
const studentCommittees = [
  {
    name: "Operation",
    bgColor: "bg-red-600",
    members: [
      {
        name: "Sagnik Chakraborty",
        committees: ["Operation"],
        image: sagnikChakrabortyImg
      }
    ]
  },
  {
    name: "Hardware",
    bgColor: "bg-orange-600",
    members: [
      {
        name: "Shrayas Mitra",
        committees: ["Management", "Hardware"],
        image: shrayasMitraImg
      },
      {
        name: "Sagnik Adhikary",
        committees: ["Hardware"],
        image: sagnikAdhikaryImg
      }
    ]
  },
  {
    name: "Management",
    bgColor: "bg-blue-600",
    members: [
      {
        name: "Aditi Rai",
        committees: ["Management"],
        image: aditiRaiImg
      },
      {
        name: "Deep Batabyal",
        committees: ["Management"],
        image: deepBatabyalImg
      },
      {
        name: "Shrayas Mitra",
        committees: ["Management", "Hardware"],
        image: shrayasMitraImg
      }
    ]
  },
  {
    name: "Software",
    bgColor: "bg-green-600",
    members: [
      {
        name: "Shreyaskar Ganguly",
        committees: ["Software"],
        image: shreyaskarGangulyImg
      },
      {
        name: "Arka Ghosh",
        committees: ["Software", "Events Reports"],
        image: arkaGhoshImg
      },
      {
        name: "Saheli Deb",
        committees: ["Software"],
        image: saheliDebImg
      },
      {
        name: "Sayan Chatterjee",
        committees: ["Software", "Events Reports"],
        image: sayanChatterjeeImg
      }
    ]
  },
  {
    name: "Inventory & Documentation",
    bgColor: "bg-yellow-600",
    members: [
      {
        name: "Prasunita De",
        committees: ["Inventory & Documentation"],
        image: prasunitaDeImg
      },
      {
        name: "Ritabhasa Chowdhury",
        committees: ["Inventory & Documentation"],
        image: ritabhasaChowdhuryImg
      }
    ]
  },
  {
    name: "Social Media / Collaboration",
    bgColor: "bg-pink-600",
    members: [
      {
        name: "Snehangshu De",
        committees: ["Events", "Social Media / Collaboration"],
        image: snehangshuDeImg
      },
      {
        name: "Sulagna Roy",
        committees: ["Social Media / Collaboration"],
        image: sulagnRoyImg
      },
      {
        name: "Sreshtha Hira",
        committees: ["Social Media / Collaboration", "Events Reports"],
        image: sreshthaHiraImg
      }
    ]
  },
  {
    name: "Graphics",
    bgColor: "bg-purple-600",
    members: [
      {
        name: "Rupsha Ghosal",
        committees: ["Graphics"],
        image: rupshaGhosalImg
      },
      {
        name: "Nirmalya Kusum Ghosh",
        committees: ["Graphics"],
        image: nirmalyaKusumGhoshImg
      },
      {
        name: "Iman Das",
        committees: ["Graphics"],
        image: imanDasImg
      },
      {
        name: "Anwesha Ghosh",
        committees: ["Graphics"],
        image: anweshaGhoshImg
      }
    ]
  },
  {
    name: "Entrepreneurship",
    bgColor: "bg-indigo-600",
    members: [
      {
        name: "Swastika Talukdar",
        committees: ["Entrepreneurship", "Events Reports"],
        image: swastikaTalukdarImg
      },
      {
        name: "Adrika Lahiri",
        committees: ["Entrepreneurship"],
        image: adrikaLahiriImg
      },
      {
        name: "Sumedha Ghosh",
        committees: ["Entrepreneurship"],
        image: sumedhaGhoshImg
      }
    ]
  },
  {
    name: "Grant in Aid & Publications",
    bgColor: "bg-teal-600",
    members: [
      {
        name: "Sanga Bhattacharya",
        committees: ["Grant in Aid & Publications"],
        image: sangaBhattacharyaImg
      },
      {
        name: "Rumani Sadhukhan",
        committees: ["Grant in Aid & Publications"],
        image: rumaniSadhukhanImg
      },
      {
        name: "Souptik Biswas",
        committees: ["Grant in Aid & Publications"],
        image: souptikBiswasImg
      },
      {
        name: "Tanisha Chakrabarti",
        committees: ["Grant in Aid & Publications"],
        image: tanishaChakrabartiImg
      }
    ]
  },
  {
    name: "Events",
    bgColor: "bg-cyan-600",
    members: [
      {
        name: "Pratyush Kumar Dey",
        committees: ["Events"],
        image: pratyushKumarDeyImg
      },
      {
        name: "Snehangshu De",
        committees: ["Events", "Social Media / Collaboration"],
        image: snehangshuDeImg
      },
      {
        name: "Prayas Roy",
        committees: ["Events"],
        image: prayasRoyImg
      }
    ]
  },
  {
    name: "Events Reports",
    bgColor: "bg-slate-600",
    members: [
      {
        name: "Swastika Talukdar",
        committees: ["Entrepreneurship", "Events Reports"],
        image: swastikaTalukdarImg
      },
      {
        name: "Sreshtha Hira",
        committees: ["Social Media / Collaboration", "Events Reports"],
        image: sreshthaHiraImg
      },
      {
        name: "Sayan Chatterjee",
        committees: ["Software", "Events Reports"],
        image: sayanChatterjeeImg
      }
    ]
  }
];

export default function People() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our People</h1>
          <p className="text-xl">Meet the faculty and student contributors driving innovation and excellence at IEDC</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 iedc-gray">
            Faculty Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-iedc-blue">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Faculty Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Faculty Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold iedc-gray mb-1">{member.name}</h3>
                        </div>
                        <div className={`w-8 h-8 ${member.bgColor} rounded-full flex items-center justify-center`}>
                          <member.icon className="text-white h-4 w-4" />
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="font-semibold iedc-blue text-sm mb-1">Designation</p>
                        <p className="text-gray-700 text-sm">{member.designation}</p>
                      </div>

                      <div>
                        <p className="font-semibold iedc-blue text-sm mb-1">Bio</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Student Members Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 iedc-gray">
              Student Members
            </h2>

            {/* Committee Sections */}
            {studentCommittees.map((committee, committeeIndex) => (
              <div key={committeeIndex} className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-4 h-4 ${committee.bgColor} rounded-full mr-3`}></div>
                  <h3 className="text-2xl font-bold iedc-gray">{committee.name}</h3>
                  <Badge className={`ml-4 ${committee.bgColor} text-white text-xs`}>
                    {committee.members.length} member{committee.members.length !== 1 ? 's' : ''}
                  </Badge>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {committee.members.map((member, memberIndex) => {
                    // Define border color based on committee background color
                    let borderColor = 'border-gray-600';
                    if (committee.bgColor === 'bg-red-600') borderColor = 'border-red-600';
                    else if (committee.bgColor === 'bg-orange-600') borderColor = 'border-orange-600';
                    else if (committee.bgColor === 'bg-blue-600') borderColor = 'border-blue-600';
                    else if (committee.bgColor === 'bg-green-600') borderColor = 'border-green-600';
                    else if (committee.bgColor === 'bg-yellow-600') borderColor = 'border-yellow-600';
                    else if (committee.bgColor === 'bg-pink-600') borderColor = 'border-pink-600';
                    else if (committee.bgColor === 'bg-purple-600') borderColor = 'border-purple-600';
                    else if (committee.bgColor === 'bg-indigo-600') borderColor = 'border-indigo-600';
                    else if (committee.bgColor === 'bg-teal-600') borderColor = 'border-teal-600';
                    else if (committee.bgColor === 'bg-cyan-600') borderColor = 'border-cyan-600';
                    else if (committee.bgColor === 'bg-slate-600') borderColor = 'border-slate-600';

                    return (
                      <Card key={memberIndex} className={`shadow-lg hover:shadow-xl transition-shadow border-l-4 ${borderColor} w-64 flex-shrink-0`}>
                        <CardContent className="p-6">
                          <div className="text-center">
                            {/* Student Photo */}
                            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <h4 className="text-lg font-bold iedc-gray mb-2">{member.name}</h4>

                            {/* Committees */}
                            <div className="mb-3">
                              <p className="font-semibold iedc-blue text-xs mb-2">Sub-Committee{member.committees.length > 1 ? 's' : ''}</p>
                              <div className="flex flex-wrap justify-center gap-1">
                                {member.committees.map((comm, commIndex) => (
                                  <Badge
                                    key={commIndex}
                                    className={`text-xs px-2 py-1 ${commIndex === 0 ? committee.bgColor + ' text-white' : 'bg-gray-200 text-gray-700'}`}
                                  >
                                    {comm}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-white border-2 border-iedc-blue max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Mentorship Program</h3>
                <p className="text-lg leading-relaxed mb-6 text-black">
                  Our distinguished faculty members provide dedicated mentorship to students, guiding them through
                  cutting-edge research, innovation projects, and entrepreneurial ventures across multiple technology domains.
                </p>
                <div className="flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-iedc-blue" />
                  <span className="font-semibold text-black">Fostering the next generation of innovators and entrepreneurs</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
