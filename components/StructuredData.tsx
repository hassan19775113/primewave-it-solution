'use client';

import { useEffect } from 'react';

/**
 * StructuredData Component
 * Injiziert JSON-LD Structured Data in den <head>
 * Verbessert SEO durch Schema.org Markup
 */
export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Primewave IT Solution',
      url: 'https://primewave-it-solution.vercel.app',
      logo: 'https://primewave-it-solution.vercel.app/logo.png',
      description:
        'Webdesign, Webentwicklung und Web-Applications für Unternehmen',
      sameAs: [
        'https://www.facebook.com/primewaveit',
        'https://www.linkedin.com/company/primewave-it-solution',
        'https://twitter.com/primewaveit'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'hassan19775113@outlook.com',
        telephone: '+49 173 4946526',
        areaServed: 'Garbsen / Hannover'
      }
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://primewave-it-solution.vercel.app',
      name: 'Primewave IT Solution',
      image: 'https://primewave-it-solution.vercel.app/logo.png',
      description:
        'Webdesign, Webentwicklung und Web-Applications für Unternehmen',
      url: 'https://primewave-it-solution.vercel.app',
      telephone: '+49 173 4946526',
      email: 'hassan19775113@outlook.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hannover',
        addressRegion: 'Garbsen',
        addressCountry: 'DE'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Hannover'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Garbsen'
        },
        {
          '@type': 'Country',
          name: 'DE'
        }
      ],
      priceRange: '$$'
    };

    // ProfessionalService Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Primewave IT Solution',
      image: 'https://primewave-it-solution.vercel.app/logo.png',
      description: 'Webdesign- und Webentwicklungsagentur',
      url: 'https://primewave-it-solution.vercel.app',
      telephone: '+49 173 4946526',
      email: 'hassan19775113@outlook.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hannover',
        addressRegion: 'Garbsen',
        addressCountry: 'DE'
      },
      additionalType: 'http://www.productontology.org/doc/Web_design',
      knowsAbout: [
        'Webdesign',
        'Webentwicklung',
        'Web-Applications',
        'E-Commerce',
        'SEO'
      ],
      areaServed: 'Region Hannover'
    };

    // Inject Schemas
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      serviceSchema
    ];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.async = true;
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup auf optional (Schemas bleiben normalerweise)
    };
  }, []);

  return null; // Component rendert nichts sichtbares
}
