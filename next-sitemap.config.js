/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.drsaisekharphysician.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/icon.png'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
