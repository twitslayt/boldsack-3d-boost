import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Digital Marketing",
    "SEO Services", 
    "Social Media Marketing",
    "Brand Development",
    "Creative Strategy",
    "Market Research"
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">BOLDSACK</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                DIGITAL MARKETING AGENCY
              </p>
            </div>
            <p className="text-muted-foreground">
              Transforming brand visions into reality with innovative marketing solutions 
              that engage and captivate audiences across digital platforms.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon">
                <a 
                  href="https://www.instagram.com/aura_siddharth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a 
                  href="https://www.linkedin.com/in/sidhanta-kumar-behera-90428226b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a 
                  href="https://wa.me/919124177703" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Jireigadi, Barapur, Basudevpur<br />
                    Bhadrak, Odisha - 756125, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+919124177703" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9124177703
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:boldsack.media@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  boldsack.media@gmail.com
                </a>
              </div>
            </div>
            <Button asChild variant="cta" size="sm" className="w-full">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get the latest marketing insights and tips delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email for newsletter"
              />
              <Button variant="default" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Boldsack Media. All rights reserved. | 
            <Link to="/disclaimer" className="hover:text-primary ml-1">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;