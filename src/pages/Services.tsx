import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Palette, 
  Search, 
  MessageSquare,
  Globe,
  BarChart3,
  Megaphone,
  Camera,
  Code,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Creative Strategy",
      description: "Our team crafts unique marketing strategies tailored to your brand's goals, ensuring that your message stands out and resonates with your audience effectively.",
      features: [
        "Brand positioning and messaging",
        "Campaign conceptualization",
        "Creative brief development",
        "Competitive analysis",
        "Target audience research"
      ],
      color: "from-primary to-primary-glow"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "We leverage the power of digital platforms to enhance your online presence, utilizing SEO, social media, and content marketing to drive engagement and growth.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Content marketing strategy",
        "Email marketing campaigns"
      ],
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Development",
      description: "Boldsack Media focuses on building strong brand identities that reflect your values and vision, creating a lasting impression in the marketplace.",
      features: [
        "Logo design and branding",
        "Brand guidelines creation",
        "Visual identity systems",
        "Brand voice development",
        "Rebranding strategies"
      ],
      color: "from-accent to-primary"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Market Research",
      description: "We provide in-depth market research services to understand your audience and competitors, helping you make informed decisions that propel your brand forward.",
      features: [
        "Consumer behavior analysis",
        "Competitor landscape mapping",
        "Market trend identification",
        "Customer journey mapping",
        "ROI measurement and analysis"
      ],
      color: "from-secondary to-accent"
    }
  ];

  const additionalServices = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management across all platforms."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers with SEO optimization built-in."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and reporting to track performance and optimize marketing efforts."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Public Relations",
      description: "Strategic PR campaigns to build brand awareness and manage your company's public image."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Content Creation",
      description: "High-quality video, photography, and graphic design content for all your marketing needs."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Marketing Automation",
      description: "Streamlined marketing processes using automation tools to nurture leads and convert customers."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience through comprehensive research and consultation."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Our team develops a customized marketing strategy that aligns with your objectives and market opportunities."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy across chosen channels with careful monitoring and real-time optimization."
    },
    {
      step: "04",
      title: "Analysis",
      description: "Continuous performance tracking and detailed reporting help us refine and improve your campaigns."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Boldsack Media"
    },
    "serviceType": "Digital Marketing Services",
    "description": "Comprehensive digital marketing services including SEO, social media marketing, brand development, and creative strategies",
    "areaServed": {
      "@type": "Place",
      "name": "Bhadrak, Odisha, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search Engine Optimization to improve online visibility"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Strategic social media management and advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Brand Development",
            "description": "Complete brand identity and visual design services"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Digital Marketing Services | SEO, Branding & Social Media | Boldsack Media"
        description="Comprehensive digital marketing services in Bhadrak, Odisha. SEO, social media marketing, brand development, creative strategy & market research. Get free consultation."
        keywords="digital marketing services, SEO services, social media marketing, brand development, creative strategy, market research, Bhadrak, Odisha"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand, 
              engage your audience, and drive measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-primary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1500+</div>
              <div className="text-sm text-muted-foreground">Campaigns Launched</div>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">900+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-xl">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of marketing services designed to transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-3d p-8 space-y-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Additional <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to complement your marketing strategy and maximize your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-3d p-6 space-y-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-3d p-8 text-center space-y-6 h-full">
                  <div className="text-5xl font-bold text-gradient mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Why Choose <span className="text-gradient">Boldsack Media?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just another marketing agency. We're your strategic partners in growth, 
                  committed to delivering exceptional results that exceed your expectations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Proven track record with 1500+ successful campaigns",
                  "Data-driven strategies that deliver measurable ROI",
                  "Dedicated team of certified marketing experts",
                  "Transparent reporting and regular communication",
                  "Customized solutions for every business size",
                  "24/7 support and ongoing optimization"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="card-3d p-6 bg-primary/10 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                  <Card className="card-3d p-6 bg-secondary/10 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </Card>
                </div>
                <div className="space-y-6 mt-12">
                  <Card className="card-3d p-6 bg-accent/10 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Industries Served</div>
                  </Card>
                  <Card className="card-3d p-6 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your marketing goals and create a customized strategy that delivers real results. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:+919124177703">
                  Call Now: +91 9124177703
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;