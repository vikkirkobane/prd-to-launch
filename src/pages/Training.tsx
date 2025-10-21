import { BookOpen, Video, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Training = () => {
  const aimModules = [
    {
      title: "Competency",
      description: "Master the skills needed for effective project delivery"
    },
    {
      title: "Content",
      description: "Learn to create high-quality, impactful content"
    },
    {
      title: "Conversation",
      description: "Develop professional communication and voice"
    },
    {
      title: "Constraints",
      description: "Navigate project limitations and deliver within boundaries"
    }
  ];

  const pmorosModules = [
    {
      title: "Objective",
      description: "Define clear, measurable project goals"
    },
    {
      title: "Research",
      description: "Conduct thorough background investigation and analysis"
    },
    {
      title: "Outline",
      description: "Structure your project for maximum effectiveness"
    },
    {
      title: "Spreadsheet",
      description: "Organize data and track progress systematically"
    }
  ];

  const essentialSkills = [
    "Communication",
    "Business",
    "Marketing",
    "Management",
    "Office Technology",
    "Problem Solving",
    "Research",
    "Time Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Systems Training</h1>
          <p className="text-xl text-muted-foreground">
            Supplemental Training & Educational Progress (STEP)
          </p>
        </div>

        {/* Hero Section */}
        <Card className="mb-12 bg-gradient-hero text-primary-foreground">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Master the Systems That Drive Success</h2>
                <p className="text-lg opacity-90 mb-6">
                  Our proprietary AIM and PMOROS frameworks, combined with Essential 8 Foundation Skills, 
                  ensure you deliver professional-grade results on every project.
                </p>
                <Button variant="secondary" size="lg">
                  Start Learning
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8">
                  <Video className="h-32 w-32 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AIM System */}
        <section className="mb-16">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Core System</Badge>
            <h2 className="text-3xl font-bold mb-2">AIM System</h2>
            <p className="text-xl text-muted-foreground">Artificial Intelligence Methodology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {aimModules.map((module, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        {index + 1}. {module.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Video className="h-10 w-10 text-primary" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">AIM Training Videos</h3>
                  <p className="text-muted-foreground">Complete video tutorials and prompts for each module</p>
                </div>
                <Button variant="outline">Watch Now</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PMOROS System */}
        <section className="mb-16">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Core System</Badge>
            <h2 className="text-3xl font-bold mb-2">PMOROS System</h2>
            <p className="text-xl text-muted-foreground">
              Project Management Organizing Research Outline Spreadsheet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {pmorosModules.map((module, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        {index + 1}. {module.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Video className="h-10 w-10 text-secondary" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">PMOROS Training Videos</h3>
                  <p className="text-muted-foreground">Project management components explained in detail</p>
                </div>
                <Button variant="outline">Watch Now</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Essential 8 Skills */}
        <section className="mb-16">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Foundation Skills</Badge>
            <h2 className="text-3xl font-bold mb-2">Essential 8 Foundation Skills</h2>
            <p className="text-xl text-muted-foreground">
              Core competencies for professional success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {essentialSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{skill}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <BookOpen className="h-10 w-10 text-accent" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Comprehensive Skill Development</h3>
                  <p className="text-muted-foreground">
                    Access training materials, exercises, and assessments for all 8 essential skills
                  </p>
                </div>
                <Button variant="outline">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Templates & Guides</CardTitle>
                <CardDescription>
                  Downloadable templates and step-by-step guides for project execution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Access Library</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Step-by-step video walkthroughs of system usage and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Watch Tutorials</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Certification</CardTitle>
                <CardDescription>
                  Complete training modules and earn official certification in AIM and PMOROS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Get Certified</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-secondary text-secondary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Training?</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Register now to gain immediate access to all training materials, video tutorials, and certification programs.
              </p>
              <Button variant="secondary" size="lg">
                Register & Start Training
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Training;
