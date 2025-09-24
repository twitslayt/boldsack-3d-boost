import SEOHead from "@/components/seohead";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Boldsack Media | Service Terms & Legal Agreement"
        description="Boldsack Media's terms and conditions for digital marketing services. Legal agreement covering service terms, payment, intellectual property, and client responsibilities."
        keywords="terms and conditions, service agreement, legal terms, digital marketing contract, Boldsack Media legal"
      />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="card-3d p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of Boldsack Media's services and website. 
                By engaging our services or using our website, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Services</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Boldsack Media provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Brand Development and Strategy</li>
                  <li>Content Creation and Marketing</li>
                  <li>Digital Advertising Campaigns</li>
                  <li>Market Research and Analysis</li>
                  <li>Website Development and Design</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Client Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information required for services</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Ensure all provided content complies with applicable laws and regulations</li>
                <li>Make payments according to agreed terms and schedules</li>
                <li>Communicate changes or concerns promptly</li>
                <li>Respect intellectual property rights of third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Invoices are due within 30 days of issuance</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Services may be suspended for overdue accounts</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>Prices are subject to change with 30 days notice</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Intellectual property rights are handled as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Client retains rights to their existing trademarks, content, and materials</li>
                  <li>Boldsack Media retains rights to methodologies, processes, and general knowledge</li>
                  <li>Work product created specifically for clients belongs to the client upon full payment</li>
                  <li>We may use project results as case studies (with client permission)</li>
                  <li>Third-party materials require appropriate licensing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Confidentiality</h2>
              <p className="text-muted-foreground">
                We respect the confidentiality of client information and will not disclose confidential business 
                information to third parties without consent, except as required by law or as necessary to provide services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Service Performance</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  While we strive for excellent results, we cannot guarantee specific outcomes due to factors beyond our control:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Search engine algorithm changes</li>
                  <li>Market conditions and competition</li>
                  <li>Platform policy changes</li>
                  <li>Client industry factors</li>
                  <li>External economic conditions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Our liability for any claims arising from our services is limited to the amount paid for those specific 
                services. We are not liable for indirect, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Termination</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services under the following conditions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>30 days written notice for ongoing services</li>
                  <li>Immediate termination for material breach</li>
                  <li>Immediate termination for non-payment</li>
                  <li>Completion of all outstanding work and payments upon termination</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Force Majeure</h2>
              <p className="text-muted-foreground">
                We are not liable for delays or failures due to circumstances beyond our reasonable control, including 
                natural disasters, government actions, internet outages, or other force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Disputes will be resolved through good faith negotiation. If unresolved, disputes will be subject to 
                binding arbitration under Indian law, with proceedings conducted in Bhadrak, Odisha.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of India. Any legal proceedings will be conducted in the 
                appropriate courts of Bhadrak, Odisha.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. Continued use of our services after changes constitutes 
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> ceo@boldsack.in</p>
                <p><strong>Phone:</strong> +91 9124177703</p>
                <p><strong>Address:</strong> Bhadrak, Odisha, India</p>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Terms;