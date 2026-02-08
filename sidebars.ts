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
        'mobile/navigation',
        'mobile/scheduling',
        'mobile/flight-ops',
        'mobile/comms',
        'mobile/profile-security',
      ],
    },
    {
      type: 'category',
      label: 'Web App',
      items: [
        'web/overview',
        'web/scheduling',
        'web/flights',
        'web/aircraft',
        'web/squawks',
        'web/profile-documents',
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      items: [
        'admin/overview',
        'admin/reservations',
        'admin/aircraft',
        'admin/maintenance',
        'admin/flight-log-entry',
        'admin/users-membership',
        'admin/messaging',
        'admin/reports',
        'admin/billing',
        'admin/club-management',
        'admin/create-club',
      ],
    },
    'documentation-backlog',
    'screenshots-checklist',
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
