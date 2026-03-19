import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ginjo.co.uk/" />
        <meta property="og:site_name" content="Ginjo Construction" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ginjo.co.uk/" />
        <meta property="twitter:site" content="@ginjoconstruction" />
        
        {/* Structured Data for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ginjo Construction",
              "url": "https://www.ginjo.co.uk",
              "logo": "https://www.ginjo.co.uk/LOGO.jpg",
              "description": "Expert commercial services partner for construction projects - quantity surveying, commercial management, and project delivery.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 Bishopsgate",
                "addressLocality": "London",
                "postalCode": "EC2N 4AG",
                "addressCountry": "UK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 07730748210",
                "contactType": "customer service",
                "email": "sales@ginjo.co.uk"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ginjo-construction",
                "https://www.facebook.com/ginjoconstruction",
                "https://www.instagram.com/ginjoconstruction"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
