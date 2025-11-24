


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