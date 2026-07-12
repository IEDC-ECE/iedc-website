import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  Wifi,
  Radio,
  Brain,
  Microchip,
  Signal,
  Target,
  FlaskConical,
  Presentation,
  FileText,
} from "lucide-react";

const researchVerticals = [
  {
    icon: Bot,
    title: "Robotics & Automation",
    description:
      "Designing intelligent machines, autonomous systems, and practical automation workflows that can move from lab prototypes to real deployments.",
    focusAreas: [
      "Mobile robots, manipulators, and sensor-guided control",
      "Autonomous navigation, embedded decision-making, and actuation",
      "Industrial automation concepts and human-assistive devices",
    ],
    examples: "Student projects, competition platforms, and applied research prototypes.",
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    description:
      "Building connected devices that sense, compute, and communicate reliably across edge hardware, wireless links, and cloud dashboards.",
    focusAreas: [
      "Low-power sensing nodes and smart instrumentation",
      "Edge firmware, device integration, and telemetry pipelines",
      "Connected monitoring solutions for labs, campuses, and industry use cases",
    ],
    examples: "Smart dashboards, remote monitoring systems, and campus-scale deployments.",
  },
  {
    icon: Radio,
    title: "RF, Microwave & Antenna Systems",
    description:
      "Exploring high-frequency design, propagation behavior, and antenna structures for modern wireless, sensing, and communication applications.",
    focusAreas: [
      "Antenna modeling, tuning, and performance optimization",
      "RF front-end concepts, matching networks, and measurement workflows",
      "Communication hardware for wireless links, sensing, and telemetry",
    ],
    examples: "Antenna studies, RF prototypes, and link-quality validation experiments.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Applying data-driven methods to classification, prediction, vision, and decision support problems with a strong focus on practical usefulness.",
    focusAreas: [
      "Machine learning pipelines for structured and unstructured data",
      "Computer vision, pattern recognition, and predictive analytics",
      "AI-assisted tools that complement hardware, research, and product development",
    ],
    examples: "Prototype models, analytics systems, and AI-enabled student products.",
  },
  {
    icon: Microchip,
    title: "VLSI & Semiconductor Design",
    description:
      "Working from digital logic to chip-level thinking, with attention to design flow, verification, and implementation constraints.",
    focusAreas: [
      "Digital design fundamentals, RTL thinking, and verification",
      "Low-power and high-reliability design trade-offs",
      "Simulation-driven exploration of circuit and system behavior",
    ],
    examples: "Logic blocks, design exercises, and hardware-oriented academic projects.",
  },
  {
    icon: Signal,
    title: "Wireless Communication Systems",
    description:
      "Studying how information moves through modern networks and how to improve robustness, throughput, and spectrum efficiency.",
    focusAreas: [
      "Digital communication concepts and signal-processing foundations",
      "System-level analysis for modulation, coding, and channel effects",
      "Wireless applications spanning sensing, control, and data exchange",
    ],
    examples: "Communication experiments, protocol studies, and systems integration work.",
  },
];

export default function ResearchVerticals() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Verticals</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A deeper look at the technology focus areas that shape our student projects,
            faculty-led initiatives, and applied research collaborations.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-md border-t-4 border-iedc-blue">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-iedc-light-blue flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold iedc-gray mb-2">Focused problem spaces</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every vertical is chosen to match a real technical need, so research efforts stay
                  grounded in relevant problems and measurable outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-iedc-blue">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-iedc-light-blue flex items-center justify-center mb-4">
                  <FlaskConical className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold iedc-gray mb-2">Prototype-first research</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ideas are tested through hardware builds, simulations, software demos, or mixed
                  systems before they are documented or scaled further.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-iedc-blue">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-iedc-light-blue flex items-center justify-center mb-4">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold iedc-gray mb-2">From lab to dissemination</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strong verticals help us move from experiments to publications, presentations,
                  grant proposals, and start-up-ready concepts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              These verticals are where our research culture becomes visible in practice. Each area
              combines problem-solving, prototyping, and iterative learning so that ideas can mature
              into useful tools, demonstrators, or publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {researchVerticals.map((vertical) => (
              <Card key={vertical.title} className="shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-iedc-light-blue flex items-center justify-center flex-shrink-0">
                      <vertical.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold iedc-gray mb-2">{vertical.title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed">{vertical.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-iedc-blue mb-2">
                      What we explore
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {vertical.focusAreas.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-iedc-blue flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto rounded-lg bg-iedc-light-gray p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-iedc-gray mb-2">
                      Typical outcomes
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{vertical.examples}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-12 rounded-3xl bg-slate-950 text-white shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 md:p-10">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 mb-5">
                  Research roadmap
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">From research direction to working systems</h2>
                <p className="text-white/80 max-w-2xl leading-relaxed">
                  The goal of these verticals is not just topic coverage. They help students and
                  mentors choose a clear problem space, build depth, and connect that work to
                  prototypes, grants, publications, presentations, and start-up ideas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <h3 className="font-semibold mb-2">Project formation</h3>
                    <p className="text-sm text-white/75">Problem selection, scoping, and technical ownership.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <h3 className="font-semibold mb-2">Validation</h3>
                    <p className="text-sm text-white/75">Testing, benchmarking, simulation, and iteration.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <h3 className="font-semibold mb-2">Knowledge output</h3>
                    <p className="text-sm text-white/75">Papers, reports, demos, and technical documentation.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <h3 className="font-semibold mb-2">Applied impact</h3>
                    <p className="text-sm text-white/75">Startup ideas, partnerships, and deployable tools.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-10">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Related pages</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-iedc-light-blue" />
                      About our mission and vision
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-iedc-light-blue" />
                      People who drive the work
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-iedc-light-blue" />
                      Innovation outputs and showcases
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}