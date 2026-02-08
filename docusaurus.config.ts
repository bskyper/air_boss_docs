import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Air Boss Docs',
  tagline: 'Flight club management made simple',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://bskyper.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/air_boss_docs/',

  // GitHub pages deployment config
  organizationName: 'bskyper',
  projectName: 'air_boss_docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/bskyper/air_boss_docs/tree/main/',
          routeBasePath: '/', // Docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card image
    image: 'img/air-boss-social-card.jpg',
    navbar: {
      title: 'Air Boss',
      logo: {
        alt: 'Air Boss Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/bskyper/air_boss_docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Mobile App',
              to: '/mobile/overview',
            },
            {
              label: 'Web App',
              to: '/web/overview',
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'iOS App Store',
              href: 'https://apps.apple.com/us/app/air-boss-flight-fleet-ops/id6472218943',
            },
            {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.mycompany.airboss&hl=en-US',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bskyper/air_boss_docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Air Boss. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
