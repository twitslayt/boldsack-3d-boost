import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seohead";
import { Link } from "react-router-dom";
import { 
  Camera,
  Users,
  TrendingUp,
  PenTool,
  Megaphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Content Creation",
      description: "We craft compelling visual and multimedia content that captures attention and tells your brand's story. From stunning photography to engaging videos, we bring your vision to life.",
      features: [
        "Professional photography & videography",
        "Social media content packages",
        "Brand storytelling visuals",
        "Reels and short-form video production",
        "Creative graphic design"
      ],
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Influencer Collaboration",
      description: "We connect your brand with the right influencers to amplify your message. Our strategic partnerships ensure authentic engagement and expanded reach to your target audience.",
      features: [
        "Influencer identification & vetting",
        "Campaign strategy development",
        "Partnership negotiation & management",
        "Performance tracking & reporting",
        "Long-term ambassador programs"
      ],
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Growth Analysis",
      description: "Data-driven insights to fuel your business expansion. We analyze market trends, customer behavior, and performance metrics to identify growth opportunities.",
      features: [
        "Market opportunity assessment",
        "Customer behavior analysis",
        "Competitive landscape review",
        "Growth strategy recommendations",
        "Performance benchmarking"
      ],
      color: "from-accent to-primary"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Writing",
      description: "Words that connect and convert. Our expert writers create persuasive copy, engaging blogs, and compelling narratives that resonate with your audience.",
      features: [
        "Blog posts & articles",
        "Website copy & landing pages",
        "Social media captions",
        "Email newsletters",
        "Brand messaging & taglines"
      ],
      color: "from-secondary to-accent"
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Public Relations Management",
      description: "Build and protect your brand's reputation. We manage media relations, craft press releases, and develop communication strategies that enhance your public image.",
      features: [
        "Media relations & outreach",
        "Press release writing & distribution",
        "Crisis communication planning",
        "Brand reputation management",
        "Event publicity & coverage"
      ],
      color: "from-primary to-secondary"
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
      description: "Our team develops a customized plan that aligns with your objectives and market opportunities."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy across chosen channels with careful monitoring and real-time optimization."
    },
    {
      step: "04",
      title: "Analysis",
      description: "Continuous performance tracking and detailed reporting help us refine and improve your results."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Boldsack Media"
    },
    "serviceType": "Media & Creative Services",
    "description": "Comprehensive media services including content creation, influencer collaboration, business growth analysis, content writing, and public relations management",
    "areaServed": {
      "@type": "Place",
      "name": "Bhadrak, Odisha, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Media & Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "Professional photography, videography, and visual content production"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Influencer Collaboration",
            "description": "Strategic influencer partnerships and campaign management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Business Growth Analysis",
            "description": "Data-driven insights and growth strategy recommendations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Writing",
            "description": "Professional copywriting and content development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Public Relations Management",
            "description": "Media relations and brand reputation management"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Our Services | Content Creation, PR & Influencer Collaboration | Boldsack Media"
        description="Professional media services in Bhadrak, Odisha. Content creation, influencer collaboration, business growth analysis, content writing & public relations. Get free consultation."
        keywords="content creation, influencer collaboration, business growth analysis, content writing, public relations, media services, Bhadrak, Odisha"
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
              Creative solutions designed to elevate your brand, 
              engage your audience, and drive measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-primary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">1500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
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
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of services designed to transform your brand presence.
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

      {/* Process Section */}
      <section className="py-20 bg-card/30">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Why Choose <span className="text-gradient">Boldsack Media?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just another agency. We're your strategic partners in growth, 
                  committed to delivering exceptional results that exceed your expectations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Proven track record with 1500+ successful projects",
                  "Data-driven strategies that deliver measurable ROI",
                  "Dedicated team of creative experts",
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
              Ready to <span className="text-gradient">Transform</span> Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your goals and create a customized strategy that delivers real results. 
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
