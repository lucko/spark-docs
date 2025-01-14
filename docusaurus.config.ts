import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'spark docs',
  tagline: 'Documentation for spark',
  favicon: 'img/logo-inverted-512.png',

  url: 'https://spark.lucko.me/',
  baseUrl: '/docs/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  projectName: 'spark',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [{
    src: 'https://plausible.lucko.me/js/pl.js',
    async: true,
    defer: true,
    'data-domain': 'spark.lucko.me'
  }],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          sidebarCollapsed: false,
          breadcrumbs: false,
          editUrl: 'https://github.com/lucko/spark-docs/edit/master/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    image: 'https://spark.lucko.me/assets/logo-inverted-512.png',
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
    prism: {
      theme: prismThemes.oneDark,
      additionalLanguages: ['json', 'java', 'groovy', 'kotlin', 'docker', 'http', 'bash']
    },
    metadata: [{name: 'twitter:card', content: 'summary'}],
  } satisfies Preset.ThemeConfig,
};

export default config;
