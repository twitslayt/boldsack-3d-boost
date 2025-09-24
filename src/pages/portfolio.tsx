import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seohead";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  Star,
  Calendar,
  Award
} from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "E-commerce Brand Transformation",
      client: "Fashion Retailer",
      industry: "Fashion & Lifestyle",
      challenge: "Low online visibility and poor conversion rates",
      solution: "Complete digital marketing overhaul with SEO, social media, and PPC campaigns",
      results: [
        "300% increase in organic traffic",
        "150% boost in conversion rates", 
        "200% growth in social media followers",
        "ROI of 400% within 6 months"
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      category: "Digital Marketing"
    },
    {
      title: "Local Restaurant Chain Expansion",
      client: "Restaurant Group",
      industry: "Food & Hospitality",
      challenge: "Limited brand awareness in new markets",
      solution: "Targeted local SEO, social media marketing, and influencer partnerships",
      results: [
        "250% increase in local search visibility",
        "180% growth in foot traffic",
        "300% increase in online orders",
        "Successful expansion to 5 new locations"
      ],
      image: "/api/placeholder/600/400",
      duration: "8 months",
      category: "Local SEO"
    },
    {
      title: "Tech Startup Brand Launch",
      client: "SaaS Company",
      industry: "Technology",
      challenge: "Building brand awareness from scratch in competitive market",
      solution: "Comprehensive brand development, content marketing, and thought leadership strategy",
      results: [
        "Built brand recognition to 45% in target market",
        "Generated 500+ qualified leads",
        "Achieved $2M in revenue within first year",
        "Established industry thought leadership"
      ],
      image: "/api/placeholder/600/400",
      duration: "12 months",
      category: "Brand Development"
    },
    {
      title: "Healthcare Practice Growth",
      client: "Medical Clinic",
      industry: "Healthcare",
      challenge: "Attracting new patients while maintaining compliance",
      solution: "HIPAA-compliant digital marketing with local SEO and reputation management",
      results: [
        "400% increase in new patient inquiries",
        "95% positive review rating maintained",
        "50% reduction in patient acquisition cost",
        "Expanded to 2 additional locations"
      ],
      image: "/api/placeholder/600/400",
      duration: "10 months",
      category: "Healthcare Marketing"
    }
  ];

  const testimonials = [
    {
      name: "Akash Mehta",
      role: "Business Owner",
      text: "Boldsack Media boosted my brand visibility—professional, creative, highly recommended!",
      rating: 5
    },
    {
      name: "Anuska Patil",
      role: "Marketing Director", 
      text: "Boldsack Media transformed my advertising efforts! Their insightful strategies and creativity helped elevate my brand's visibility immensely.",
      rating: 5
    },
    {
      name: "Sukesh Singh",
      role: "CEO",
      text: "I am thrilled with the results from Boldsack Media. Their team's dedication and expertise made a significant difference in my marketing campaign.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "1500+", label: "Successful Campaigns", icon: <Target className="w-6 h-6" /> },
    { number: "900+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "700+", label: "Positive Reviews", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Client Retention", icon: <Award className="w-6 h-6" /> }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Boldsack Media Portfolio",
    "description": "Case studies and success stories showcasing digital marketing results for clients across various industries",
    "creator": {
      "@type": "Organization",
      "name": "Boldsack Media"
    },
    "about": "Digital marketing case studies demonstrating expertise in SEO, social media marketing, and brand development"
  };

  return (
    <>
      <SEOHead 
        title="Portfolio & Case Studies | Boldsack Media Success Stories | Digital Marketing Results"
        description="Explore Boldsack Media's portfolio of successful digital marketing campaigns. Real case studies showing 300% traffic increases, improved conversions, and business growth across industries."
        keywords="digital marketing portfolio, case studies, marketing success stories, SEO results, social media campaigns, brand development, Bhadrak agency"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through strategic digital marketing and creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-3d p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results for real businesses. Here are some of our most impactful campaigns and their outcomes.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-3d overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {study.title}
                      </h3>
                      <div className="text-muted-foreground">
                        <strong>Client:</strong> {study.client} • <strong>Industry:</strong> {study.industry}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Results Achieved:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3">
                            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">
                        Success Story #{index + 1}
                      </h4>
                      <p className="text-muted-foreground">
                        Transforming businesses through strategic marketing excellence
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the businesses we've helped transform their digital presence and achieve their marketing goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-3d p-8 space-y-6 text-center">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "E-commerce & Retail",
              "Healthcare & Medical",
              "Technology & SaaS",
              "Food & Hospitality",
              "Education & Training",
              "Real Estate",
              "Financial Services",
              "Professional Services"
            ].map((industry, index) => (
              <Card key={index} className="card-3d p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {industry}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Be Our Next <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the ranks of successful businesses who've transformed their marketing with Boldsack Media. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;