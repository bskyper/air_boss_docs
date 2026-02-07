import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/signup',
        'getting-started/join-club',
      ],
    },
    {
      type: 'category',
      label: 'Mobile App',
      items: [
        'mobile/overview',
        'mobile/scheduling',
      ],
    },
    {
      type: 'category',
      label: 'Web App',
      items: [
        'web/overview',
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      items: [
        'admin/overview',
        'admin/create-club',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/index',
      ],
    },
  ],
};

export default sidebars;
