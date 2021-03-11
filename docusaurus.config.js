/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'spark docs',
  tagline: 'Documentation for spark',
  url: 'https://spark.lucko.me/docs/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-512.png',
  projectName: 'spark',

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'spark docs',
      logo: {
        alt: 'spark logo',
        src: 'img/logo.svg',
        href: 'https://spark.lucko.me/',
        target: '_self'
      },
      items: [],
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} spark contributors`,
    },
    image: 'img/logo-512.png'
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/lucko/spark-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        blog: false,
        pages: false
      },
    ],
  ],
};
