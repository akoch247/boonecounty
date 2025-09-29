const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.BooneCountyRepublicanWomensClub.org' });

const pages = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/events', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').write(data);
  console.log('Sitemap generated!');
});
