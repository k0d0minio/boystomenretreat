import type { Step } from "@/lib/application-form";
import type { Dictionary } from "@/dictionaries/en";

/**
 * French translation.
 * ⚠️ Machine-assisted translation — review by a native speaker recommended.
 * The legal screens (`application.steps` waiver/release/medical) are a legal
 * document and must be reviewed by a qualified person before launch.
 */
export const fr: Dictionary = {
  meta: {
    tagline: "Accompagner les jeunes garçons à travers le défi, l'aventure et la découverte de soi",
  },

  nav: [
    { label: "À propos", href: "/about" },
    { label: "Pourquoi", href: "/#why" },
    { label: "Inclus", href: "/#included" },
    { label: "Équipe", href: "/#team" },
    { label: "Candidater", href: "/#apply" },
    { label: "Contact", href: "/#contact" },
  ],

  header: {
    bookAPlace: "Réserver une place",
    openMenu: "Ouvrir le menu",
    languageLabel: "Langue",
  },

  hero: {
    badge: "Dates flexibles disponibles",
    title: "Boys To Men Retreat",
    subtitle: "Accompagner les jeunes garçons à travers le défi, l'aventure et la découverte de soi",
    primaryCta: { label: "Réserver une place", href: "/#contact" },
    secondaryCta: { label: "En savoir plus sur la retraite", href: "/#why" },
    stats: [
      { value: "4 jours", label: "4 nuits" },
      { value: "9–16", label: "ans" },
      { value: "Ericeira", label: "Portugal" },
      { value: "700 €", label: "tout compris" },
    ],
  },

  why: {
    eyebrow: "La mission",
    heading: "Pourquoi cette retraite existe",
    lead: "Les garçons d'aujourd'hui grandissent sans rite de passage.",
    paragraphs: [
      "Les garçons d'aujourd'hui font face à un monde d'écrans incessants, de pression et de distraction — et à bien trop peu de moments qui leur demandent quelque chose de vrai.",
      "La plupart des garçons n'ont pas besoin d'un sermon de plus. Ils ont besoin de défi. Ils ont besoin de repères. Ils ont besoin de modèles masculins forts. Et ils ont besoin de se sentir partie prenante de quelque chose de réel.",
      "Cette expérience est conçue pour aider les garçons à renouer avec qui ils sont — plutôt que de se conformer aux attentes extérieures.",
    ],
    ageGroupsHeading: "Deux tranches d'âge",
    ageGroupsNote:
      "De neuf à seize ans, l'écart est large, donc en pratique les garçons sont répartis en deux tranches d'âge. Les défis, l'accompagnement et les conversations sont adaptés au niveau de chaque groupe.",
    ageGroups: [
      { range: "9 – 13", label: "Groupe des plus jeunes" },
      { range: "13 – 16", label: "Groupe des plus grands" },
    ],
    closing:
      "Je ne promets pas de « réparer » votre fils en quatre jours. Mais nous créons une expérience dont il se souviendra toute sa vie — une expérience qui sème les graines qui font grandir un jeune homme fort, ancré et capable.",
    imageAlt:
      "Un coach se tient avec cinq garçons tenant leurs skateboards au skatepark",
  },

  outcomes: {
    eyebrow: "Les résultats",
    heading: "Ce que les garçons rapportent chez eux",
    subheading: "De vraies compétences et valeurs qui durent bien au-delà des quatre jours.",
    items: [
      { title: "Respect de soi et discipline", description: "Un socle d'estime de soi construit en étant présent et en allant jusqu'au bout." },
      { title: "Confiance sans arrogance", description: "Une foi tranquille et ancrée en eux-mêmes, gagnée par un défi réel." },
      { title: "Gérer la pression et l'émotion", description: "Des outils pour rester calmes, concentrés et maîtres d'eux-mêmes quand les choses deviennent difficiles." },
      { title: "Fraternité et responsabilité", description: "Veiller les uns sur les autres et assumer leur rôle au sein du groupe." },
      { title: "Courage", description: "Sortir de leur zone de confort et découvrir de quoi ils sont capables." },
      { title: "Masculinité saine", description: "Comprendre ce que signifie être un jeune homme fort, bienveillant et fiable." },
    ],
  },

  included: {
    eyebrow: "L'expérience",
    heading: "Ce qui est inclus",
    subheading: "Tout est pris en charge — hébergement, repas, accompagnement et les expériences entre les deux.",
    items: [
      { title: "Hébergement", description: "Villa idéalement située, juste en face du pointbreak d'Ericeira.", emoji: "🏡" },
      { title: "Surf", description: "Nous vous garantissons que vous apprendrez à surfer les vagues les plus parfaites d'Ericeira, avec des moniteurs expérimentés.", emoji: "🌊" },
      { title: "Skateboard", description: "Progressez à votre rythme, apprenez à tomber, à vous relever et à continuer.", emoji: "🛹" },
      { title: "Défi sur la plage", description: "Courses d'obstacles en équipe, portages de sable, sprints et exercices de coordination qui construisent la fraternité.", emoji: "🏖️" },
      { title: "Bain froid", description: "Séances guidées d'exposition à l'eau froide, conçues pour développer la résilience, la confiance, la concentration et le contrôle émotionnel.", emoji: "❄️" },
      { title: "Feu de camp", description: "Des soirées autour du feu à parler de discipline, de respect, de confiance en soi, de responsabilité et du dépassement des peurs — à travers la conversation, les histoires et les rires partagés.", emoji: "🔥" },
      { title: "Repas", description: "Petit-déjeuner, déjeuner et dîner. Cuisiner et manger ensemble deviennent des moments de lien, de travail d'équipe et de responsabilité partagée.", emoji: "🍽️" },
      { title: "Photo et vidéo", description: "Nous réalisons des photos et des vidéos que les garçons rapportent chez eux.", emoji: "📸" },
    ],
  },

  gallery: {
    eyebrow: "Sur la côte",
    heading: "Moments de la retraite",
    subheading: "Surf, skate, sable et fraternité sur la côte d'Ericeira.",
    tiles: [
      { src: "/img/skateboarder-air-bowl.jpg", label: "Prendre de l'air", alt: "Un garçon prend de l'air avec son skateboard au-dessus du bowl au skatepark" },
      { src: "/img/boy-skateboarding-skatepark.jpg", label: "Sessions de skate", alt: "Un garçon avec casque et protections réalise une figure au skatepark" },
      { src: "/img/coach-teaching-skatepark-ramp.jpg", label: "Accompagnement sur la rampe", alt: "Un coach guide un garçon qui s'élance sur la rampe pendant que d'autres regardent" },
      { src: "/img/coach-high-five-skatepark.jpg", label: "Petites victoires, grands check", alt: "Un coach fait un check à un garçon souriant au skatepark" },
      { src: "/img/kids-group-beach.jpg", label: "Fraternité", alt: "Quatre garçons portent ensemble un ami sur la plage" },
      { src: "/img/boy-hiking-coastal-trail.jpg", label: "Aventures côtières", alt: "Un garçon gravit un sentier côtier sablonneux à travers des collines verdoyantes" },
      { src: "/img/boy-sandbag-beach-fitness.jpg", label: "Défis sur la plage", alt: "Un garçon porte un sac de sable lourd pendant un défi de fitness sur la plage" },
      { src: "/img/boy-playing-beach-sand.jpg", label: "Jeu et sable", alt: "Un garçon joue et creuse dans le sable sur la plage" },
      { src: "/img/boy-holding-longboard.jpg", label: "Prêt à rouler", alt: "Un garçon avec des protections de skate sourit en tenant un longboard coloré" },
    ],
  },

  pricing: {
    eyebrow: "Réservez votre semaine",
    heading: "Rejoignez la prochaine retraite",
    price: "700 €",
    duration: "4 jours / 4 nuits",
    note: "Dates flexibles disponibles — contactez-nous pour trouver la bonne semaine.",
    includes: [
      "Hébergement à la villa",
      "Petit-déjeuner, déjeuner et dîner",
      "Cours de surf avec la Blue Ocean Surf School",
      "Accompagnement skate avec Skateschool 36",
      "Défis sur la plage et séances de bain froid",
      "Cercles autour du feu et journal personnel",
      "Photos et vidéos à rapporter chez soi",
    ],
    cta: { label: "Réserver une place", href: "/#contact" },
  },

  team: {
    eyebrow: "Les personnes",
    heading: "Rencontrez l'équipe",
    subheading:
      "Nous croyons que les jeunes garçons n'ont pas seulement besoin d'instruction — ils ont besoin de présence, d'accompagnement et de modèles forts. Notre équipe est là pour créer un environnement de confiance, de défi, de fraternité et de croissance.",
    members: [
      {
        name: "Maxim Rettich",
        role: "Fondateur et Hôte",
        bio: "54 ans, néerlandais de naissance, parlant couramment l'anglais et l'espagnol, et facilitateur certifié de breathwork. Père de deux enfants — un garçon de 9 ans et une fille de 13 ans — installé à Ericeira, au Portugal. Son parcours de vie l'a mené à travers le monde, façonné par une passion profonde pour le sport, le développement personnel et la quête de quelque chose de plus porteur de sens.",
        initials: "MR",
        kind: "photo",
        image: "/img/max-richter.jpg",
        imageAlt: "Maxim Rettich, fondateur de Boys To Men Retreat, souriant en extérieur avec une casquette",
      },
      {
        name: "Rafa",
        role: "Skateschool 36 Ericeira — Coach",
        bio: "Des années d'expérience en skateboard. « J'adore aider les gens à prendre confiance sur leur planche, à apprendre de nouvelles techniques et, surtout, à s'amuser. »",
        initials: "R",
        kind: "photo",
        image: "/img/rafa.jpg",
        imageAlt: "Rafa, coach de skate, longeant le bord d'un bowl sur son skateboard",
      },
      {
        name: "Blue Ocean Surf School",
        role: "Cours de surf — Ribeira d'Ilhas",
        bio: "Notre école a formé des milliers d'élèves, et aujourd'hui nous savons évaluer et corriger les mauvaises techniques pour que les élèves progressent et avancent dans leur parcours de surf.",
        initials: "BO",
        kind: "logo",
        image: "/img/blue-ocean.png",
        imageAlt: "Logo de la Blue Ocean Ericeira Surf School",
      },
    ],
  },

  contact: {
    eyebrow: "Contactez-nous",
    heading: "Prêt à franchir le pas ?",
    subheading: "Contactez-nous pour toute question ou pour réserver une place. Les dates sont flexibles — nous vous aiderons à trouver la bonne semaine.",
    whatsappLabel: "Message sur WhatsApp",
    languageNote: "La retraite se déroule en anglais. Max parle aussi allemand, néerlandais et espagnol, alors n'hésitez pas à nous contacter dans la langue qui vous convient le mieux.",
  },

  footer: {
    explore: "Explorer",
    home: "Accueil",
    aboutFounder: "À propos du fondateur",
    included: "Ce qui est inclus",
    privacy: "Politique de confidentialité",
    getInTouch: "Contactez-nous",
  },

  about: {
    eyebrow: "À propos",
    heading: "Message du fondateur",
    intro:
      "Maxim a connu de grandes réussites comme des épreuves importantes — des moments qui l'ont mis à l'épreuve et qui ont finalement façonné celui qu'il est aujourd'hui.",
    imageAlt: "Maxim Rettich, fondateur de Boys To Men Retreat, souriant en extérieur avec une casquette",
    sections: [
      {
        title: "Un tournant",
        body: "Un moment décisif est survenu lorsqu'il a survécu à un grave accident de voiture, restant submergé pendant huit minutes et passant dix jours dans le coma. Cela a transformé sa vision de la vie et de ce qui compte vraiment.",
      },
      {
        title: "Devenir père",
        body: "Une autre expérience marquante a été de devenir père. Son fils est né avec un laparoschisis et a nécessité quatre interventions chirurgicales majeures juste après la naissance. Cela a profondément influencé le regard de Maxim sur la résilience et sur l'essentiel — façonnant à la fois sa parentalité et son travail auprès des jeunes.",
      },
      {
        title: "Comment il travaille aujourd'hui",
        body: "Maxim agit à partir de valeurs authentiques et d'un véritable sens. En tant que facilitateur certifié de breathwork, son travail auprès des jeunes réunit breathwork, surf, skate, défis sur la plage, immersion en eau froide, feux de camp et discussions de groupe — le tout conçu pour encourager à sortir de sa zone de confort, à bâtir l'assurance et à favoriser une plus grande conscience de soi et un lien plus profond.",
      },
    ],
    mission:
      "Son intention est simple : les aider à bâtir la confiance, la force émotionnelle et un sens clair de qui ils sont — afin qu'ils puissent affronter la vie avec courage, résilience et un cœur ouvert.",
    ctaLabel: "Rejoignez la prochaine retraite",
  },

  privacy: {
    heading: "Politique de confidentialité",
    updated: "Dernière mise à jour : 2026",
    body: [
      "Boys To Men Retreat respecte votre vie privée. Cette page explique, en termes simples, comment nous traitons les informations que vous partagez avec nous.",
      "Informations que vous fournissez : Lorsque vous nous contactez par téléphone, WhatsApp, Instagram ou e-mail pour poser des questions ou réserver une place, nous recevons les informations que vous choisissez de partager — comme votre nom, vos coordonnées et des informations sur le participant. Nous les utilisons uniquement pour vous répondre et organiser la retraite.",
      "Comment nous les utilisons : Nous utilisons vos informations pour communiquer avec vous, organiser les réservations et assurer la sécurité et le bien-être des participants pendant la retraite. Nous ne vendons pas vos informations à des tiers.",
      "Photos et vidéo : Pendant la retraite, nous réalisons des photos et des vidéos que les participants rapportent chez eux. Si vous préférez que votre enfant n'apparaisse pas dans les images partagées, faites-le-nous savoir et nous le respecterons.",
      "Contact : Pour toute question concernant votre vie privée ou pour demander la modification ou la suppression de vos informations, contactez-nous à l'aide des coordonnées figurant sur notre site.",
    ],
  },

  application: {
    eyebrow: "Candidatez maintenant",
    intro: {
      heading: "Laissez-nous répondre à vos questions",
      subheading:
        "Une question ou envie de candidater ? Laissez vos coordonnées et un message ci-dessous et nous vous recontacterons.",
    },
    steps: [
      {
        kind: "welcome",
        title: "Boys to Men Retreat",
        body: "Merci de votre intérêt pour le Boys to Men Retreat à Ericeira, au Portugal. Laissez vos coordonnées et un message ci-dessous et nous vous recontacterons. Si vous préférez parler directement, vous pouvez appeler Maxim J Rettich pour un échange individuel au +34 600 235 207.",
        buttonLabel: "Commencer",
        meta: "Prend une minute",
      },
      { kind: "question", id: "name", type: "text", title: "Votre nom", placeholder: "Saisissez votre réponse ici…", required: true },
      { kind: "question", id: "email", type: "email", title: "Adresse e-mail", placeholder: "nom@exemple.com", required: true },
      { kind: "question", id: "phone", type: "tel", title: "Numéro de téléphone", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "message", type: "longtext", title: "Votre message", placeholder: "Saisissez votre message ici…", required: true },
    ] as Step[],
  },

  formUi: {
    ok: "OK",
    submit: "Envoyer la candidature",
    sending: "Envoi…",
    continueLabel: "Continuer",
    pressEnter: "appuyez sur",
    shiftEnter: "pour insérer un saut de ligne",
    month: "Mois",
    day: "Jour",
    year: "Année",
    prevQuestion: "Question précédente",
    nextQuestion: "Question suivante",
    required: "Veuillez remplir ce champ.",
    requiredChoice: "Veuillez sélectionner une option.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    invalidAge: "Veuillez saisir un âge valide.",
    invalidDate: "Veuillez saisir une date complète.",
    submitError:
      "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer ou appeler Maxim au +34 600 235 207.",
    successTitle: "Merci — votre candidature est bien reçue.",
    successBody:
      "Nous examinerons vos informations et vous recontacterons bientôt. Si vous souhaitez échanger plus tôt, appelez Maxim au +34 600 235 207.",
  },

  og: {
    homeTagline: "Surf · Skate Retreat",
    about: {
      eyebrow: "À propos",
      title: "Message du fondateur",
      subtitle: "L'histoire et l'intention derrière la retraite.",
    },
    privacy: {
      eyebrow: "Mentions légales",
      title: "Politique de confidentialité",
      subtitle: "Comment nous traitons les informations que vous partagez.",
    },
  },

  seo: {
    siteDescription:
      "Une retraite de 4 jours / 4 nuits à Ericeira, au Portugal, qui accompagne les jeunes garçons (9–16 ans) à travers le défi, l'aventure et la découverte de soi — surf, skateboard, défis sur la plage, bains froids et cercles autour du feu.",
    about: {
      title: "À propos du fondateur",
      description:
        "Un message de Maxim Rettich, fondateur de Boys To Men Retreat — son histoire, ses valeurs et l'intention derrière la retraite.",
    },
    privacy: {
      title: "Politique de confidentialité",
      description: "Comment Boys To Men Retreat traite les informations que vous partagez avec nous.",
    },
  },
};
