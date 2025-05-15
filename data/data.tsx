import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import Munyui from '@/public/assets/edu.jpg'
import Omar from '@/public/assets/ibra.jpg'
import Lujan from '@/public/assets/odera.jpg'
import Dante from '@/public/assets/dante.jpg'
import Scoffie from '@/public/assets/levis.jpg'
import faiza from '@/public/assets/faiza.jpg'
import ras from '@/public/assets/ras.jpg'
import abdi from '@/public/assets/yahya.jpg'


/* -------------------------------------------------------------------------- */
/*  programs.ts                                                               */
/* -------------------------------------------------------------------------- */
export const programs = [
  {
    slug: 'web3-mashinani',
    title: 'Web3 Mashinani',
    blurb:
      'Grass-roots onboarding that equips Kenyan youth with hands-on Web3 skills through live workshops, mentorship, and hackathons.',
    href: 'https://web3-mashinani.xyz',
    image: '/assets/mash.jpg', // optional artwork
  },
  {
    slug: 'dune-masterclass',
    title: 'Dune MasterClass',
    blurb:
      'Intensive cohort that turns crypto-curious analysts into on-chain data pros using SQL, Dune, and live dashboards.',
    href: '#', // update when public
    image: '/assets/dune.jpg',
  },
]

export const pillars = [
  {
    title: 'End-to-End Advisory',
    body:
      'Tokenomics, protocol architecture, audits, and go-to-market guidance—' +
      'so projects launch faster and stronger.',
  },
  {
    title: 'Research & Insights',
    body:
      'Data-driven market intelligence and protocol deep dives that inform ' +
      'investors, founders, and policymakers.',
  },
  {
    title: 'Workforce Upskilling',
    body:
      'Cohort-based programs, bootcamps, and institutional workshops that ' +
      'turn curiosity into deployable skill.',
  },
  {
    title: 'Ecosystem Impact',
    body:
      'Partnerships and community initiatives that expand opportunity and ' +
      'create sustainable Web3 jobs across the continent.',
  },
]
export const primaryFeatures = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
];

export const secondaryFeatures = [
  {
    name: 'Introduce',
    description:
      'Bring Web3 tools, knowledge, and opportunities directly to grassroots communities, bridging the digital divide.',
    featureNumber: '1',
  },
  {
    name: 'Educate',
    description:
      'Offer hands-on training, mentorship, and real-world insights to spark blockchain literacy and local innovation.',
    featureNumber: '2',
  },
  {
    name: 'Empower',
    description:
      'Foster a community-driven environment where youth can build projects, collaborate, and drive meaningful impact.',
    featureNumber: '3',
  },
];
export const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
};


export const footerNavigation = {
  navigate: [
    { name: 'Home', href: '#' },
    { name: 'Our Mission', href: '#' },
    { name: 'What we do', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Contact us', href: '#' },
  ],
  support: [
    { name: "FAQ's", href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Security', href: '#' },
  ],
  partner: [
    { name: 'Our Partners', href: '#' },
    { name: 'Subscriber', href: '#' },
  ],
  contacts: [
    { name: 'info@web3-mashinani.xyz', href: '#' },
  
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/web3mashinani',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/web3mashinani',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://x.com/web3mashinani',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '',
      icon: (props: any) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

export const people = [
  
  {
    name: 'Ibrahim Aziz',
    role: 'Co-Founder, Developer Path',
    imageUrl: Omar,
    twitterUrl: 'https://x.com/ibraziz21',
    linkedinUrl:
      'https://www.linkedin.com/in/ibraziz21',
  },
  {
    name: 'Edwin Munyui',
    role: 'Co-Founder, Research Path',
    imageUrl: Munyui,
    twitterUrl: 'https://twitter.com/gachaja',
    linkedinUrl:
      'https://www.linkedin.com/in/edwin-munyui-bbb964a'
  },
  {
    name: 'Lujan Odera',
    role: 'Co-Founder, Education',
    imageUrl: Lujan,
    twitterUrl: 'https://x.com/lujanodera',
    linkedinUrl:
      'https://www.linkedin.com/in/',
  },
  {
    name: 'Levis Miriti',
    role: 'Co-Founder, Data Analytics',
    imageUrl: Scoffie,
    twitterUrl: 'https://x.com/iithundio',
    linkedinUrl:
      'https://www.linkedin.com/in/',
  }
];

export const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];
