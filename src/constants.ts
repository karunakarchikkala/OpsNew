import { Service, BlogPost, NavItem } from './types';

export const COMPANY_NAME = 'TaskOps Solutions';
export const LOGO_URL = '/assets/logo.png';
export const WHATSAPP_NUMBER = '919949344353';
export const CONTACT_PHONES = ['+91 9949344353', '+91 7680002434'];
export const OFFICE_ADDRESS = 'Plot no 120, Southern Part, Ghatkesar, Hyderabad, TG 501301';
export const CONTACT_EMAIL = 'tasksopssolutionpvtltd@gmail.com';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom enterprise software solutions tailored to your business needs, from legacy modernization to cloud-native apps.',
    icon: 'Code2',
  },
  {
    id: 'biz-automation',
    title: 'Business Automation',
    description: 'Streamline your workflows and increase efficiency with our advanced AI-driven automation solutions.',
    icon: 'Cpu',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure management, migration, and optimization using AWS, Azure, and GCP.',
    icon: 'Cloud',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Results-driven marketing strategies including SEO, SEM, and social media management to grow your online presence.',
    icon: 'TrendingUp',
  },
  {
    id: 'cms-dev',
    title: 'CMS Development',
    description: 'Flexible and user-friendly Content Management Systems built on modern stacks for seamless content delivery.',
    icon: 'Layout',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Stunning, high-performance, and mobile-responsive websites designed to convert visitors into customers.',
    icon: 'Palette',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'benefits-of-business-automation',
    title: 'How Business Automation Can Scale Your Operation',
    excerpt: 'Discover why automation is the key to scaling modern businesses in a competitive landscape.',
    content: `
      ## The Power of Automation
      In today's fast-paced business environment, manual tasks can become a bottleneck to growth.
      Automation isn't just about replacing human effort; it's about shifting that effort to higher-value activities.

      ### Key Benefits:
      1. **Efficiency**: Reduce errors and speed up processing time.
      2. **Scalability**: Handle increased volume without linear cost increases.
      3. **Visibility**: Better data tracking and reporting.

      Contact TaskOps Solutions today to learn how we can automate your core processes.
    `,
    date: 'April 25, 2026',
    author: 'Tech Strategist',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['Automation', 'Efficiency', 'Scaling'],
  },
  {
    id: '2',
    slug: 'cloud-migration-guide-2026',
    title: '2026 Guide to Seamless Cloud Migration',
    excerpt: 'Mastering the move to the cloud with minimal downtime and maximum security.',
    content: `
      ## Moving to the Cloud
      Cloud migration is a journey, not a destination. Whether you're moving to AWS, Azure, or GCP, the strategy remains constant.

      ### Why Migrate?
      - **Cost Optimization**: Pay for what you use.
      - **Disaster Recovery**: Built-in redundancy.
      - **Agility**: Deployment in minutes, not days.

      TaskOps Solutions specializes in Zero-Downtime migrations.
    `,
    date: 'April 20, 2026',
    author: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    tags: ['Cloud', 'AWS', 'Security'],
  },
  {
    id: '3',
    slug: 'seo-trends-modern-web',
    title: 'SEO Trends to Watch in the Age of AI',
    excerpt: 'How to rank higher in 2026 as search engines evolve with generative AI technology.',
    content: `
      ## SEO in 2026
      The SEO landscape has shifted dramatically. It's no longer just about keywords; it's about semantic relevance and user intent.

      ### Winning Strategies:
      - **Content Quality**: AI can help, but human expertise wins.
      - **Site Performance**: Core Web Vitals are more critical than ever.
      - **Engagement**: Search engines track how users interact with your content.

      Our digital marketing team at TaskOps Solutions keeps you ahead of the curve.
    `,
    date: 'April 15, 2026',
    author: 'SEO Expert',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
    tags: ['SEO', 'Marketing', 'AI'],
  },
];
