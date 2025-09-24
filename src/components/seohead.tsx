import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Boldsack Media | Digital Marketing Agency in Bhadrak, Odisha",
  description = "Boldsack Media transforms brand visions into reality. Expert digital marketing, SEO, branding & creative strategies in Bhadrak, Odisha. Contact us for a free consultation.",
  keywords = "digital marketing agency, SEO services, social media marketing, branding, creative strategy, Bhadrak, Odisha, marketing consultant",
  canonicalUrl,
  ogImage = "/og-image.jpg",
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Boldsack Media") ? title : `${title} | Boldsack Media`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Boldsack Media" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;