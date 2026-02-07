/** @type {import('next').NextConfig} */

const nextConfig = {
  // Image Optimization
  images: {
    domains: [
      'images.unsplash.com',
      'unavatar.io'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // Security & SEO Headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // SEO Headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Sitemap & Robots Headers
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          }
        ]
      }
    ];
  },

  // Redirects
  redirects: async () => {
    return [
      // Redirect old URLs if needed
      {
        source: '/services/:path*',
        destination: '/leistungen/:path*',
        permanent: true // 301 redirect for SEO
      }
    ];
  },

  // Rewrite URLs ohne den Pfad zu ändern
  rewrites: async () => {
    return {
      beforeFiles: [
        // Sitemap rewrite
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap'
        }
      ]
    };
  },

  // Compression
  compress: true,

  // React Strict Mode
  reactStrictMode: true,

  // Source Maps (für Production Debugging)
  productionBrowserSourceMaps: false,

  // Internationalization
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de'
  }
};

module.exports = nextConfig;
