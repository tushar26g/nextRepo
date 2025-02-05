import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  const WEBSITE_URL = 'https://caninjas.com/';
  
  // Define static routes for CA Ninjas
  const staticRoutes = [
    // Main Course Pages
    // {
    //   url: '/ca-foundation',
    //   priority: '0.9',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter',
    //   priority: '0.9',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final',
    //   priority: '0.9',
    //   changefreq: 'weekly'
    // },

    // Study Material Routes
    // {
    //   url: '/pyq',
    //   priority: '0.8',
    //   changefreq: 'monthly'
    // },
    // {
    //   url: '/rtp',
    //   priority: '0.8',
    //   changefreq: 'monthly'
    // },
    // {
    //   url: '/mtp',
    //   priority: '0.8',
    //   changefreq: 'monthly'
    // },
    {
      url: '/mcqs',
      priority: '0.8',
      changefreq: 'weekly'
    },

    // CA Foundation Subject Pages
    // {
    //   url: '/ca-foundation/accounts',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-foundation/economics',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-foundation/law',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-foundation/maths',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },

    // // CA Inter Subject Pages
    // {
    //   url: '/ca-inter/accounts',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/advanced-accounts',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/audit',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/eis-sm',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/fm-economics',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/law',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/tax',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-inter/costing',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },

    // // CA Final Subject Pages
    // {
    //   url: '/ca-final/advanced-audit',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final/fr',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final/sfm',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final/scmpe',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final/direct-tax',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },
    // {
    //   url: '/ca-final/indirect-tax',
    //   priority: '0.8',
    //   changefreq: 'weekly'
    // },

    // Information Pages
    {
      url: '/about',
      priority: '0.7',
      changefreq: 'monthly'
    }
    // ,
    // {
    //   url: '/contact',
    //   priority: '0.7',
    //   changefreq: 'monthly'
    // },
    // {
    //   url: '/privacy-policy',
    //   priority: '0.6',
    //   changefreq: 'yearly'
    // },
    // {
    //   url: '/terms',
    //   priority: '0.6',
    //   changefreq: 'yearly'
    // }
  ];

  // Get dynamic pages
  const pages = await globby([
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.js',
    'app/**/*.jsx',
    '!app/**/_*.tsx',
    '!app/**/layout.tsx',
    '!app/**/loading.tsx',
    '!app/**/error.tsx',
    '!app/api/**',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Home page -->
      <url>
        <loc>${WEBSITE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>

      <!-- Static routes -->
      ${staticRoutes
        .map(({ url, priority, changefreq }) => `
          <url>
            <loc>${WEBSITE_URL}${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
          </url>
        `)
        .join('')}

      <!-- Dynamic pages -->
      ${pages
        .map((page) => {
          const path = page
            .replace('app', '')
            .replace('/page', '')
            .replace('.tsx', '')
            .replace('.ts', '')
            .replace('.jsx', '')
            .replace('.js', '');
          
          if (path.includes('api/') || path.includes('components/')) {
            return '';
          }

          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${WEBSITE_URL}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  // Write sitemap to public directory
  writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generate();