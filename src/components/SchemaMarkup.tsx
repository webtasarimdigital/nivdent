import React from 'react';

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Nivdent Oral and Dental Health Center",
    "image": "https://nivdent.com/logo.webp",
    "@id": "https://nivdent.com/#organization",
    "url": "https://nivdent.com",
    "telephone": "444 9 265",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tantavi, Mentesoglu Cd. No:25",
      "addressLocality": "Umraniye",
      "addressRegion": "Istanbul",
      "postalCode": "34764",
      "addressCountry": "TR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://facebook.com/nivdent",
      "https://instagram.com/nivdisklinigi",
      "https://linkedin.com/company/nivdent"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nivdent Oral and Dental Health Center",
    "url": "https://nivdent.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nivdent.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
