import facebook from "../public/facebook.png"
import X from "../public/X.png";
import insta from "../public/instagram.png"


 export const buttons = [
    {
      label: "Join as Creator",
      href: "#",
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
    styled: true
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
    comingSoon: true
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