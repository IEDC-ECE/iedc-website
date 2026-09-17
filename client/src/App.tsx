import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import SplashScreen from "@/components/SplashScreen";
import Home from "@/pages/Home";
import About from "@/pages/About";
import People from "@/pages/Team";
import ResearchVerticals from "@/pages/ResearchVerticals";
import EventsOverview from "@/pages/events/EventsOverview";
import BengalESummit2024 from "@/pages/events/BengalESummit2024";
import BengalESummit2025 from "@/pages/events/BengalESummit2025";
import TriWizardTrials2025 from "@/pages/events/TriWizardTrials2025";
import NationalScienceDay2024 from "@/pages/events/NationalScienceDay2024";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import InnovationStartups from "@/pages/innovation/Startups";
import InnovationPatents from "@/pages/innovation/Patents";
import InnovationGrants from "@/pages/innovation/Grants";
import InnovationPublications from "@/pages/innovation/Publications";
import InnovationProjects from "@/pages/innovation/Projects";
import InnovationJournal from "@/pages/innovation/Journal";
import InnovationConference from "@/pages/innovation/Conference";
import InnovationBookChapter from "@/pages/innovation/BookChapter";
import { Redirect } from "wouter";

function TeamRedirect() {
  return <Redirect to="/people" />;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/people" component={People} />
        <Route path="/team" component={TeamRedirect} />
        <Route path="/research-verticals" component={ResearchVerticals} />
        <Route path="/events" component={EventsOverview} />
        <Route path="/events/bengal-e-summit-2024" component={BengalESummit2024} />
        <Route path="/events/bengal-e-summit-2025" component={BengalESummit2025} />
        <Route path="/events/triwizard-trials-2025" component={TriWizardTrials2025} />
        <Route path="/events/national-science-day-2024" component={NationalScienceDay2024} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/innovation/startups" component={InnovationStartups} />
        <Route path="/innovation/patents" component={InnovationPatents} />
        <Route path="/innovation/grants" component={InnovationGrants} />
        <Route path="/innovation/publications" component={InnovationPublications} />
        <Route path="/innovation/publications/journal" component={InnovationJournal} />
        <Route path="/innovation/publications/conference" component={InnovationConference} />
        <Route path="/innovation/publications/books" component={InnovationBookChapter} />
        <Route path="/innovation/projects" component={InnovationProjects} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SplashScreen />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
