/**
 * Central content for the Boys To Men Retreat site.
 * Copy is carried over verbatim from boystomenretreat.com (first-pass redesign).
 */

export const site = {
  name: "Boys To Men Retreat",
  shortName: "Boys To Men",
  tagline: "Guiding young men through challenge, adventure and self-discovery",
  location: "Ericeira, Portugal",
  phone: "+34600235207",
  whatsapp: "https://wa.me/34600235207",
  instagram: "https://www.instagram.com/boystomenretreat",
  instagramHandle: "@boystomenretreat",
  year: 2026,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Why", href: "/#why" },
  { label: "Included", href: "/#included" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Team", href: "/#team" },
  { label: "Apply", href: "/#apply" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  badge: "Flexible dates available",
  title: "Boys To Men Retreat",
  subtitle: site.tagline,
  primaryCta: { label: "Book a place", href: "/#contact" },
  secondaryCta: { label: "Why it exists", href: "/#why" },
  stats: [
    { value: "4 days", label: "4 nights" },
    { value: "9–16", label: "years old" },
    { value: "Ericeira", label: "Portugal" },
    { value: "700 €", label: "all inclusive" },
  ],
};

export const why = {
  heading: "Why does this retreat exist",
  lead: "Today's boys are growing up without a rite of passage.",
  paragraphs: [
    "Modern boys face a world of endless screens, pressure and distraction — and far too few moments that ask something real of them.",
    "Most boys don't need another lecture. They need challenge. They need guidance. They need strong male role models. And they need to feel part of something real.",
    "This experience is designed to help boys reconnect to who they are — rather than conforming to external expectations.",
  ],
  ageGroups: [
    { range: "9 – 13", label: "Younger group" },
    { range: "13 – 16", label: "Older group" },
  ],
  closing:
    "I'm not promising to “fix” your son in four days. But we are creating an experience he'll remember for the rest of his life — one that plants the kind of seeds that grow into a strong, grounded, capable young man.",
};

export const outcomes = {
  heading: "What the boys take home",
  subheading: "Real skills and values that outlast the four days.",
  items: [
    { title: "Self-respect & discipline", description: "A foundation of self-worth built through showing up and following through." },
    { title: "Confidence without arrogance", description: "Quiet, grounded belief in themselves earned through real challenge." },
    { title: "Managing pressure & emotion", description: "Tools to stay calm, focused and in control when things get hard." },
    { title: "Brotherhood & responsibility", description: "Looking out for one another and owning their part in the group." },
    { title: "Courage", description: "Stepping beyond their comfort zone and discovering what they're capable of." },
    { title: "Healthy masculinity", description: "Understanding what it means to be a strong, kind and dependable young man." },
  ],
};

export const included = {
  heading: "What's included",
  subheading: "Everything is taken care of — accommodation, meals, coaching and the experiences in between.",
  items: [
    {
      title: "Accommodation",
      description: "Villa in a great location, directly in front of the pointbreak in Ericeira.",
      emoji: "🏡",
    },
    {
      title: "Surfing",
      description: "We guarantee you'll learn how to surf the most perfect waves in Ericeira with experienced instructors.",
      emoji: "🌊",
    },
    {
      title: "Skateboarding",
      description: "Progress at your own pace, learn to fall, get back up, and keep going.",
      emoji: "🛹",
    },
    {
      title: "Beach challenge",
      description: "Team obstacle races, sand carries, sprint races and coordination tasks that build brotherhood.",
      emoji: "🏖️",
    },
    {
      title: "Cold plunge",
      description: "Guided cold water exposure sessions designed to build resilience, confidence, focus and emotional control.",
      emoji: "❄️",
    },
    {
      title: "Campfire",
      description: "Evenings around the fire talking discipline, respect, self-belief, responsibility and overcoming fears — through conversation, stories and shared laughter.",
      emoji: "🔥",
    },
    {
      title: "Meals",
      description: "Breakfast, lunch & dinner. Cooking and eating together become moments of connection, teamwork and shared responsibility.",
      emoji: "🍽️",
    },
    {
      title: "Photo & video",
      description: "We capture photos and videos for the boys to take back home.",
      emoji: "📸",
    },
  ],
};

export const schedule = {
  heading: "A day at the retreat",
  subheading: "A rhythm of movement, challenge, connection and reflection.",
  items: [
    { time: "Morning", title: "Wake up & morning movement", description: "Start the day with intention and a clear head." },
    { time: "Morning", title: "Workout", description: "Build strength, discipline and energy together." },
    { time: "Morning", title: "Breakfast together", description: "Fuel up and share the plan for the day." },
    { time: "Midday", title: "Surf & skate lesson", description: "Coaching in the water and on the board." },
    { time: "Afternoon", title: "Beach challenges & games", description: "Team races, obstacles and coordination tasks." },
    { time: "Evening", title: "Cook & eat dinner together", description: "Shared responsibility and connection over food." },
    { time: "Evening", title: "Silent walk & journaling", description: "Time to reflect on the day in their own words." },
    { time: "Night", title: "Bonfire circle", description: "Stories, values and laughter around the fire." },
  ],
};

export const gallery = {
  heading: "Moments from the retreat",
  subheading: "Surf, skate, sand and brotherhood on the coast of Ericeira.",
  // Placeholder tiles until brand photography is supplied.
  tiles: [
    { label: "Surfing the pointbreak", tone: "ocean" },
    { label: "Skate sessions", tone: "sand" },
    { label: "Beach challenges", tone: "ocean" },
    { label: "Cold plunge", tone: "deep" },
    { label: "Campfire circle", tone: "sand" },
    { label: "Morning movement", tone: "ocean" },
    { label: "Cooking together", tone: "deep" },
    { label: "Brotherhood", tone: "sand" },
  ] as { label: string; tone: "ocean" | "sand" | "deep" }[],
};

export const pricing = {
  heading: "Join the next retreat",
  price: "700 €",
  duration: "4 days / 4 nights",
  note: "Flexible dates available — get in touch to find the right week.",
  includes: [
    "Accommodation in the villa",
    "Breakfast, lunch & dinner",
    "Surf lessons with Blue Ocean Surf School",
    "Skate coaching with Skateschool 36",
    "Beach challenges & cold plunge sessions",
    "Campfire circles & journaling",
    "Photos & videos to take home",
  ],
  cta: { label: "Reserve a place", href: "/#contact" },
};

export const team = {
  heading: "Meet the team",
  subheading:
    "We believe young men don't just need instruction — they need presence, guidance and strong role models. Our team is here to create an environment of trust, challenge, brotherhood and growth.",
  members: [
    {
      name: "Maxim Rettich",
      role: "Founder & Host",
      bio: "54 years old and Dutch by birth, fluent in English and Spanish, and a certified breathwork facilitator. A father of two — a 9-year-old son and a 13-year-old daughter — based in Ericeira, Portugal. His life journey has taken him across the world, shaped by a deep passion for sports, personal growth and the pursuit of something more meaningful.",
      initials: "MR",
    },
    {
      name: "Rafa",
      role: "Skateschool 36 Ericeira — Coach",
      bio: "Years of skateboarding experience. \"I love helping people build confidence on their boards, learn new skills, and most importantly, have fun.\"",
      initials: "R",
    },
    {
      name: "Blue Ocean Surf School",
      role: "Surf instruction — Ribeira d'Ilhas",
      bio: "Our school has taught thousands of students, and today we can assess and address bad techniques so students can improve and move forward in their surfing journey.",
      initials: "BO",
    },
  ],
};

export const contact = {
  heading: "Ready to take the next step?",
  subheading: "Reach out with any questions or to reserve a place. Dates are flexible — we'll help you find the right week.",
  whatsappLabel: "Message on WhatsApp",
  phoneLabel: site.phone,
  instagramLabel: site.instagramHandle,
};

/** Founder story — About page. */
export const about = {
  heading: "Message from the founder",
  intro:
    "Maxim has lived through both great successes and significant challenges — moments that tested him and ultimately defined who he is today.",
  sections: [
    {
      title: "A turning point",
      body: "A pivotal moment came when he survived a severe car accident, remaining submerged for eight minutes and spending ten days in a coma. It reshaped how he sees life and what truly matters.",
    },
    {
      title: "Becoming a father",
      body: "Another transformative experience was becoming a father. His son was born with gastroschisis and required four major surgeries immediately after birth. This profoundly influenced Maxim's perspective on resilience and what matters most — shaping both his parenting and his work with young people.",
    },
    {
      title: "How he works today",
      body: "Maxim operates from authentic values and purpose. As a certified breathwork facilitator, his work with youth brings together breathwork, surfing, skateboarding, beach challenges, cold immersion, bonfires and group discussions — all designed to encourage stepping beyond comfort zones, building self-assurance and fostering deeper self-awareness and connection.",
    },
  ],
  mission:
    "His intention is simple: to help them build confidence, emotional strength, and a clear sense of who they are — so they can face life with courage, resilience, and an open heart.",
};

/** Privacy policy — referenced from the footer. */
export const privacy = {
  heading: "Privacy Policy",
  updated: "Last updated: 2026",
  body: [
    "Boys To Men Retreat respects your privacy. This page explains, in plain terms, how we handle the information you share with us.",
    "Information you provide: When you contact us by phone, WhatsApp, Instagram or email to ask questions or book a place, we receive the details you choose to share — such as your name, contact details and information about the participant. We use this only to respond to you and to organise the retreat.",
    "How we use it: We use your information to communicate with you, arrange bookings, and ensure the safety and wellbeing of participants during the retreat. We do not sell your information to third parties.",
    "Photos & video: During the retreat we take photos and videos for participants to take home. If you would prefer your child not to appear in any shared imagery, let us know and we will respect that.",
    "Contact: For any questions about your privacy or to request changes or deletion of your information, please contact us using the details on our site.",
  ],
};
