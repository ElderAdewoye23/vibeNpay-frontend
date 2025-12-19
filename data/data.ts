import facebook from "../public/facebook.png"
import X from "../public/X.png";
import insta from "../public/instagram.png"
export type Post = {
  id: number;
  username: string;
  timeAgo: string;
  image?: string;
  content: string;
  category: string;
  createdAt: string;
  stats: { likes: number; comments: number; shares: number;  isLiked?:boolean; };
  userStats: {
    isMonetized: boolean;
    earningRate?: string;
    followers?: string;
   
  };
};
 export const buttons = [
    {
      label: "Join as Creator",
      href: "/sign-up",
      variant: "default",
      className: "bg-brand p-7 rounded-lg text-white"
    },
    {
      label: "Join as Brand", 
      href: "#",
      variant: "outline",
      className: "p-7 rounded-lg text-brand border-2 border-brand"
    },
    {
      label: "Download App",
      href: "#",
      variant: "outline",
      className: "p-7 rounded-lg border-2 border-gray-300 text-gray-800"
    }
  ] as const

  export const features = [
    {
      title: "No Investment Access",
      description: "Creators can't grow their wealth through investments and often lack tools to manage their finances.",
      icon: "📈"
    },
    {
      title: "Unfair Monetization",
      description: "Limited earning opportunities and low payouts from traditional platforms mean your hard work doesn't pay enough.",
      icon: "💸"
    },
    {
      title: "Payment Barriers",
      description: "High fees, delayed payments, and limited withdrawal options make it hard to access your earnings globally.",
      icon: "🚫"
    }
  ]

  export const creatorSteps = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create account & verify profile",
    icon: "👤"
  },
  {
    step: 2,
    title: "Post Content",
    description: "Share your creative videos",
    icon: "📹"
  },
  {
    step: 3,
    title: "Grow Followers",
    description: "Reach 1,000 followers",
    icon: "👥"
  },
  {
    step: 4,
    title: "Start Earning",
    description: "Get paid per 1,000 views",
    icon: "💰"
  },
  {
    step: 5,
    title: "Invest & Grow",
    description: "Invest earnings in crypto",
    icon: "📈"
  }
]

export const pricingPlans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "₦0",
    billing: "Forever free",
    features: [
      "Create & post content",
      "Send & receive money", 
      "Limited monetization"
    ],
    cta: "Get Started",
    popular: false,
    href: "/sign-up"
  },
  {
    name: "Creator Plus",
    description: "For active creators", 
    price: "₦5,000",
    billing: "per month",
    features: [
      "Full monetization access",
      "Ad bonuses & live gifts",
      "Investment tools unlocked",
      "Priority support"
    ],
    cta: "Subscribe Now",
    popular: true,
    styled: true,
    href: "/sign-up"
  },
  {
    name: "Pro Plan",
    description: "Maximum benefits",
    price: "₦15,000", 
    billing: "per month",
    features: [
      "Everything in Plus",
      "Verified creator badge",
      "Premium analytics", 
      "1-on-1 dedicated support"
    ],
    cta: "Coming Soon",
    popular: false,
    comingSoon: true,
     href: "#"
  }
]

export const faqItems = [
  {
    id: "item-1",
    question: "How do I get started on VibenPay?",
    answer:
      "Sign up with your email, verify your profile, and you're ready to create content and transact. Verification typically takes 5-10 minutes.",
  },
  {
    id: "item-2",
    question: "When do I start earning money?",
    answer: "You can post content immediately, but monetization starts once you reach 1,000 followers. After that, you earn$4per 1,000 views on your content.",
  },
  {
    id: "item-3",
    question: "What payment methods do you support?",
    answer:
      "We support bank transfers, mobile money, and crypto withdrawals. Withdrawals are processed instantly with low fees.",
  },
  {
    id: "item-4",
    question: "Is it safe to buy crypto on VibenPay?",
    answer: "Yes, we use bank-grade security with two-factor authentication, encrypted wallets, and comply with financial regulations.",
  },
  {
    id: "item-5",
    question: "Can I transfer money internationally?",
    answer: "Absolutely. VibenPay enables borderless transactions. Send money to over 150 countries with instant settlement and competitive rates.",
  },
  {
    id: "item-6",
    question: "What's included in the Creator Plus plan?",
    answer: "Full monetization access, ad bonuses, live gift features, investment tools, and priority customer support.",
  }
];

