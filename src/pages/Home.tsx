import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { 
  TrendingUp, 
  Target, 
  Palette, 
  Search, 
  Users, 
  Award,
  ArrowRight,
  Play,
  Star
} from "lucide-react";
import ceoCasualImage from "@/assets/ceo-casual.jpg";
import ceoFormalImage from "@/assets/ceo-formal.jpg";
import ceoOutdoorImage from "@/assets/ceo-outdoor.jpg";

const Home = () => {
  const stats = [
    { number: "1500+", label: "Successful Campaigns" },
    { number: "900+", label: "Satisfied Clients" },
    { number: "700+", label: "Positive Reviews" },
    { number: "5+", label: "Years Experience" }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Creative Strategy",
      description: "Unique marketing strategies tailored to your brand's goals, ensuring your message stands out and resonates effectively.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Leverage digital platforms to enhance online presence through SEO, social media, and content marketing.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Development",
      description: "Build strong brand identities that reflect your values and vision, creating lasting marketplace impressions.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Market Research",
      description: "In-depth market research to understand your audience and competitors, enabling informed strategic decisions.",
    },
  ];

  const testimonials = [
    {
      name: "Akash Mehta",
      text: "Boldsack Media boosted my brand visibility—professional, creative, highly recommended!",
      rating: 5
    },
    {
      name: "Anuska Patil", 
      text: "Boldsack Media transformed my advertising efforts! Their insightful strategies and creativity helped elevate my brand's visibility immensely.",
      rating: 5
    },
    {
      name: "Sukesh Singh",
      text: "I am thrilled with the results from Boldsack Media. Their team's dedication and expertise made a significant difference in my marketing campaign.",
      rating: 5
    },
    {
      name: "Rohan Mishra",
      text: "Collaborating with Boldsack Media was a fantastic experience. Their professionalism and innovative ideas helped me reach my marketing goals seamlessly.",
      rating: 5
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boldsack Media",
    "description": "Digital Marketing Agency specializing in SEO, branding, and creative strategies",
    "url": "https://boldsackmedia.com",
    "logo": "/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919124177703",
      "contactType": "customer service",
      "email": "ceo@boldsack.in"
    },
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Bhadrak",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "700"
    },
    "founder": {
      "@type": "Person",
      "name": "Sidhanta Kumar Behera",
      "jobTitle": "CEO & Founder"
    }
  };

  return (
    <>
      <SEOHead 
        title="Boldsack Media | Digital Marketing Agency in Bhadrak, Odisha | SEO & Branding Services"
        description="Boldsack Media transforms brand visions into reality. Expert digital marketing, SEO, branding & creative strategies in Bhadrak, Odisha. 1500+ successful campaigns, 900+ satisfied clients."
        keywords="digital marketing agency, SEO services, social media marketing, branding, creative strategy, Bhadrak, Odisha, marketing consultant, brand development"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Elevate</span> your<br />
                  <span className="text-foreground">brand's presence</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Welcome to Boldsack Media. Our marketing and advertising agency is dedicated to 
                  crafting compelling narratives and striking visuals that resonate with your target 
                  audience, no matter the industry.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/about">
                    <Play className="w-5 h-5 mr-2" />
                    About Us
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 right-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Services <span className="text-gradient">Boldsack Media</span> offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in transforming brand visions into reality with innovative 
              marketing solutions that engage and captivate audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-3d p-8 text-center space-y-6 hover:scale-105 transition-transform duration-300">
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

          <div className="text-center mt-12">
            <Button asChild variant="cta" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CEO Showcase Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">CEO & Founder</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sidhanta Kumar Behera, the visionary CEO and founder of Boldsack Media, leading digital marketing innovation in Bhadrak, Odisha.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* CEO Images Gallery */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-3d p-4 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={ceoFormalImage}
                    alt="sidhanta kumar behera founder and CEO of Boldsack media"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    title="sidhanta kumar behera founder and CEO of Boldsack media"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">Professional Portrait</h3>
                  <p className="text-sm text-muted-foreground">CEO & Digital Marketing Expert</p>
                </div>
              </div>

              <div className="card-3d p-4 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={ceoCasualImage}
                    alt="sidhanta kumar behera founder and CEO of Boldsack media"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    title="sidhanta kumar behera founder and CEO of Boldsack media"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">Casual Professional</h3>
                  <p className="text-sm text-muted-foreground">Founder & Marketing Strategist</p>
                </div>
              </div>

              <div className="card-3d p-4 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={ceoOutdoorImage}
                    alt="sidhanta kumar behera founder and CEO of Boldsack media"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    title="sidhanta kumar behera founder and CEO of Boldsack media"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">Outdoor Professional</h3>
                  <p className="text-sm text-muted-foreground">Visionary Leader & Brand Strategist</p>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div className="space-y-6">
              <div className="card-3d p-6 bg-primary/10">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Sidhanta Kumar Behera</h4>
                <p className="text-sm text-muted-foreground">CEO & Founder, Digital Marketing Expert</p>
              </div>

              <div className="card-3d p-6 bg-secondary/10">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold mb-2">Leadership Excellence</h4>
                <p className="text-sm text-muted-foreground">Leading 900+ successful client campaigns</p>
              </div>

              <div className="card-3d p-6 bg-accent/10">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Strategic Vision</h4>
                <p className="text-sm text-muted-foreground">5+ years transforming digital marketing in Odisha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  About <span className="text-gradient">Boldsack Media</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  At Boldsack Media, we specialize in transforming brand visions into reality. 
                  Based in Bhadrak, Odisha, our expert team is committed to delivering innovative 
                  marketing solutions that engage and captivate audiences. Experience a bold new 
                  approach to advertising with us.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary rounded-full border-2 border-background"></div>
                  <div className="w-10 h-10 bg-secondary rounded-full border-2 border-background"></div>
                  <div className="w-10 h-10 bg-accent rounded-full border-2 border-background"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-muted-foreground">Dedicated professionals</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card-3d p-6 bg-primary/10">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">900+ Clients</h4>
                    <p className="text-sm text-muted-foreground">Satisfied customers worldwide</p>
                  </div>
                  <div className="card-3d p-6 bg-secondary/10">
                    <Award className="w-8 h-8 text-secondary mb-4" />
                    <h4 className="font-semibold mb-2">Award Winning</h4>
                    <p className="text-sm text-muted-foreground">Excellence in marketing</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card-3d p-6 bg-accent/10">
                    <TrendingUp className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-semibold mb-2">Growth Focused</h4>
                    <p className="text-sm text-muted-foreground">Results that matter</p>
                  </div>
                  <div className="card-3d p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Strategic Approach</h4>
                    <p className="text-sm text-muted-foreground">Data-driven solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-3d p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border/20">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                </div>
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
              Let's embark on this <span className="text-gradient">journey together!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your brand's presence? Get in touch with us today for a free consultation 
              and discover how we can help your business grow.
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

export default Home;