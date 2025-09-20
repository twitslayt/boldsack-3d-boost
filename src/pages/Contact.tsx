import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "ceo@boldsack.in",
      action: "mailto:ceo@boldsack.in",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 9124177703",
      action: "tel:+919124177703",
      description: "Mon-Sat 9AM to 6PM IST"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Quick Chat",
      action: "https://wa.me/919124177703",
      description: "Get instant responses"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Bhadrak, Odisha",
      action: "#",
      description: "India"
    }
  ];

  const services = [
    "Digital Marketing",
    "SEO Services",
    "Social Media Marketing",
    "Brand Development",
    "Creative Strategy",
    "Market Research",
    "Website Development",
    "Content Creation",
    "Other"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Boldsack Media",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919124177703",
        "contactType": "customer service",
        "email": "ceo@boldsack.in",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhadrak",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact Boldsack Media | Free Digital Marketing Consultation | Bhadrak, Odisha"
        description="Contact Boldsack Media for digital marketing services in Bhadrak, Odisha. Get free consultation. Call +91 9124177703 or email ceo@boldsack.in. Mon-Sat 9AM-6PM."
        keywords="contact Boldsack Media, digital marketing consultation, Bhadrak agency contact, marketing services inquiry, free consultation"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand's digital presence? Let's discuss your marketing goals 
              and create a strategy that delivers real results. Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-3d p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  <div className="font-medium text-primary">
                    {info.action.startsWith('http') || info.action.startsWith('mailto') || info.action.startsWith('tel') ? (
                      <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined} rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {info.content}
                      </a>
                    ) : (
                      info.content
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {info.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business.
                </p>
              </div>

              <Card className="card-3d p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Let's Start a <span className="text-gradient">Conversation</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're here to answer any questions you may have about our services. 
                  Reach out to us and we'll respond as soon as we can.
                </p>
              </div>

              {/* Business Hours */}
              <Card className="card-3d p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-sm">
                    <strong>Timezone:</strong> India Standard Time (IST)
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="card-3d p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/sidhanta-kumar-behera-90428226b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn - Professional Updates</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/aura_siddharth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram - Behind the Scenes</span>
                  </a>
                  <a 
                    href="https://boldsack.in/social" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Our Social Hub</span>
                  </a>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="card-3d p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries or immediate assistance, reach out to us directly:
                </p>
                <div className="space-y-3">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <a href="tel:+919124177703">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: +91 9124177703
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://wa.me/919124177703" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-3d p-6">
              <h3 className="text-lg font-semibold mb-3">How quickly can you start working on my project?</h3>
              <p className="text-muted-foreground">
                We can typically begin work within 2-3 business days after our initial consultation and project agreement.
              </p>
            </Card>
            <Card className="card-3d p-6">
              <h3 className="text-lg font-semibold mb-3">Do you work with businesses outside of Odisha?</h3>
              <p className="text-muted-foreground">
                Yes! While we're based in Bhadrak, Odisha, we work with clients across India and internationally.
              </p>
            </Card>
            <Card className="card-3d p-6">
              <h3 className="text-lg font-semibold mb-3">What's included in a free consultation?</h3>
              <p className="text-muted-foreground">
                Our free consultation includes a marketing audit, strategy recommendations, and a customized proposal for your business.
              </p>
            </Card>
            <Card className="card-3d p-6">
              <h3 className="text-lg font-semibold mb-3">How do you measure success?</h3>
              <p className="text-muted-foreground">
                We use data-driven metrics aligned with your business goals, including ROI, conversion rates, and brand awareness metrics.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;