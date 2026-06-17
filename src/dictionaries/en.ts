import type { FormUi, Step } from "@/lib/application-form";

/**
 * English — the canonical dictionary. Its shape (`Dictionary = typeof en`) is the
 * contract every other locale must satisfy, so TypeScript fails the build if a
 * translation is missing a key. Copy is carried over verbatim from the original
 * English site; locale-invariant data (phone, socials) lives in `@/lib/site`.
 */
export const en = {
  meta: {
    tagline: "Guiding young men through challenge, adventure and self-discovery",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Why", href: "/#why" },
    { label: "Included", href: "/#included" },
    { label: "Team", href: "/#team" },
    { label: "Apply", href: "/#apply" },
    { label: "Contact", href: "/#contact" },
  ],

  header: {
    bookAPlace: "Book a place",
    openMenu: "Open menu",
    languageLabel: "Language",
  },

  hero: {
    badge: "Flexible dates available",
    title: "Boys To Men Retreat",
    subtitle: "Guiding young men through challenge, adventure and self-discovery",
    primaryCta: { label: "Book a place", href: "/#contact" },
    secondaryCta: { label: "Why it exists", href: "/#why" },
    stats: [
      { value: "4 days", label: "4 nights" },
      { value: "9–16", label: "years old" },
      { value: "Ericeira", label: "Portugal" },
      { value: "700 €", label: "all inclusive" },
    ],
  },

  why: {
    eyebrow: "The mission",
    heading: "Why does this retreat exist",
    lead: "Today's boys are growing up without a rite of passage.",
    paragraphs: [
      "Modern boys face a world of endless screens, pressure and distraction — and far too few moments that ask something real of them.",
      "Most boys don't need another lecture. They need challenge. They need guidance. They need strong male role models. And they need to feel part of something real.",
      "This experience is designed to help boys reconnect to who they are — rather than conforming to external expectations.",
    ],
    ageGroupsHeading: "Two age ranges",
    ageGroupsNote:
      "Nine to sixteen is a wide span, so in practice the boys are grouped into two age ranges. Challenges, coaching and conversations are pitched to suit where each group is at.",
    ageGroups: [
      { range: "9 – 13", label: "Younger group" },
      { range: "13 – 16", label: "Older group" },
    ],
    closing:
      "I'm not promising to “fix” your son in four days. But we are creating an experience he'll remember for the rest of his life — one that plants the kind of seeds that grow into a strong, grounded, capable young man.",
    imageAlt:
      "A coach standing with five boys holding their skateboards at the skatepark",
  },

  outcomes: {
    eyebrow: "The outcomes",
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
  },

  included: {
    eyebrow: "The experience",
    heading: "What's included",
    subheading: "Everything is taken care of — accommodation, meals, coaching and the experiences in between.",
    items: [
      { title: "Accommodation", description: "Villa in a great location, directly in front of the pointbreak in Ericeira.", emoji: "🏡" },
      { title: "Surfing", description: "We guarantee you'll learn how to surf the most perfect waves in Ericeira with experienced instructors.", emoji: "🌊" },
      { title: "Skateboarding", description: "Progress at your own pace, learn to fall, get back up, and keep going.", emoji: "🛹" },
      { title: "Beach challenge", description: "Team obstacle races, sand carries, sprint races and coordination tasks that build brotherhood.", emoji: "🏖️" },
      { title: "Cold plunge", description: "Guided cold water exposure sessions designed to build resilience, confidence, focus and emotional control.", emoji: "❄️" },
      { title: "Campfire", description: "Evenings around the fire talking discipline, respect, self-belief, responsibility and overcoming fears — through conversation, stories and shared laughter.", emoji: "🔥" },
      { title: "Meals", description: "Breakfast, lunch & dinner. Cooking and eating together become moments of connection, teamwork and shared responsibility.", emoji: "🍽️" },
      { title: "Photo & video", description: "We capture photos and videos for the boys to take back home.", emoji: "📸" },
    ],
  },

  gallery: {
    eyebrow: "On the coast",
    heading: "Moments from the retreat",
    subheading: "Surf, skate, sand and brotherhood on the coast of Ericeira.",
    tiles: [
      { src: "/img/skateboarder-air-bowl.jpg", label: "Catching air", alt: "A boy catches air on his skateboard above the bowl at the skatepark" },
      { src: "/img/boy-skateboarding-skatepark.jpg", label: "Skate sessions", alt: "A boy in helmet and pads popping a trick at the skatepark" },
      { src: "/img/coach-teaching-skatepark-ramp.jpg", label: "Coaching on the ramp", alt: "A coach guiding a boy dropping into the ramp while others watch" },
      { src: "/img/coach-high-five-skatepark.jpg", label: "Small wins, big high-fives", alt: "A coach high-fiving a smiling boy at the skatepark" },
      { src: "/img/kids-group-beach.jpg", label: "Brotherhood", alt: "Four boys carrying a friend together on the beach" },
      { src: "/img/boy-hiking-coastal-trail.jpg", label: "Coastal adventures", alt: "A boy hiking up a sandy coastal trail through green hills" },
      { src: "/img/boy-sandbag-beach-fitness.jpg", label: "Beach challenges", alt: "A boy carrying a heavy sandbag during a beach fitness challenge" },
      { src: "/img/boy-playing-beach-sand.jpg", label: "Play & sand", alt: "A boy playing and digging in the sand on the beach" },
      { src: "/img/boy-holding-longboard.jpg", label: "Ready to roll", alt: "A boy in skate pads smiling while holding a colourful longboard" },
    ],
  },

  pricing: {
    eyebrow: "Reserve your week",
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
  },

  team: {
    eyebrow: "The people",
    heading: "Meet the team",
    subheading:
      "We believe young men don't just need instruction — they need presence, guidance and strong role models. Our team is here to create an environment of trust, challenge, brotherhood and growth.",
    members: [
      {
        name: "Maxim Rettich",
        role: "Founder & Host",
        bio: "54 years old and Dutch by birth, fluent in English and Spanish, and a certified breathwork facilitator. A father of two — a 9-year-old son and a 13-year-old daughter — based in Ericeira, Portugal. His life journey has taken him across the world, shaped by a deep passion for sports, personal growth and the pursuit of something more meaningful.",
        initials: "MR",
        kind: "photo",
        image: "/img/max-richter.jpg",
        imageAlt: "Maxim Rettich, founder of Boys To Men Retreat, smiling outdoors in a cap",
      },
      {
        name: "Rafa",
        role: "Skateschool 36 Ericeira — Coach",
        bio: "Years of skateboarding experience. \"I love helping people build confidence on their boards, learn new skills, and most importantly, have fun.\"",
        initials: "R",
        kind: "photo",
        image: "/img/rafa.jpg",
        imageAlt: "Rafa, skate coach, riding the edge of a bowl on his skateboard",
      },
      {
        name: "Blue Ocean Surf School",
        role: "Surf instruction — Ribeira d'Ilhas",
        bio: "Our school has taught thousands of students, and today we can assess and address bad techniques so students can improve and move forward in their surfing journey.",
        initials: "BO",
        kind: "logo",
        image: "/img/blue-ocean.png",
        imageAlt: "Blue Ocean Ericeira Surf School logo",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Ready to take the next step?",
    subheading: "Reach out with any questions or to reserve a place. Dates are flexible — we'll help you find the right week.",
    whatsappLabel: "Message on WhatsApp",
    languageNote: "The retreat is held in English. Max also speaks German, Dutch and Spanish, so feel free to get in touch in whichever language suits you best.",
  },

  footer: {
    explore: "Explore",
    home: "Home",
    aboutFounder: "About the founder",
    included: "What's included",
    privacy: "Privacy Policy",
    getInTouch: "Get in touch",
  },

  about: {
    eyebrow: "About",
    heading: "Message from the founder",
    intro:
      "Maxim has lived through both great successes and significant challenges — moments that tested him and ultimately defined who he is today.",
    imageAlt: "Maxim Rettich, founder of Boys To Men Retreat, smiling outdoors in a cap",
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
    ctaLabel: "Join the next retreat",
  },

  privacy: {
    heading: "Privacy Policy",
    updated: "Last updated: 2026",
    body: [
      "Boys To Men Retreat respects your privacy. This page explains, in plain terms, how we handle the information you share with us.",
      "Information you provide: When you contact us by phone, WhatsApp, Instagram or email to ask questions or book a place, we receive the details you choose to share — such as your name, contact details and information about the participant. We use this only to respond to you and to organise the retreat.",
      "How we use it: We use your information to communicate with you, arrange bookings, and ensure the safety and wellbeing of participants during the retreat. We do not sell your information to third parties.",
      "Photos & video: During the retreat we take photos and videos for participants to take home. If you would prefer your child not to appear in any shared imagery, let us know and we will respect that.",
      "Contact: For any questions about your privacy or to request changes or deletion of your information, please contact us using the details on our site.",
    ],
  },

  application: {
    eyebrow: "Apply now",
    intro: {
      heading: "Let us answer your questions",
      subheading:
        "Trusting someone with your child raises real questions. Start the application below — it takes about 7 minutes, and it's an enquiry, not a commitment.",
    },
    steps: [
      {
        kind: "welcome",
        title: "Boys to Men Retreat Application",
        body: "Thank you for your interest in the Boys to Men Retreat in Ericeira, Portugal. We understand that trusting someone else with your child comes with important questions and concerns. This form is an application only and not a direct registration. There are two age groups: boys aged 9–13 and boys aged 13–16. Retreat dates are flexible for both age groups. If you would like to speak directly, you can call Maxim J Rettich for a one-to-one conversation at +34 600 235 207.",
        buttonLabel: "Start Application",
        meta: "Takes 7 minutes",
      },
      { kind: "question", id: "parentEmail", type: "email", title: "Parent or guardian email address", placeholder: "name@example.com", required: true },
      { kind: "question", id: "parentNames", type: "text", title: "Parent or guardian name(s)", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "countryTown", type: "text", title: "Country and town", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "occupation", type: "text", title: "Occupation", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "parentPhone", type: "tel", title: "Parent or guardian phone number", description: "Once booked, you will be added to a WhatsApp group.", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "familyStructure", type: "longtext", title: "What is the current family structure?", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "childName", type: "text", title: "Child's name", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "childAge", type: "number", title: "Child's age", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "childDescription", type: "longtext", title: "Describe your child in a few sentences", placeholder: "Type your answer here…", required: true },
      { kind: "question", id: "allergies", type: "longtext", title: "Allergies", placeholder: "Type your answer here…" },
      { kind: "question", id: "medication", type: "longtext", title: "Medication", description: "If applicable, please be as specific as possible. We will also discuss this in person in detail.", placeholder: "Type your answer here…" },
      { kind: "question", id: "emergencyContact", type: "tel", title: "Emergency contact number", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "photoConsent", type: "choice", title: "Do you allow us to use photos of your child on our website and Instagram page?", description: "We never use photos that show children in vulnerable or emotional moments.", options: ["Yes", "No"], required: true },
      {
        kind: "legal",
        id: "liabilityWaiver",
        title: "Liability waiver and assumption of risk",
        body: "I, the undersigned parent or legal guardian of the participant named above, understand that participation in the Boys to Men Retreat may include physical, emotional, recreational, outdoor, group, mentoring, fitness, and personal development activities that carry inherent risks, including but not limited to physical injury, emotional stress, accidents during transportation or activities, illness or medical emergencies, and outdoor or environmental hazards. I acknowledge that participation is voluntary and that my child is physically, mentally, and emotionally capable of participating in retreat activities. I knowingly and voluntarily assume all risks associated with participation in the retreat, whether known or unknown.",
      },
      {
        kind: "legal",
        id: "releaseOfLiability",
        title: "Release of liability",
        body: "To the fullest extent permitted by law, I hereby release, waive, discharge, and hold harmless Boys to Men Retreat, including its owners, organizers, coaches, mentors, volunteers, employees, contractors, affiliates, and representatives, from any and all claims, liabilities, demands, damages, losses, costs, or causes of action arising out of or related to participation in the retreat, including those resulting from ordinary negligence. This release applies to personal injury, property damage, emotional distress, illness, accidents, death, and any unforeseen incidents occurring during or related to the retreat.",
      },
      {
        kind: "legal",
        id: "medicalAuthorization",
        title: "Medical authorization",
        body: "I authorize retreat staff and organizers to obtain emergency medical treatment for my child if deemed necessary. I understand that every reasonable effort will be made to contact me in the event of an emergency. I accept full financial responsibility for any medical treatment, transportation, medication, or emergency services provided.",
      },
      { kind: "question", id: "dateSigned", type: "date", title: "Date signed", required: true },
    ] as Step[],
  },

  formUi: {
    ok: "OK",
    submit: "Submit application",
    sending: "Sending…",
    continueLabel: "Continue",
    pressEnter: "press",
    shiftEnter: "to make a line break",
    month: "Month",
    day: "Day",
    year: "Year",
    prevQuestion: "Previous question",
    nextQuestion: "Next question",
    required: "Please fill this in.",
    requiredChoice: "Please select an option.",
    invalidEmail: "Please enter a valid email address.",
    invalidAge: "Please enter a valid age.",
    invalidDate: "Please enter a complete date.",
    submitError:
      "Something went wrong sending your application. Please try again, or call Maxim on +34 600 235 207.",
    successTitle: "Thank you — your application is in.",
    successBody:
      "We'll review your details and be in touch soon. If you'd like to speak sooner, call Maxim on +34 600 235 207.",
  } satisfies FormUi,

  og: {
    homeTagline: "Surf · Skate Retreat",
    about: {
      eyebrow: "About",
      title: "Message from the founder",
      subtitle: "The story and intention behind the retreat.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      subtitle: "How we handle the information you share with us.",
    },
  },

  seo: {
    siteDescription:
      "A 4 day / 4 night retreat in Ericeira, Portugal guiding young men (9–16) through challenge, adventure and self-discovery — surfing, skateboarding, beach challenges, cold plunges and campfire circles.",
    about: {
      title: "About the founder",
      description:
        "A message from Maxim Rettich, founder of Boys To Men Retreat — his story, his values, and the intention behind the retreat.",
    },
    privacy: {
      title: "Privacy Policy",
      description: "How Boys To Men Retreat handles the information you share with us.",
    },
  },
};

/** The contract every locale dictionary must satisfy. */
export type Dictionary = typeof en;