export const socialLinks = [
    { image: facebook, label: "Facebook" },
    { image: X, label: "Twitter" },
    { image: insta, label: "Instagram" }
  ]


  export const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" }
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Contact", href: "#contact" }
    ]
  }

  // Explore Sample Data
 export const posts: Record<string, Post[]> = {
  trending: [
    {
      id: 1,
      username: 'Sarah Williams',
      timeAgo: '2 hours ago',
      image:"/elder.JPG",
      content: 'Breaking: New creator payout system just launched! 30% increase for verified creators. ',
      category: 'trending',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 5600, comments: 892, shares: 1200, isLiked: false },
      userStats: {
        isMonetized: true,
        earningRate: '₦750 per 1,000 views',
        followers: '15.2k followers'
      }
    },
    {
      id: 2,
      username: 'Tech News Daily',
      timeAgo: '1 hour ago',
      content: 'Vibenpay introduces AI-powered content suggestions! Creators seeing 40% more engagement.',
      category: 'trending',
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 4200, comments: 650, shares: 900, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦680 per 1,000 views',
        followers: '22.5k followers'
      }
    }
  ],
  entertainment: [
    {
      id: 3,
      username: 'MovieBuff Pro',
      timeAgo: '1 day ago',
      content: 'Just reviewed the latest blockbuster! Check out my spoiler-free review on the platform. 🎬',
      category: 'entertainment',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 3200, comments: 450, shares: 210, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦450 per 1,000 views',
        followers: '8.7k followers'
      }
    },
    {
      id: 4,
      username: 'Celebrity Watch',
      timeAgo: '3 hours ago',
      content: 'Exclusive interview with top creator Alex Johnson coming tomorrow! Set your reminders. 🎥',
      category: 'entertainment',
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 1800, comments: 320, shares: 150, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦380 per 1,000 views',
        followers: '6.3k followers'
      }
    }
  ],
  anime: [
    {
      id: 5,
      username: 'Anime Fanatic',
      timeAgo: '5 hours ago',
      content: 'New anime season just dropped! Which series are you most excited for? Share below! ✨',
      category: 'anime',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 8900, comments: 1200, shares: 450, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦1,200 per 1,000 views',
        followers: '42.5k followers'
      }
    },
    {
      id: 6,
      username: 'Cosplay Queen',
      timeAgo: '8 hours ago',
      content: 'Just finished my latest cosplay! Full video tutorial dropping this weekend. 🎭',
      category: 'anime',
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 5400, comments: 780, shares: 320, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦850 per 1,000 views',
        followers: '25.8k followers'
      }
    }
  ],
  crypto: [
    {
      id: 7,
      username: 'Crypto Analyst',
      timeAgo: '3 hours ago',
      content: 'Market analysis: This new token could 10x in the next quarter. Full report in my latest video.',
      category: 'crypto',
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 7500, comments: 980, shares: 650, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦900 per 1,000 views',
        followers: '28.3k followers'
      }
    },
    {
      id: 8,
      username: 'Web3 Educator',
      timeAgo: '6 hours ago',
      content: 'Just published a beginner\'s guide to decentralized finance. Perfect for those new to crypto!',
      category: 'crypto',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 4100, comments: 520, shares: 380, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦620 per 1,000 views',
        followers: '18.9k followers'
      }
    }
  ],
  finance: [
    {
      id: 9,
      username: 'Financial Freedom',
      timeAgo: '6 hours ago',
      content: 'Just published a comprehensive guide to web3 development. Perfect for beginners! 📚',
      category: 'finance',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 3100, comments: 340, shares: 890, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦380 per 1,000 views',
        followers: '12.1k followers'
      }
    },
    {
      id: 10,
      username: 'Investment Guru',
      timeAgo: '12 hours ago',
      content: 'How I turned ₦50,000 into ₦500,000 in 6 months through creator investments. Case study thread below.',
      category: 'finance',
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      stats: { likes: 6800, comments: 890, shares: 1200, isLiked: false  },
      userStats: {
        isMonetized: true,
        earningRate: '₦1,100 per 1,000 views',
        followers: '35.7k followers'
      }
    }
  ]
};

export const categories = [
  'trending',
  'entertainment', 
  'anime',
  'crypto',
  'finance'
] as const;

export const DashboardFAQItems = [
  {
    question: "How do I send money to another person?",
    answer: "Navigate to Finance > Send Money, enter the recipient's email or phone number, amount, and confirm the transaction. Funds are transferred instantly..",
  },
  {
    question: "What are the transaction fees?",
    answer: "Domestic transfers: Free for Vibenpay users. International transfers: 1.5% + $2. Crypto trades: 0.5% trading fee.",
  },
  {
    question:"Is my money secure on Vibenpay?",
    answer: "Yes, we use bank-level encryption (256-bit SSL) and store funds in segregated accounts with licensed financial institutions."
  },
  {
    question: "How do I buy cryptocurrency?",
    answer: "Go to Crypto section, select the asset you want, click Buy, enter amount, and confirm. Purchases settle within 2 minutes.",
  },
  {
    question:"Can I withdraw my funds anytime?",
    answer: "Yes, you can withdraw to your linked bank account anytime. Withdrawals typically process within 1-3 business days.",
  }
]