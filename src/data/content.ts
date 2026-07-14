export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  italicizedWord: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: {
    satisfaction: string;
    starsText: string;
    clientsCount: string;
  };
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: "branding" | "website" | "marketing" | "social" | "strategy" | "content";
  details: string;
}

export interface CultureContent {
  badge: string;
  title: string;
  paragraphs: string[];
  image: string;
}

export interface QuoteItem {
  quote: string;
  author: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  image: string;
  categories: string[];
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "CULTURE", href: "/#culture" },
  { label: "CONTACT", href: "/contact" },
];

export const HERO_CONTENT: HeroContent = {
  badge: "WE CAN HELP YOU",
  title: "Unlock with our all-in-one platform for Urban Creativity and Digital Innovation.",
  italicizedWord: "growth",
  description: "We aren't your average, run-of-the-mill website designer—our services pack a serious punch. We are Digital agency for websites that achieve goals.",
  primaryCta: { label: "GET STARTED", href: "#contact" },
  secondaryCta: { label: "LEARN MORE", href: "#services" },
  stats: {
    satisfaction: "90% Satisfaction Rate",
    starsText: "5 Stars\nRead Our Success Stories",
    clientsCount: "1.5k Happy Clients",
  },
  image: "/images/hero-vr.png",
};

export const SERVICES_CONTENT: { sectionBadge: string; sectionTitle: string; sectionDescription: string; items: ServiceItem[] } = {
  sectionBadge: "OUR SERVICE",
  sectionTitle: "We offer the best services for our customer",
  sectionDescription: "Welcome to Maverick Creative Group, the premier urban creative agency that empowers and innovates the culture to new heights. Our culture-driven solutions elevate your brand's presence with impactful campaigns. Utilizing innovative marketing and storytelling, we take your brand to the next level. Step into a world of creative possibilities with us. Learn more about our approach and how we can help your brand thrive.",
  items: [
    {
      id: "branding",
      title: "Branding",
      badge: "IDENTITY DESIGN",
      description: "Creative branding solutions that craft a unique identity, aligning perfectly with your voice.",
      iconName: "branding",
      details: "We build iconic brands. Through rigorous research, visual mapping, and strategic positioning, we help urban brands build visual systems that leave an indelible mark on their audience."
    },
    {
      id: "website",
      title: "Website",
      badge: "DEVELOPMENT",
      description: "Modern, responsive, and performance-optimized websites built using cutting-edge frameworks.",
      iconName: "website",
      details: "Our web development department builds lighting-fast websites optimized for conversion, SEO, and visual excellence, ensuring your agency stands out from the competition."
    },
    {
      id: "marketing",
      title: "Marketing",
      badge: "ACQUISITION & OUTREACH",
      description: "Culture-driven campaigns that resonate with today's audience, driving acquisition.",
      iconName: "marketing",
      details: "We deploy targeted culture-first marketing strategies to connect your products directly with the communities that need them, optimizing digital advertising, SEO, and organic reach."
    },
    {
      id: "social-media",
      title: "Social Media",
      badge: "COMMUNITY ENGAGEMENT",
      description: "Dynamic content strategies and engagement plans that build lasting relationships.",
      iconName: "social",
      details: "Social media is the heartbeat of modern communities. We design viral social strategies, manage visual assets, and foster deep community dialogue around your brand."
    },
    {
      id: "strategy",
      title: "Strategy",
      badge: "DIGITAL INNOVATION",
      description: "Data-backed insights and roadmaps designed to scale your business and optimize operations.",
      iconName: "strategy",
      details: "We align creative thinking with analytics. Our digital roadmaps help business owners navigate digital changes, choose the right tech stack, and grow sustainably."
    },
    {
      id: "content",
      title: "Content",
      badge: "STORYTELLING",
      description: "High-impact storytelling, copywriting, and media assets that capture attention.",
      iconName: "content",
      details: "From crisp copywriting to video assets and photography, we produce content that speaks authentic cultural languages and inspires direct user action."
    }
  ]
};

export const CULTURE_CONTENT: CultureContent = {
  badge: "CULTURE DRIVEN MARKETING",
  title: "Culture Driven Marketing",
  paragraphs: [
    "At Maverick Creative Group, we recognize that resonating with today's culture is paramount to delivering effective solutions. We approach each challenge with a cultural lens, taking the time to understand the unique experiences, values, and beliefs of our audience and integrating them into our creative solutions. By doing so, we can connect with our clients' target audiences in a meaningful way, driving impact and results.",
    "Maverick's team is committed to creating solutions that inspire and engage the communities we serve, whether it's a social media campaign or a new product design. In today's fast-paced world, culture-driven creativity is essential for success. Discover more about our approach and how we can help your brand thrive."
  ],
  image: "/images/culture-notes.png",
};

export const QUOTE_CONTENT: QuoteItem = {
  quote: "Never Be Limited By Others People's Limited Imaginations.",
  author: "Dr. Mae Jemison",
  image: "/images/photo31x.png",
};

export const PORTFOLIO_CONTENT: { sectionTitle: string; sectionDescription: string; items: CaseStudy[] } = {
  sectionTitle: "Explore our success stories",
  sectionDescription: "Explore the success stories of Maverick Creative Group, the premier urban creative agency that empowers and innovates culture through our culture-driven solutions. Be inspired by our range of case studies and see how we overcome challenges to deliver effective solutions that elevate our clients' brands in the marketplace. Experience the power of our urban creative approach and begin a transformational journey for your brand. Discover how we can help your brand reach your goals.",
  items: [
    {
      id: "medcheck",
      title: "MEDCHECK HEALTH MEDICAL GROUP",
      image: "/images/MCG_Case-Study_Medcheck-health-medical-group-Banner2 1.png",
      categories: ["Branding", "Website", "Marketing", "Social Media", "Content", "Strategy"],
      link: "#medcheck"
    },
    {
      id: "edge-control",
      title: "EDGE CONTROL",
      image: "/images/MCG_Case-Study_Edge-Control-Banner-1 1.png",
      categories: ["Branding", "Website", "Marketing", "Social Media", "Content", "Strategy"],
      link: "#edge-control"
    },
    {
      id: "urban-sound",
      title: "URBAN SOUND AUDIO LABS",
      image: "/images/hero-vr.png",
      categories: ["Branding", "Website", "Marketing", "Strategy"],
      link: "#urban-sound"
    }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Pavel Solomin",
    role: "Founder Net ABC",
    avatar: "/images/case-medcheck.png",
    quote: "This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful to Maverick. Highly recommend!"
  },
  {
    id: "t2",
    name: "Pavel Solomin",
    role: "Founder Net ABC",
    avatar: "/images/case-edgecontrol.png",
    quote: "This is my first time working with a marketing company and I had a fantastic experience. Business is doing better than ever and I am very grateful for Maverick. Highly recommend!"
  }
];
