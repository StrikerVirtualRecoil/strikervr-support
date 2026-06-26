// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  supportSidebar: [
    {
      type: 'category',
      label: 'Mavrik at Home',
      link: {
        type: 'generated-index',
        title: 'Mavrik at Home',
        description: 'Setup, game, and troubleshooting articles for the Mavrik at-home product.',
        slug: '/mavrik-at-home',
      },
      items: [
        {
          type: 'category',
          label: 'Mavrik Setup',
          link: {
            type: 'generated-index',
            title: 'Mavrik Setup',
            slug: '/mavrik-at-home/mavrik-setup',
          },
          items: [
            'mavrik-at-home/mavrik-setup/what-is-the-strikervr-mavrik',
            'mavrik-at-home/mavrik-setup/mavrik-quick-start-guide',
            'mavrik-at-home/mavrik-setup/general-information',
            'mavrik-at-home/mavrik-setup/mavrik-limited-warranty-repair',
            'mavrik-at-home/mavrik-setup/mavrik-technical-information',
          ],
        },
        {
          type: 'category',
          label: 'Games for the Mavrik',
          link: {
            type: 'generated-index',
            title: 'Games for the Mavrik',
            slug: '/mavrik-at-home/games-for-the-mavrik',
          },
          items: [
            'mavrik-at-home/games-for-the-mavrik/using-your-bundle-game-keys',
            'mavrik-at-home/games-for-the-mavrik/tower-tag',
            'mavrik-at-home/games-for-the-mavrik/laser-limbo',
            'mavrik-at-home/games-for-the-mavrik/under-cover',
          ],
        },
        {
          type: 'category',
          label: 'Mavrik Troubleshooting',
          link: {
            type: 'generated-index',
            title: 'Mavrik Troubleshooting',
            slug: '/mavrik-at-home/mavrik-troubleshooting',
          },
          items: [
            'mavrik-at-home/mavrik-troubleshooting/troubleshooting-connection',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Mavrik Pro Enterprise',
      link: {
        type: 'generated-index',
        title: 'Mavrik Pro Enterprise',
        description: 'Enterprise setup, architecture, SDK, and troubleshooting articles for Mavrik-Pro.',
        slug: '/mavrik-pro-enterprise',
      },
      items: [
        {
          type: 'category',
          label: 'Mavrik-Pro Setup',
          link: {
            type: 'generated-index',
            title: 'Mavrik-Pro Setup',
            slug: '/mavrik-pro-enterprise/mavrik-pro-setup',
          },
          items: [
            'mavrik-pro-enterprise/mavrik-pro-setup/mavrik-pro-quick-start-guide',
            'mavrik-pro-enterprise/mavrik-pro-setup/tracker-mount-installation',
            'mavrik-pro-enterprise/mavrik-pro-setup/demo-mode',
          ],
        },
        {
          type: 'category',
          label: 'Mavrik-Pro General Information',
          link: {
            type: 'generated-index',
            title: 'Mavrik-Pro General Information',
            slug: '/mavrik-pro-enterprise/mavrik-pro-general-information',
          },
          items: [
            'mavrik-pro-enterprise/mavrik-pro-general-information/what-is-the-mavrik-pro',
            'mavrik-pro-enterprise/mavrik-pro-general-information/system-architecture',
            'mavrik-pro-enterprise/mavrik-pro-general-information/best-usage',
            'mavrik-pro-enterprise/mavrik-pro-general-information/limited-warranty-repair-policy',
          ],
        },
        {
          type: 'category',
          label: 'Mavrik-Pro Developer Tools & SDKs',
          link: {
            type: 'generated-index',
            title: 'Mavrik-Pro Developer Tools & SDKs',
            slug: '/mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks',
          },
          items: [
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/developer-setup-guide',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/mavrik-manager',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/strikerlink-runtime',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/install-unity-package',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/xr-development-in-unity',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/unreal-engine-sdk',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/designing-haptic-effects-in-unity',
            'mavrik-pro-enterprise/mavrik-pro-developer-tools-sdks/firmware',
          ],
        },
        {
          type: 'category',
          label: 'Mavrik-Pro Connection & Troubleshooting',
          link: {
            type: 'generated-index',
            title: 'Mavrik-Pro Connection & Troubleshooting',
            slug: '/mavrik-pro-enterprise/mavrik-pro-connection-troubleshooting',
          },
          items: [
            'mavrik-pro-enterprise/mavrik-pro-connection-troubleshooting/bluetooth-pairing-connection-troubleshooting',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
