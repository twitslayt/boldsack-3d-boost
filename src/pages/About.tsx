import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  ArrowRight,
  Linkedin,
  Instagram
} from "lucide-react";
import ceoFormalImage from "@/assets/ceo-formal.jpg";
import ceoOutdoorImage from "@/assets/ceo-outdoor.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge marketing solutions that set our clients apart from the competition."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency", 
      description: "Clear communication and honest reporting are at the core of our client relationships. No hidden fees, no false promises."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We love what we do, and it shows in every campaign we create. Our passion drives exceptional results for your brand."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We don't settle for good enough. Every project receives our full attention to detail and commitment to quality."
    }
  ];

  const achievements = [
    { number: "1500+", label: "Successful Campaigns" },
    { number: "900+", label: "Satisfied Clients" },
    { number: "700+", label: "Positive Reviews" },
    { number: "5+", label: "Years Experience" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Boldsack Media",
      "description": "Digital Marketing Agency based in Bhadrak, Odisha, specializing in brand development, SEO, and creative strategies",
      "founder": {
        "@type": "Person",
        "name": "Siddharth Kumar",
        "jobTitle": "CEO & Founder",
        "image": "/ceo-formal.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/sidhanta-kumar-behera-90428226b",
          "https://www.instagram.com/aura_siddharth"
        ]
      },
      "foundingDate": "2019",
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
        title="About Boldsack Media | Digital Marketing Agency Founded by Siddharth Kumar"
        description="Learn about Boldsack Media, founded by CEO Siddharth Kumar in Bhadrak, Odisha. Our mission: transforming brand visions into reality with innovative marketing solutions."
        keywords="Boldsack Media about, Siddharth Kumar CEO, digital marketing agency Bhadrak, company history, marketing experts Odisha"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Boldsack Media</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming brand visions into reality through innovative marketing solutions, 
              creative strategies, and dedicated expertise since our founding in Bhadrak, Odisha.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-3d p-8 text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Boldsack Media, we specialize in transforming brand visions into reality. 
                  Based in Bhadrak, Odisha, our expert team is committed to delivering innovative 
                  marketing solutions that engage and captivate audiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in a bold new approach to advertising that combines creativity with 
                  data-driven strategies. Our mission is to help businesses of all sizes achieve 
                  their marketing goals through compelling narratives and striking visuals that 
                  resonate with target audiences, no matter the industry.
                </p>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/services">
                  Discover Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="card-3d p-6 bg-primary/10">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Client-Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      Every strategy is tailored to meet your unique business needs and goals.
                    </p>
                  </Card>
                  <Card className="card-3d p-6 bg-secondary/10">
                    <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                    <h4 className="font-semibold mb-2">Results-Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      We measure success by the growth and satisfaction of our clients.
                    </p>
                  </Card>
                </div>
                <div className="space-y-6 mt-12">
                  <Card className="card-3d p-6 bg-accent/10">
                    <Award className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-semibold mb-2">Award-Winning</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognized for excellence in digital marketing and brand development.
                    </p>
                  </Card>
                  <Card className="card-3d p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Strategic</h4>
                    <p className="text-sm text-muted-foreground">
                      Data-driven approaches ensure maximum impact for your investment.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="card-3d p-12 bg-gradient-to-br from-primary/10 to-primary/5">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses by transforming their brand visions into compelling realities 
                through innovative marketing strategies, creative excellence, and data-driven insights 
                that drive meaningful engagement and sustainable growth.
              </p>
            </Card>

            <Card className="card-3d p-12 bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Eye className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading digital marketing agency in Eastern India, known for our 
                creativity, integrity, and exceptional results. We envision a future where every 
                brand can achieve its full potential through strategic marketing excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-3d p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">CEO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading with vision, passion, and expertise in digital marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">
                    Siddharth Kumar
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    CEO & Founder, Boldsack Media
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As the visionary founder and CEO of Boldsack Media, Siddharth Kumar brings 
                  innovative thinking and strategic expertise to every client engagement. 
                  Based in Bhadrak, Odisha, he has built the agency from the ground up with 
                  a commitment to delivering exceptional marketing solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in digital marketing, brand development, and 
                  creative strategy, Siddharth leads our team in transforming business 
                  visions into market realities. His passion for innovation drives our 
                  agency's success in helping over 900+ clients achieve their marketing goals.
                </p>
              </div>

              <div className="flex space-x-4">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href="https://www.linkedin.com/in/sidhanta-kumar-behera-90428226b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Connect with Siddharth Kumar on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a 
                    href="https://www.instagram.com/aura_siddharth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow Siddharth Kumar on Instagram"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Leading</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-xl">
                  <div className="text-2xl font-bold text-secondary mb-1">900+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="card-3d overflow-hidden">
                    <img
                      src={ceoFormalImage}
                      alt="Siddharth Kumar - CEO and Founder of Boldsack Media in formal business attire"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="card-3d overflow-hidden">
                    <img
                      src={ceoOutdoorImage}
                      alt="Siddharth Kumar - Boldsack Media CEO in professional outdoor setting"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 right-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient">Work Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how Boldsack Media can help transform your brand's presence 
              and achieve your marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;