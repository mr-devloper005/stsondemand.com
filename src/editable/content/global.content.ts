import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Business listing platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: slot4BrandConfig.tagline || 'Business listing platform',
    primaryLinks: [
      { label: 'Businesses', href: '/listing' },
      { label: 'Search', href: '/search' },
      { label: 'Add Business', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Local businesses, services, and trusted contact details',
    description: `${slot4BrandConfig.siteName} helps customers discover business profiles, compare services, and contact local teams with less friction.`,
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business listings', href: '/listing' },
          { label: 'Search directory', href: '/search' },
          { label: 'Add business', href: '/create' },
          { label: 'Business profiles', href: '/profile' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean local discovery and business visibility.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
