/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'spark docs',
  tagline: 'Documentation for spark',
  url: 'https://spark.lucko.me/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-inverted-512.png',
  projectName: 'spark',
  scripts: [{src: 'https://plausible.lucko.me/js/pl.js', async: true, defer: true, 'data-domain': 'spark.lucko.me'}],

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
    image: 'https://spark.lucko.me/assets/logo-inverted-512.png',
    metadata: [{name: 'twitter:card', content: 'summary'}],
    prism: {
      additionalLanguages: ['java', 'groovy', 'kotlin', 'docker', 'http']
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          sidebarCollapsed: false,
          breadcrumbs: false,
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
