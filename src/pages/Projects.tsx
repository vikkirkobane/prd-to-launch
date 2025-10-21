import { useState } from "react";
import { Search, Filter, Calendar, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Climate Action Campaign Design",
      category: "Climate Action",
      startDate: "Nov 1, 2025",
      endDate: "Nov 30, 2025",
      objective: "Create comprehensive campaign materials for local climate action initiatives",
      deliverables: ["Campaign strategy document", "Social media content", "Presentation deck"],
      slots: 2,
      totalSlots: 4,
      points: 850
    },
    {
      id: 2,
      title: "Sustainable Agriculture Research",
      category: "Zero Hunger",
      startDate: "Nov 5, 2025",
      endDate: "Dec 5, 2025",
      objective: "Research and document sustainable farming practices in developing regions",
      deliverables: ["Research report", "Best practices guide", "Implementation roadmap"],
      slots: 3,
      totalSlots: 4,
      points: 920
    },
    {
      id: 3,
      title: "Clean Water Access Analysis",
      category: "Clean Water",
      startDate: "Nov 10, 2025",
      endDate: "Dec 10, 2025",
      objective: "Analyze water accessibility issues in urban communities",
      deliverables: ["Data analysis report", "Visualization dashboard", "Recommendations"],
      slots: 1,
      totalSlots: 4,
      points: 880
    },
    {
      id: 4,
      title: "Quality Education Initiative",
      category: "Quality Education",
      startDate: "Nov 15, 2025",
      endDate: "Dec 15, 2025",
      objective: "Develop educational resources for underserved communities",
      deliverables: ["Curriculum outline", "Teaching materials", "Assessment tools"],
      slots: 4,
      totalSlots: 4,
      points: 900
    },
    {
      id: 5,
      title: "Renewable Energy Adoption Study",
      category: "Affordable Clean Energy",
      startDate: "Nov 20, 2025",
      endDate: "Jan 20, 2026",
      objective: "Study barriers to renewable energy adoption in small businesses",
      deliverables: ["Survey results", "Analysis report", "Policy recommendations"],
      slots: 2,
      totalSlots: 4,
      points: 950
    },
    {
      id: 6,
      title: "Gender Equality Workplace Assessment",
      category: "Gender Equality",
      startDate: "Nov 25, 2025",
      endDate: "Dec 25, 2025",
      objective: "Assess gender equality practices in corporate environments",
      deliverables: ["Assessment framework", "Data collection", "Improvement plan"],
      slots: 3,
      totalSlots: 4,
      points: 870
    }
  ];

  const categories = ["all", "Climate Action", "Zero Hunger", "Clean Water", "Quality Education", "Affordable Clean Energy", "Gender Equality"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.objective.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || project.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Active Projects</h1>
          <p className="text-xl text-muted-foreground">
            Browse and join sustainability projects aligned with UN SDGs
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-64">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent">
                    {project.points} pts
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.objective}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className={project.slots === 0 ? "text-destructive" : "text-success"}>
                      {project.slots} of {project.totalSlots} slots available
                    </span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Target className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Deliverables:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {project.deliverables.slice(0, 2).map((deliverable, index) => (
                          <li key={index} className="text-xs">{deliverable}</li>
                        ))}
                        {project.deliverables.length > 2 && (
                          <li className="text-xs">+{project.deliverables.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90" 
                  disabled={project.slots === 0}
                >
                  {project.slots === 0 ? "Project Full" : "Sign Up"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
