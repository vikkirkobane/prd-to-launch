import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="RAPID Response Team" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-xl text-primary">RAPID Response Team One</h3>
                <p className="text-sm text-muted-foreground">One Planet One People</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Research • Action • Persistent • Insistent • Deliverables
            </p>
            <p className="text-sm text-muted-foreground">
              Transforming volunteers, interns, and students into skilled contributors addressing global sustainability challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/leaderboards" className="text-muted-foreground hover:text-primary transition-colors">Leaderboards</Link></li>
              <li><Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">Training</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
              <li><Link to="/websites" className="text-muted-foreground hover:text-primary transition-colors">Our Websites</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} One Planet One People. All rights reserved.</p>
          <p className="mt-2">Building a sustainable future, one project at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
