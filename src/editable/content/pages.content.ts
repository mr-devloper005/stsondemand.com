import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find local businesses, services, and verified listings',
      description: 'Search business listings, compare local services, and discover contact-ready company profiles.',
      openGraphTitle: 'Find local businesses and service providers',
      openGraphDescription: 'Browse a cleaner business directory with rich profiles, locations, categories, and contact details.',
      keywords: ['business listing', 'local business directory', 'business search', 'service providers'],
    },
    hero: {
      badge: 'Business discovery made simple',
      title: ['Find.', 'Compare.', 'Contact local businesses.'],
      description: 'Search trusted listings by service, city, or business name. Each profile is built to help customers act quickly and help owners get found online.',
      primaryCta: { label: 'Browse businesses', href: '/listing' },
      secondaryCta: { label: 'Add your business', href: '/create' },
      searchPlaceholder: 'Search plumbers, restaurants, agencies, clinics...',
      focusLabel: 'Directory',
      featureCardBadge: 'local visibility',
      featureCardTitle: 'Profiles with services, locations, photos, and clear contact actions.',
      featureCardDescription: 'The homepage brings active listings, categories, and business-owner actions into one focused directory experience.',
    },
    intro: {
      badge: 'Why this directory works',
      title: 'Built for customers who need answers and owners who need visibility.',
      paragraphs: [
        'Customers can search by service, location, or business name and move from discovery to contact without digging through clutter.',
        'Business owners can present contact details, service categories, descriptions, websites, photos, and profile information in a format made for local search.',
        'Every page is designed around practical directory behavior: browse, compare, verify, contact, and keep exploring related businesses.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Listing-first homepage with prominent search and category discovery.',
        'Compact business cards that highlight location, services, and contact signals.',
        'Detail pages with quick actions, photo galleries, maps, and related listings.',
        'Owner-focused create flow for submitting clean business profiles.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Add business', href: '/create' },
    },
    cta: {
      badge: 'Grow local reach',
      title: 'Put your business where customers are already searching.',
      description: 'Create a listing with the practical details people need before they call, visit, book, or request a quote.',
      primaryCta: { label: 'Add Business', href: '/create' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest listings in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'A cleaner way to find and evaluate local businesses.',
    description: `${slot4BrandConfig.siteName} is a business listing platform shaped around local discovery, owner visibility, and practical contact-ready profiles.`,
    paragraphs: [
      'We organize businesses by category, location, and service intent so customers can compare options without wrestling with messy pages or thin profiles.',
      'For owners, the platform creates a clearer place to explain what the business does, where it serves, how to get in touch, and why customers should choose it.',
      'The experience is intentionally compact and useful: search first, strong cards, rich detail pages, and direct actions for calling, visiting, or requesting support.',
    ],
    values: [
      {
        title: 'Search that respects intent',
        description: 'Visitors can look for a service, city, category, or company name and get a directory page that is easy to scan.',
      },
      {
        title: 'Profiles built for action',
        description: 'Each listing can surface the essentials: phone, website, address, description, categories, imagery, and business context.',
      },
      {
        title: 'Visibility for owners',
        description: 'Business owners get a simple route to create a stronger listing and keep discovery focused on real customer decisions.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a business listing?',
    description: 'Ask about adding a company, improving a profile, fixing contact details, claiming a listing, or building a stronger local category presence.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search business listings',
      description: 'Search businesses, services, categories, locations, and profile details across the directory.',
    },
    hero: {
      badge: 'Search the directory',
      title: 'Find the right business faster.',
      description: 'Search by service, category, city, company name, or customer need to narrow the directory into useful results.',
      placeholder: 'Search by business, service, city, or category',
    },
    resultsTitle: 'Latest business matches',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Business owner access',
      title: 'Login to add a business.',
      description: 'Use your account to create or update a business listing with contact details, service categories, photos, and a useful description.',
    },
    hero: {
      badge: 'Business listing workspace',
      title: 'Create a profile customers can act on.',
      description: 'Add the business name, category, website, featured image, summary, and service details. Keep it clear, local, and contact-ready.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Business listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Business owner login',
      title: 'Welcome back to your listing dashboard.',
      description: 'Login to continue creating business profiles, saving listing details, and managing directory submissions.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Create owner account',
      title: 'Create an account to add your business.',
      description: 'Set up access for submitting listings, claiming profile details, and keeping your business discoverable.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
