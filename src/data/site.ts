/**
 * Central source of truth for business info, navigation, and services.
 * Edit values here once and every page / schema stays in sync.
 */

export const business = {
  name: 'Obscura Lawn Care',
  legalName: 'Obscura Lawn Care LLC',
  tagline: 'Beautiful Lawns. Built with Care.',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'hello@obscuralawncare.com',
  emailHref: 'mailto:hello@obscuralawncare.com',
  address: {
    street: '1420 Greenfield Avenue',
    city: 'Raleigh',
    region: 'NC',
    postalCode: '27601',
    country: 'US',
  },
  geo: { lat: 35.7796, lng: -78.6382 },
  url: 'https://www.obscuralawncare.com',
  priceRange: '$$',
  founded: '2009',
  serviceArea: ['Raleigh', 'Durham', 'Cary', 'Chapel Hill', 'Apex', 'Wake Forest'],
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '16:00' },
  ],
  social: {
    facebook: 'https://facebook.com/obscuralawncare',
    instagram: 'https://instagram.com/obscuralawncare',
    youtube: 'https://youtube.com/@obscuralawncare',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Lawn Mowing', href: '/services/lawn-mowing' },
      { label: 'Landscaping', href: '/services/landscaping' },
      { label: 'Fertilization', href: '/services/fertilization' },
      { label: 'Seasonal Cleanups', href: '/services/seasonal-cleanups' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: 'mower' | 'landscape' | 'fertilize' | 'leaf';
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: 'lawn-mowing',
    title: 'Lawn Mowing',
    short: 'Precision mowing for a clean, healthy lawn.',
    description:
      'Crisp, striped, perfectly-edged cuts on a schedule that keeps your turf dense and weed-resistant all season long.',
    icon: 'mower',
    image:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
    priceFrom: '$45',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    short: 'Custom designs that elevate your property.',
    description:
      'Full-scale design and installation — beds, borders, native plantings, and hardscape that transform curb appeal.',
    icon: 'landscape',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    priceFrom: '$1,200',
  },
  {
    slug: 'fertilization',
    title: 'Fertilization',
    short: 'Nourishing your lawn for year-round health.',
    description:
      'Soil-tested, season-tuned fertilization and weed control programs engineered for thick, deep-green turf.',
    icon: 'fertilize',
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
    priceFrom: '$65',
  },
  {
    slug: 'seasonal-cleanups',
    title: 'Seasonal Cleanups',
    short: 'Keep your yard looking its best every season.',
    description:
      'Spring prep and fall leaf removal that clear debris, protect your turf, and reset your landscape for what comes next.',
    icon: 'leaf',
    image:
      'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=1200&q=80',
    priceFrom: '$120',
  },
];

export const testimonials = [
  {
    quote:
      'Obscura Lawn Care is reliable, professional, and our yard has never looked better! The crew treats our property like their own.',
    name: 'James T.',
    role: 'Homeowner, Raleigh',
    rating: 5,
  },
  {
    quote:
      'They transformed a patchy, weed-choked lawn into the greenest on the block in a single season. Worth every penny.',
    name: 'Maria S.',
    role: 'Homeowner, Cary',
    rating: 5,
  },
  {
    quote:
      'We manage three commercial properties and Obscura is the only crew that shows up on time, every time. Flawless work.',
    name: 'Derek W.',
    role: 'Property Manager, Durham',
    rating: 5,
  },
  {
    quote:
      'The landscaping redesign completely changed our curb appeal. Neighbors keep asking who did the work.',
    name: 'Priya N.',
    role: 'Homeowner, Apex',
    rating: 5,
  },
];

export const stats = [
  { value: '15+', label: 'Years in business' },
  { value: '2,400+', label: 'Lawns serviced' },
  { value: '98%', label: 'Client retention' },
  { value: '4.9★', label: 'Average rating' },
];
