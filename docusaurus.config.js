// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const repoUrl = 'https://github.com/StrikerVirtualRecoil/strikervr-support';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StrikerVR Support',
  tagline: 'Setup, gameplay, developer, and troubleshooting guides for Mavrik products.',
  favicon: 'img/StrikerVR-Logo_icon-white_1.png',

  future: {
    v4: true,
    faster: false,
  },

  url: process.env.SITE_URL ?? 'https://support.strikervr.com',
  baseUrl: '/',

  organizationName: 'StrikerVirtualRecoil',
  projectName: 'strikervr-support',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `${repoUrl}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'StrikerVR Support Documents',
        logo: {
          alt: 'StrikerVR Support Documents',
          src: 'img/StrikerVR-Logo_icon-white_1.png',
        },
        items: [
          {
            to: '/docs/mavrik-pro-enterprise',
            label: 'Mavrik Pro Enterprise',
            position: 'left',
          },
          {
            to: '/docs/mavrik-at-home',
            label: 'Mavrik at Home',
            position: 'left',
          },
          {
            href: repoUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Mavrik Pro Enterprise',
                to: '/docs/mavrik-pro-enterprise',
              },
              {
                label: 'Mavrik at Home',
                to: '/docs/mavrik-at-home',
              },
            ],
          },
          {
            title: 'Common Guides',
            items: [
              {
                label: 'Mavrik Quick Start Guide',
                to: '/docs/mavrik-at-home/mavrik-setup/mavrik-quick-start-guide',
              },
              {
                label: 'Mavrik-Pro Quick Start Guide',
                to: '/docs/mavrik-pro-enterprise/mavrik-pro-setup/mavrik-pro-quick-start-guide',
              },
              {
                label: 'Connection Troubleshooting',
                to: '/docs/mavrik-at-home/mavrik-troubleshooting/troubleshooting-connection',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Developer Setup Guide',
                to: '/docs/mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/developer-setup-guide',
              },
              {
                label: 'StrikerLink Runtime',
                to: '/docs/mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/strikerlink-runtime',
              },
              {
                label: 'Firmware',
                to: '/docs/mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/firmware',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'support@strikervr.com',
                href: 'mailto:support@strikervr.com',
              },
            ],
          },
        ],
        copyright: `Copyright (c) ${new Date().getFullYear()} StrikerVR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
