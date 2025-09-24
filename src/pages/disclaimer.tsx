import SEOHead from "@/components/seohead";
import { Card } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <>
      <SEOHead 
        title="Disclaimer | Boldsack Media | Legal Disclaimer & Service Limitations"
        description="Boldsack Media's legal disclaimer. Important information about service limitations, liability, and responsibilities for digital marketing services."
        keywords="disclaimer, legal disclaimer, service limitations, liability, digital marketing disclaimer, Boldsack Media legal"
      />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Disclaimer</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="card-3d p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">General Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website and the services provided by Boldsack Media are offered for general 
                informational purposes only. While we strive to provide accurate and up-to-date information, we make 
                no warranties or representations about the accuracy, completeness, or suitability of any information, 
                products, or services contained herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Service Results Disclaimer</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Digital marketing results can vary significantly based on numerous factors beyond our control. 
                  Boldsack Media cannot guarantee specific outcomes, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Specific rankings in search engine results</li>
                  <li>Guaranteed increases in website traffic or sales</li>
                  <li>Specific social media engagement rates</li>
                  <li>Particular return on investment (ROI) percentages</li>
                  <li>Timeframes for achieving desired results</li>
                </ul>
                <p className="text-muted-foreground">
                  Past performance and case studies do not guarantee future results for your specific business or industry.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">External Factors</h2>
              <p className="text-muted-foreground mb-4">
                The effectiveness of our services may be influenced by factors outside our control, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Search engine algorithm changes and updates</li>
                <li>Social media platform policy changes</li>
                <li>Market conditions and economic factors</li>
                <li>Industry competition and saturation</li>
                <li>Seasonal trends and consumer behavior</li>
                <li>Technical issues with third-party platforms</li>
                <li>Government regulations and legal changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Professional Advice Disclaimer</h2>
              <p className="text-muted-foreground">
                The information and strategies provided by Boldsack Media should not be considered as professional 
                legal, financial, or business advice. We recommend consulting with qualified professionals for 
                specific legal, financial, or business decisions related to your particular circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Links and Content</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites or reference third-party content. We do not 
                endorse, control, or assume responsibility for the content, privacy policies, or practices of any 
                third-party websites or services. Use of third-party services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Technology and Platform Changes</h2>
              <p className="text-muted-foreground">
                Digital marketing platforms, tools, and technologies are constantly evolving. Strategies that are 
                effective today may become less effective or obsolete due to platform changes, algorithm updates, 
                or new industry standards. We will make reasonable efforts to adapt strategies as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                The success of our services depends partly on client cooperation and adherence to recommendations. 
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Implementing recommendations in a timely manner</li>
                <li>Maintaining website security and functionality</li>
                <li>Ensuring content complies with platform guidelines</li>
                <li>Communicating changes in business objectives promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Boldsack Media, its employees, partners, and affiliates 
                shall not be liable for any direct, indirect, incidental, consequential, or punitive damages 
                arising from the use of our services or website, even if we have been advised of the possibility 
                of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Industry Standards Compliance</h2>
              <p className="text-muted-foreground">
                We follow industry best practices and ethical guidelines in our work. However, the interpretation 
                and enforcement of platform policies, search engine guidelines, and advertising standards may 
                change without notice, potentially affecting ongoing campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data and Analytics</h2>
              <p className="text-muted-foreground">
                While we use various analytics tools and data sources to inform our strategies, the accuracy of 
                third-party data and analytics platforms cannot be guaranteed. Data discrepancies between different 
                platforms are common and may affect reporting and decision-making.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Modification of Disclaimer</h2>
              <p className="text-muted-foreground">
                This disclaimer may be updated periodically to reflect changes in our services, legal requirements, 
                or industry standards. Continued use of our services constitutes acceptance of any modifications 
                to this disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Questions and Clarifications</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this disclaimer or need clarification about our services, please contact us:
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

export default Disclaimer;