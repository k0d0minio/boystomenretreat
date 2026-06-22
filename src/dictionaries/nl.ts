import type { Step } from "@/lib/application-form";
import type { Dictionary } from "@/dictionaries/en";

/**
 * Dutch translation.
 * ⚠️ Machine-assisted translation — review by a native speaker recommended.
 * The legal screens (`application.steps` waiver/release/medical) are a legal
 * document and must be reviewed by a qualified person before launch.
 */
export const nl: Dictionary = {
  meta: {
    tagline: "Jonge mannen begeleiden door uitdaging, avontuur en zelfontdekking",
  },

  nav: [
    { label: "Over ons", href: "/about" },
    { label: "Waarom", href: "/#why" },
    { label: "Inbegrepen", href: "/#included" },
    { label: "Team", href: "/#team" },
    { label: "Aanmelden", href: "/#apply" },
    { label: "Contact", href: "/#contact" },
  ],

  header: {
    bookAPlace: "Reserveer een plek",
    openMenu: "Menu openen",
    languageLabel: "Taal",
  },

  hero: {
    badge: "Flexibele data beschikbaar",
    title: "Boys To Men Retreat",
    subtitle: "Jonge mannen begeleiden door uitdaging, avontuur en zelfontdekking",
    primaryCta: { label: "Reserveer een plek", href: "/#contact" },
    secondaryCta: { label: "Meer over de retreat", href: "/#why" },
    stats: [
      { value: "4 dagen", label: "4 nachten" },
      { value: "9–16", label: "jaar oud" },
      { value: "Ericeira", label: "Portugal" },
      { value: "700 €", label: "alles inbegrepen" },
    ],
  },

  why: {
    eyebrow: "De missie",
    heading: "Waarom bestaat deze retreat",
    lead: "De jongens van vandaag groeien op zonder een overgangsritueel.",
    paragraphs: [
      "Moderne jongens leven in een wereld vol eindeloze schermen, druk en afleiding — en met veel te weinig momenten die echt iets van hen vragen.",
      "De meeste jongens hebben geen behoefte aan nog een preek. Ze hebben uitdaging nodig. Ze hebben begeleiding nodig. Ze hebben sterke mannelijke rolmodellen nodig. En ze willen deel uitmaken van iets echts.",
      "Deze ervaring is bedoeld om jongens te helpen opnieuw verbinding te maken met wie ze zijn — in plaats van zich te conformeren aan verwachtingen van buitenaf.",
    ],
    ageGroupsHeading: "Twee leeftijdsgroepen",
    ageGroupsNote:
      "Negen tot zestien is een brede spanne, dus in de praktijk worden de jongens in twee leeftijdsgroepen verdeeld. Uitdagingen, coaching en gesprekken worden afgestemd op waar elke groep staat.",
    ageGroups: [
      { range: "9 – 13", label: "Jongere groep" },
      { range: "13 – 16", label: "Oudere groep" },
    ],
    closing:
      "Ik beloof niet dat ik je zoon in vier dagen “repareer”. Maar we creëren een ervaring die hij de rest van zijn leven zal herinneren — een die de zaadjes plant die uitgroeien tot een sterke, geaarde en capabele jonge man.",
    imageAlt:
      "Een coach staat met vijf jongens die hun skateboards vasthouden in het skatepark",
  },

  outcomes: {
    eyebrow: "De resultaten",
    heading: "Wat de jongens mee naar huis nemen",
    subheading: "Echte vaardigheden en waarden die langer meegaan dan de vier dagen.",
    items: [
      { title: "Zelfrespect & discipline", description: "Een basis van eigenwaarde, opgebouwd door op te komen dagen en door te zetten." },
      { title: "Zelfvertrouwen zonder arrogantie", description: "Een rustig, geaard geloof in zichzelf, verdiend door echte uitdaging." },
      { title: "Omgaan met druk & emotie", description: "Middelen om kalm, gefocust en in controle te blijven als het moeilijk wordt." },
      { title: "Broederschap & verantwoordelijkheid", description: "Voor elkaar zorgen en hun eigen rol in de groep nemen." },
      { title: "Moed", description: "Buiten hun comfortzone stappen en ontdekken waartoe ze in staat zijn." },
      { title: "Gezonde mannelijkheid", description: "Begrijpen wat het betekent om een sterke, vriendelijke en betrouwbare jonge man te zijn." },
    ],
  },

  included: {
    eyebrow: "De ervaring",
    heading: "Wat is inbegrepen",
    subheading: "Alles wordt geregeld — accommodatie, maaltijden, coaching en de ervaringen daartussenin.",
    items: [
      { title: "Accommodatie", description: "Villa op een geweldige locatie, direct voor de pointbreak in Ericeira.", emoji: "🏡" },
      { title: "Surfen", description: "We garanderen dat je leert surfen op de meest perfecte golven van Ericeira, met ervaren instructeurs.", emoji: "🌊" },
      { title: "Skateboarden", description: "Vorder in je eigen tempo, leer vallen, weer opstaan en doorgaan.", emoji: "🛹" },
      { title: "Stranduitdaging", description: "Hindernisraces in teamverband, zanddragen, sprintraces en coördinatie-opdrachten die broederschap opbouwen.", emoji: "🏖️" },
      { title: "Koudwaterbad", description: "Begeleide koudwatersessies die veerkracht, zelfvertrouwen, focus en emotionele controle opbouwen.", emoji: "❄️" },
      { title: "Kampvuur", description: "Avonden rond het vuur met gesprekken over discipline, respect, zelfvertrouwen, verantwoordelijkheid en het overwinnen van angsten — door gesprekken, verhalen en gedeelde lach.", emoji: "🔥" },
      { title: "Maaltijden", description: "Ontbijt, lunch & diner. Samen koken en eten worden momenten van verbinding, samenwerking en gedeelde verantwoordelijkheid.", emoji: "🍽️" },
      { title: "Foto & video", description: "We maken foto's en video's die de jongens mee naar huis kunnen nemen.", emoji: "📸" },
    ],
  },

  gallery: {
    eyebrow: "Aan de kust",
    heading: "Momenten van de retreat",
    subheading: "Surf, skate, zand en broederschap aan de kust van Ericeira.",
    tiles: [
      { src: "/img/skateboarder-air-bowl.jpg", label: "Lucht happen", alt: "Een jongen springt met zijn skateboard boven de bowl in het skatepark" },
      { src: "/img/boy-skateboarding-skatepark.jpg", label: "Skatesessies", alt: "Een jongen met helm en beschermers die een trick doet in het skatepark" },
      { src: "/img/coach-teaching-skatepark-ramp.jpg", label: "Coaching op de ramp", alt: "Een coach begeleidt een jongen die de ramp afzakt terwijl anderen toekijken" },
      { src: "/img/coach-high-five-skatepark.jpg", label: "Kleine successen, grote high-fives", alt: "Een coach geeft een glimlachende jongen een high-five in het skatepark" },
      { src: "/img/kids-group-beach.jpg", label: "Broederschap", alt: "Vier jongens dragen samen een vriend op het strand" },
      { src: "/img/boy-hiking-coastal-trail.jpg", label: "Kustavonturen", alt: "Een jongen loopt een zanderig kustpad op door groene heuvels" },
      { src: "/img/boy-sandbag-beach-fitness.jpg", label: "Stranduitdagingen", alt: "Een jongen draagt een zware zandzak tijdens een fitnessuitdaging op het strand" },
      { src: "/img/boy-playing-beach-sand.jpg", label: "Spel & zand", alt: "Een jongen speelt en graaft in het zand op het strand" },
      { src: "/img/boy-holding-longboard.jpg", label: "Klaar om te rollen", alt: "Een jongen met skatebeschermers lacht terwijl hij een kleurrijke longboard vasthoudt" },
    ],
  },

  pricing: {
    eyebrow: "Reserveer je week",
    heading: "Sluit je aan bij de volgende retreat",
    price: "700 €",
    duration: "4 dagen / 4 nachten",
    note: "Flexibele data beschikbaar — neem contact op om de juiste week te vinden.",
    includes: [
      "Accommodatie in de villa",
      "Ontbijt, lunch & diner",
      "Surflessen met Blue Ocean Surf School",
      "Skatecoaching met Skateschool 36",
      "Stranduitdagingen & koudwatersessies",
      "Kampvuurkringen & journaling",
      "Foto's & video's om mee naar huis te nemen",
    ],
    cta: { label: "Reserveer een plek", href: "/#contact" },
  },

  team: {
    eyebrow: "De mensen",
    heading: "Maak kennis met het team",
    subheading:
      "Wij geloven dat jonge mannen niet alleen instructie nodig hebben — ze hebben aanwezigheid, begeleiding en sterke rolmodellen nodig. Ons team is er om een omgeving van vertrouwen, uitdaging, broederschap en groei te creëren.",
    members: [
      {
        name: "Maxim Rettich",
        role: "Oprichter & Gastheer",
        bio: "54 jaar oud en van Nederlandse afkomst, vloeiend in Engels en Spaans, en gecertificeerd ademwerkbegeleider. Vader van twee — een zoon van 9 en een dochter van 13 — woonachtig in Ericeira, Portugal. Zijn levensreis heeft hem over de hele wereld gebracht, gevormd door een diepe passie voor sport, persoonlijke groei en het zoeken naar iets betekenisvollers.",
        initials: "MR",
        kind: "photo",
        image: "/img/max-richter.jpg",
        imageAlt: "Maxim Rettich, oprichter van Boys To Men Retreat, lachend buiten met een pet",
      },
      {
        name: "Rafa",
        role: "Skateschool 36 Ericeira — Coach",
        bio: "Jarenlange skateboard-ervaring. \"Ik help mensen graag om zelfvertrouwen op hun board op te bouwen, nieuwe vaardigheden te leren en vooral plezier te hebben.\"",
        initials: "R",
        kind: "photo",
        image: "/img/rafa.jpg",
        imageAlt: "Rafa, skatecoach, rijdt langs de rand van een bowl op zijn skateboard",
      },
      {
        name: "Blue Ocean Surf School",
        role: "Surfinstructie — Ribeira d'Ilhas",
        bio: "Onze school heeft duizenden leerlingen lesgegeven, en vandaag kunnen we slechte technieken herkennen en aanpakken zodat leerlingen kunnen verbeteren en vooruitgang boeken in hun surfreis.",
        initials: "BO",
        kind: "logo",
        image: "/img/blue-ocean.png",
        imageAlt: "Logo van Blue Ocean Ericeira Surf School",
      },
    ],
  },

  contact: {
    eyebrow: "Neem contact op",
    heading: "Klaar voor de volgende stap?",
    subheading: "Neem contact op met al je vragen of om een plek te reserveren. De data zijn flexibel — we helpen je de juiste week te vinden.",
    whatsappLabel: "Bericht op WhatsApp",
    languageNote: "De retraite wordt in het Engels gehouden. Max spreekt ook Duits, Nederlands en Spaans, dus neem gerust contact op in de taal die jou het beste uitkomt.",
  },

  footer: {
    explore: "Ontdek",
    home: "Home",
    aboutFounder: "Over de oprichter",
    included: "Wat is inbegrepen",
    privacy: "Privacybeleid",
    getInTouch: "Neem contact op",
  },

  about: {
    eyebrow: "Over ons",
    heading: "Bericht van de oprichter",
    intro:
      "Maxim heeft zowel grote successen als forse uitdagingen meegemaakt — momenten die hem op de proef stelden en uiteindelijk bepaalden wie hij vandaag is.",
    imageAlt: "Maxim Rettich, oprichter van Boys To Men Retreat, lachend buiten met een pet",
    sections: [
      {
        title: "Een keerpunt",
        body: "Een cruciaal moment kwam toen hij een zwaar auto-ongeluk overleefde, acht minuten onder water bleef en tien dagen in coma lag. Het veranderde hoe hij naar het leven kijkt en wat er werkelijk toe doet.",
      },
      {
        title: "Vader worden",
        body: "Een andere ingrijpende ervaring was het vaderschap. Zijn zoon werd geboren met gastroschisis en moest direct na de geboorte vier grote operaties ondergaan. Dit beïnvloedde Maxims kijk op veerkracht en op wat het belangrijkst is diepgaand — en gaf vorm aan zowel zijn ouderschap als zijn werk met jongeren.",
      },
      {
        title: "Hoe hij vandaag werkt",
        body: "Maxim werkt vanuit authentieke waarden en doelgerichtheid. Als gecertificeerd ademwerkbegeleider brengt zijn werk met jongeren ademwerk, surfen, skateboarden, stranduitdagingen, koude onderdompeling, kampvuren en groepsgesprekken samen — allemaal bedoeld om buiten de comfortzone te stappen, zelfvertrouwen op te bouwen en diepere zelfkennis en verbinding te bevorderen.",
      },
    ],
    mission:
      "Zijn intentie is eenvoudig: hen helpen zelfvertrouwen, emotionele kracht en een helder besef van wie ze zijn op te bouwen — zodat ze het leven met moed, veerkracht en een open hart tegemoet kunnen treden.",
    ctaLabel: "Sluit je aan bij de volgende retreat",
  },

  privacy: {
    heading: "Privacybeleid",
    updated: "Laatst bijgewerkt: 2026",
    body: [
      "Boys To Men Retreat respecteert je privacy. Deze pagina legt in heldere taal uit hoe wij omgaan met de informatie die je met ons deelt.",
      "Informatie die je verstrekt: Wanneer je contact met ons opneemt via telefoon, WhatsApp, Instagram of e-mail om vragen te stellen of een plek te boeken, ontvangen we de gegevens die je kiest te delen — zoals je naam, contactgegevens en informatie over de deelnemer. We gebruiken dit uitsluitend om je te antwoorden en de retreat te organiseren.",
      "Hoe we het gebruiken: We gebruiken je informatie om met je te communiceren, boekingen te regelen en de veiligheid en het welzijn van deelnemers tijdens de retreat te waarborgen. We verkopen je informatie niet aan derden.",
      "Foto's & video: Tijdens de retreat maken we foto's en video's die deelnemers mee naar huis kunnen nemen. Als je liever niet hebt dat je kind in gedeeld beeldmateriaal verschijnt, laat het ons weten en we respecteren dat.",
      "Contact: Voor vragen over je privacy of om wijziging of verwijdering van je gegevens te verzoeken, neem contact met ons op via de gegevens op onze site.",
    ],
  },

  application: {
    eyebrow: "Meld je nu aan",
    intro: {
      heading: "Laat ons je vragen beantwoorden",
      subheading:
        "Een vraag of klaar om je aan te melden? Laat hieronder je gegevens en een bericht achter en we nemen contact op.",
    },
    steps: [
      {
        kind: "welcome",
        title: "Boys to Men Retreat",
        body: "Bedankt voor je interesse in de Boys to Men Retreat in Ericeira, Portugal. Laat hieronder je gegevens en een bericht achter en we nemen contact met je op. Als je liever direct wilt spreken, kun je Maxim J Rettich bellen voor een persoonlijk gesprek op +34 600 235 207.",
        buttonLabel: "Beginnen",
        meta: "Duurt een minuut",
      },
      { kind: "question", id: "name", type: "text", title: "Je naam", placeholder: "Typ hier je antwoord…", required: true },
      { kind: "question", id: "email", type: "email", title: "E-mailadres", placeholder: "naam@voorbeeld.com", required: true },
      { kind: "question", id: "phone", type: "tel", title: "Telefoonnummer", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "message", type: "longtext", title: "Je bericht", placeholder: "Typ hier je bericht…", required: true },
    ] as Step[],
  },

  formUi: {
    ok: "OK",
    submit: "Aanmelding versturen",
    sending: "Versturen…",
    continueLabel: "Doorgaan",
    pressEnter: "druk op",
    shiftEnter: "voor een nieuwe regel",
    month: "Maand",
    day: "Dag",
    year: "Jaar",
    prevQuestion: "Vorige vraag",
    nextQuestion: "Volgende vraag",
    required: "Vul dit in.",
    requiredChoice: "Selecteer een optie.",
    invalidEmail: "Voer een geldig e-mailadres in.",
    invalidAge: "Voer een geldige leeftijd in.",
    invalidDate: "Voer een volledige datum in.",
    submitError:
      "Er ging iets mis bij het versturen van je aanmelding. Probeer het opnieuw of bel Maxim op +34 600 235 207.",
    successTitle: "Bedankt — je aanmelding is binnen.",
    successBody:
      "We bekijken je gegevens en nemen snel contact op. Wil je eerder spreken, bel dan Maxim op +34 600 235 207.",
  },

  og: {
    homeTagline: "Surf · Skate Retreat",
    about: {
      eyebrow: "Over ons",
      title: "Bericht van de oprichter",
      subtitle: "Het verhaal en de intentie achter de retreat.",
    },
    privacy: {
      eyebrow: "Juridisch",
      title: "Privacybeleid",
      subtitle: "Hoe wij omgaan met de informatie die je deelt.",
    },
  },

  seo: {
    siteDescription:
      "Een retreat van 4 dagen / 4 nachten in Ericeira, Portugal die jonge mannen (9–16) begeleidt door uitdaging, avontuur en zelfontdekking — surfen, skateboarden, stranduitdagingen, koudwaterbaden en kampvuurkringen.",
    about: {
      title: "Over de oprichter",
      description:
        "Een bericht van Maxim Rettich, oprichter van Boys To Men Retreat — zijn verhaal, zijn waarden en de intentie achter de retreat.",
    },
    privacy: {
      title: "Privacybeleid",
      description: "Hoe Boys To Men Retreat omgaat met de informatie die je met ons deelt.",
    },
  },
};
