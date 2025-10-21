import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Websites = () => {
  const websites = [
    {
      name: "OnePlanet-OnePeople.com",
      url: "http://oneplanet-onepeople.com/",
      description: "Our main organizational website featuring programs, initiatives, and collaborative solutions for global sustainability challenges.",
      category: "Primary"
    },
    {
      name: "PlannedActs.org",
      url: "http://plannedacts.org/",
      description: "Strategic planning and coordinated action for sustainable development and social impact initiatives.",
      category: "Programs"
    },
    {
      name: "CSRBenefitsHub.com",
      url: "http://csrbenefitshub.com/",
      description: "Corporate Social Responsibility resources, benefits, and implementation strategies for businesses.",
      category: "Resources"
    },
    {
      name: "ThresholdArchitectsSP.com",
      url: "http://thresholdarchitectssp.com/",
      description: "Sustainability planning and architectural solutions for transformative environmental projects.",
      category: "Solutions"
    },
    {
      name: "TheWorkingDead.us",
      url: "http://theworkingdead.us/",
      description: "Addressing burnout, workplace wellness, and systemic work culture issues.",
      category: "Advocacy"
    },
    {
      name: "LyleBenjamin.com",
      url: "http://www.lylebenjamin.com/",
      description: "Personal website of founder Lyle Benjamin, featuring thought leadership and publications.",
      category: "Leadership"
    }
  ];

  const categories = ["All", "Primary", "Programs", "Resources", "Solutions", "Advocacy", "Leadership"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Organizational Websites</h1>
          <p className="text-xl text-muted-foreground">
            Explore our network of sustainability-focused websites and resources
          </p>
        </div>

        {/* Featured Website */}
        <Card className="mb-12 bg-gradient-hero text-primary-foreground overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">One Planet One People</CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg">
                  Our flagship platform for collaborative sustainability solutions
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg opacity-90">
              Discover programs, initiatives, and systems to address tipping point issues including 
              climate change, pollution, pandemics, war, and social, economic, and health inequalities 
              on local to global scales.
            </p>
            <a href="http://oneplanet-onepeople.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="group">
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* All Websites */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((website, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{website.name}</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {website.category}
                  </span>
                </div>
                <CardDescription className="line-clamp-3">{website.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <a 
                  href={website.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full group">
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Our Network */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Our Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                One Planet One People operates a comprehensive network of websites and platforms, 
                each focused on specific aspects of sustainability, social responsibility, and 
                collaborative action. Together, these resources provide:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Strategic frameworks for sustainable development initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Corporate social responsibility tools and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thought leadership on global challenges and solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborative platforms for stakeholder engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Educational resources and training materials</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Card className="bg-muted">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our websites to discover how you can contribute to global sustainability 
                efforts through RAPID Response Team One and our partner initiatives.
              </p>
              <Button variant="default" size="lg">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Websites;
