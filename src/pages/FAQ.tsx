import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is RAPID Response Team One?",
      answer: "RAPID Response Team One is a competitive, performance-based platform that connects volunteers, interns, and students with real-world sustainability projects. RAPID stands for Research • Action • Persistent • Insistent • Deliverables. We use proprietary AIM and PMOROS systems to track performance and reward high achievement with recognition, career advancement opportunities, and potential employment."
    },
    {
      question: "Who can join the program?",
      answer: "The program is open to university students, young professionals, career changers entering the sustainability sector, advanced high school students, and corporate employees (company-sponsored teams). If you're passionate about making a difference and willing to commit to high-quality project delivery, you're welcome to join."
    },
    {
      question: "How much does it cost to join?",
      answer: "There is a $35 USD administration fee per member. This one-time fee covers platform access, training materials, certification, and administrative support throughout your participation in the program."
    },
    {
      question: "What are AIM and PMOROS systems?",
      answer: "AIM (Artificial Intelligence Methodology) and PMOROS (Project Management Organizing Research Outline Spreadsheet) are proprietary project management frameworks developed by One Planet One People. These systems ensure quality, consistency, and maximum impact across all projects. Training on both systems is provided to all members and is a key factor in performance evaluation."
    },
    {
      question: "How are projects assigned?",
      answer: "Projects are posted weekly on our platform with clear objectives, point values, and completion timeframes. Registration works on a first-come-first-served basis, with a maximum of 4 participants per project. You can browse available projects and sign up for ones that match your skills and interests."
    },
    {
      question: "How is performance measured?",
      answer: "Performance is measured through a multi-factor scoring system with four key components: Successfully Achieving the Objective (40%), Proper use of AIM and PMOROS Systems (25%), Impact (25%), and Timeframe for Completion (10%). Points are automatically calculated based on these factors."
    },
    {
      question: "What recognition do top performers receive?",
      answer: "Monthly recognition goes to the top 3 performers (minimum 12 projects completed program-wide) with certificates, newsletter features, and discretionary bonuses. Quarterly recognition includes enhanced public acknowledgment and higher-value bonuses. Special recognition includes social media features, interview inclusion in publications, and portfolio-building content."
    },
    {
      question: "Are there employment opportunities?",
      answer: "Yes! High performers have a direct pathway to employment opportunities within One Planet One People and partner organizations. The program serves as a talent pipeline, allowing us to identify and recruit skilled contributors who have proven their capabilities through consistent high performance."
    },
    {
      question: "How many projects should I complete?",
      answer: "There's no minimum requirement, but to be eligible for monthly recognition, at least 12 projects must be completed program-wide by all participants that month. For quarterly recognition, the threshold is 30 projects program-wide. The more quality projects you complete, the higher your ranking and visibility."
    },
    {
      question: "What happens if I sign up for a project but can't complete it?",
      answer: "There is a point penalty system for over-commitment without placement. If you consistently sign up for projects but fail to complete them, it will negatively impact your standing. We encourage members to only commit to projects they can realistically deliver."
    },
    {
      question: "Can I work on projects as part of a team?",
      answer: "Yes, most projects accommodate up to 4 participants. You can either join projects independently or coordinate with other team members. Collaboration is encouraged, and the platform facilitates team communication and coordination."
    },
    {
      question: "How do projects align with UN SDGs?",
      answer: "All projects on our platform are curated to align with one or more of the United Nations' 17 Sustainable Development Goals (SDGs). This ensures that your work contributes to globally recognized sustainability priorities including climate action, quality education, clean water, gender equality, and more."
    },
    {
      question: "What kind of training is provided?",
      answer: "We provide comprehensive training on the AIM and PMOROS systems through digital modules, video tutorials, and certification programs. Additional training covers Essential 8 Foundation Skills including Communication, Business, Marketing, Management, Office Technology, Problem Solving, Research, and Time Management."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary but typically range from 2 weeks to 2 months. Each project listing clearly states the start and end dates. Timeframe for completion is one of the factors in performance evaluation, so meeting deadlines is important."
    },
    {
      question: "Can I participate from anywhere in the world?",
      answer: "Yes! RAPID Response Team One is a global program. As long as you have internet access and can commit to project deliverables, you can participate from anywhere. We currently have members from over 50 countries."
    },
    {
      question: "What types of deliverables are expected?",
      answer: "Deliverables vary by project but typically include research reports, campaign materials, data analysis, presentations, strategic plans, educational resources, and implementation roadmaps. Each project clearly outlines the specific deliverables required."
    },
    {
      question: "How do I track my progress?",
      answer: "Your personal dashboard shows your completed projects, points earned, current ranking, and achievement history. You can also view real-time leaderboards to see how you compare to other participants on both monthly and quarterly bases."
    },
    {
      question: "What if I have questions during a project?",
      answer: "Our platform includes communication tools for team coordination and administrative support. You'll have access to project guidelines, system templates, and can reach out to program coordinators if you need assistance or clarification."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about RAPID Response Team One
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Please reach out to our support team.
                </p>
                <a href="mailto:info@oneplanet-onepeople.com" className="text-primary hover:underline font-medium">
                  Contact Support →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
