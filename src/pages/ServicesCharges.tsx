import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Diamond, Medal, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCharges = () => {
  const plans = [
    {
      name: "Bronze Plan",
      icon: Medal,
      price: "₹10,000 - ₹15,000",
      marketPrice: "₹30,000 - ₹50,000",
      description: "Perfect for small businesses starting their digital journey",
      color: "from-amber-500 to-orange-600",
      features: [
        "Google My Business create and upgrade with proper SEO",
        "Social media page create and modify",
        "Local SEO and local social media advertisement",
        "Professional business logo create",
        "WhatsApp wish post for whole year with your business name and logo",
        "Standard quality video shoot of your business"
      ]
    },
    {
      name: "Gold Plan",
      icon: Crown,
      price: "₹20,000 - ₹25,000",
      marketPrice: "₹50,000 - ₹70,000",
      description: "Comprehensive digital marketing solution for growing businesses",
      color: "from-yellow-500 to-amber-600",
      popular: true,
      features: [
        "Google My Business create and upgrade with proper SEO",
        "Social media page create and modify",
        "Local with whole state advertisement",
        "Professional business logo create",
        "WhatsApp wish post for whole year with your business name and logo",
        "Own business personal WhatsApp Business API for bulk text and buttons",
        "Instagram and Facebook page create and manage",
        "High quality video shoot using professional camera",
        "Photo shoot and video shoot using beautiful models",
        "Time to time offers and promotion create and management online and offline"
      ]
    },
    {
      name: "Diamond Plan",
      icon: Diamond,
      price: "₹30,000 - ₹45,000",
      marketPrice: "₹80,000 - ₹1,50,000",
      description: "Premium package with celebrity endorsements and priority support",
      color: "from-blue-500 to-purple-600",
      features: [
        "All Gold Plan features included",
        "WhatsApp Green Tick provided",
        "Google Map ratings increase",
        "Promotion using famous stars and actors",
        "YouTuber and Vlogger collaboration",
        "Priority support"
      ]
    }
  ];

  const individualServices = [
    { service: "Google My Business create and upgrade with proper SEO", marketPrice: "₹1,800", ourPrice: "₹700" },
    { service: "Social media page create and modify", marketPrice: "₹2,000", ourPrice: "₹1,000" },
    { service: "Local with whole state advertisement", marketPrice: "₹5,000", ourPrice: "₹2,000" },
    { service: "Professional business logo create", marketPrice: "₹1,000", ourPrice: "₹300" },
    { service: "WhatsApp wish post for whole year with your business name", marketPrice: "₹3,000", ourPrice: "₹1,000" },
    { service: "Own business personal WhatsApp Business API", marketPrice: "₹5,000", ourPrice: "₹2,000" },
    { service: "Instagram and Facebook page create and manage", marketPrice: "₹5,000", ourPrice: "₹2,000" },
    { service: "High quality video shoot using professional camera", marketPrice: "₹8,000", ourPrice: "₹4,000" },
    { service: "Photo shoot and video shoot using beautiful models", marketPrice: "₹10,000", ourPrice: "₹5,000" },
    { service: "WhatsApp Green Tick provided", marketPrice: "₹5,000", ourPrice: "₹1,000" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services and Pricing - Boldsack Media",
    "description": "Comprehensive digital marketing packages and individual service pricing for businesses in Odisha. Bronze, Gold, and Diamond plans available.",
    "provider": {
      "@type": "Organization",
      "name": "Boldsack Media",
      "url": "https://boldsackmedia.com"
    },
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.price.replace('₹', '').split(' - ')[0],
      "priceCurrency": "INR",
      "description": plan.description
    }))
  };

  return (
    <>
      <SEOHead 
        title="Services and Charges - Digital Marketing Packages | Boldsack Media"
        description="Explore our comprehensive digital marketing packages - Bronze (₹10,000), Gold (₹20,000), and Diamond (₹30,000) plans. Individual services also available. Best prices in Odisha."
        keywords="digital marketing packages, SEO pricing, social media marketing cost, Google My Business setup, Odisha digital marketing prices"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Premium Digital Marketing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Services & Charges
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose from our comprehensive digital marketing packages or select individual services. 
              Best prices in Odisha with market-leading results.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Perfect Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                All plans include professional execution and ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                      <div className="mt-4">
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        <div className="text-sm text-muted-foreground line-through">
                          Market Price: {plan.marketPrice}
                        </div>
                        {plan.price.includes('negotiable') && (
                          <div className="text-sm text-accent font-medium mt-1">Negotiable</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"} asChild>
                        <Link to="/contact">
                          <Zap className="w-4 h-4 mr-2" />
                          Get Started
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Individual Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Individual Service Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose only what you need - flexible & affordable
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-center font-semibold">Market Price</th>
                      <th className="px-6 py-4 text-center font-semibold">Our Price</th>
                      <th className="px-6 py-4 text-center font-semibold">You Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    {individualServices.map((item, index) => {
                      const marketPrice = parseInt(item.marketPrice.replace('₹', '').replace(',', ''));
                      const ourPrice = parseInt(item.ourPrice.replace('₹', '').replace(',', ''));
                      const savings = marketPrice - ourPrice;
                      const savingsPercent = Math.round((savings / marketPrice) * 100);
                      
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-secondary/5' : ''}>
                          <td className="px-6 py-4 text-sm">{item.service}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="line-through text-muted-foreground">{item.marketPrice}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="font-semibold text-primary">{item.ourPrice}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {savingsPercent}% OFF
                            </Badge>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get in touch for a free consultation and custom quote tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesCharges;