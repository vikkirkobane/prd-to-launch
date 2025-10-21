import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Trophy, BookOpen, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Real-World Projects",
      description: "Weekly curated sustainability projects aligned with UN SDGs"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with volunteers, interns, and students worldwide"
    },
    {
      icon: Trophy,
      title: "Competitive Recognition",
      description: "Earn points, certificates, and stand out in the leaderboards"
    },
    {
      icon: BookOpen,
      title: "Professional Training",
      description: "Master AIM and PMOROS systems for career advancement"
    },
    {
      icon: Zap,
      title: "Performance Based",
      description: "Your skills and impact determine your success"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Address critical challenges in climate, health, and inequality"
    }
  ];

  const stats = [
    { number: "100+", label: "Active Projects" },
    { number: "1,000+", label: "Team Members" },
    { number: "17", label: "UN SDGs Addressed" },
    { number: "50+", label: "Countries Represented" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              RAPID Response Team One
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold animate-slide-up">
              Research • Action • Persistent • Insistent • Deliverables
            </p>
            <p className="text-lg mb-8 opacity-90 animate-slide-up">
              Transform into a skilled contributor addressing global sustainability challenges through competitive, performance-based projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join RAPID Response Team?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A competitive platform that transforms passion into professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to make a global impact</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register", description: "Create your account and complete your profile" },
              { step: "02", title: "Choose Projects", description: "Browse weekly projects and sign up for ones that match your skills" },
              { step: "03", title: "Complete Work", description: "Use AIM and PMOROS systems to deliver quality results" },
              { step: "04", title: "Earn Recognition", description: "Accumulate points, climb leaderboards, and gain certifications" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of motivated individuals transforming their skills while addressing the world's most pressing challenges.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-shadow">
              Join RAPID Response Team Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
