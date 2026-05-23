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
        'getting-started/invite-link',
      ],
    },
    {
      type: 'category',
      label: 'Mobile App',
      items: [
        'mobile/overview',
        'mobile/navigation',
        'mobile/scheduling',
        'mobile/instruction-booking',
        'mobile/reservation-lifecycle',
        'mobile/flight-ops',
        'mobile/flight-lifecycle',
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
        'web/instruction-booking',
        'web/flights',
        'web/aircraft',
        'web/squawks',
        'web/profile-documents',
        'web/notification-preferences',
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
        'admin/instructors',
        'admin/document-review',
        'admin/invitations',
        'admin/messaging',
        'admin/reports',
        'admin/billing',
        'admin/club-management',
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
