import type { Step } from "@/lib/application-form";
import type { Dictionary } from "@/dictionaries/en";

/**
 * Spanish translation.
 * ⚠️ Machine-assisted translation — review by a native speaker recommended.
 * The legal screens (`application.steps` waiver/release/medical) are a legal
 * document and must be reviewed by a qualified person before launch.
 */
export const es: Dictionary = {
  meta: {
    tagline: "Acompañar a los jóvenes a través del desafío, la aventura y el autodescubrimiento",
  },

  nav: [
    { label: "Acerca de", href: "/about" },
    { label: "Por qué", href: "/#why" },
    { label: "Incluido", href: "/#included" },
    { label: "Equipo", href: "/#team" },
    { label: "Solicitar", href: "/#apply" },
    { label: "Contacto", href: "/#contact" },
  ],

  header: {
    bookAPlace: "Reservar una plaza",
    openMenu: "Abrir menú",
    languageLabel: "Idioma",
  },

  hero: {
    badge: "Fechas flexibles disponibles",
    title: "Boys To Men Retreat",
    subtitle: "Acompañar a los jóvenes a través del desafío, la aventura y el autodescubrimiento",
    primaryCta: { label: "Reservar una plaza", href: "/#contact" },
    secondaryCta: { label: "Conoce más sobre el retiro", href: "/#why" },
    stats: [
      { value: "4 días", label: "4 noches" },
      { value: "9–16", label: "años" },
      { value: "Ericeira", label: "Portugal" },
      { value: "700 €", label: "todo incluido" },
    ],
  },

  why: {
    eyebrow: "La misión",
    heading: "Por qué existe este retiro",
    lead: "Los chicos de hoy crecen sin un rito de paso.",
    paragraphs: [
      "Los chicos de hoy se enfrentan a un mundo de pantallas interminables, presión y distracción — y a muy pocos momentos que les exijan algo real.",
      "La mayoría de los chicos no necesita otro sermón. Necesitan desafío. Necesitan orientación. Necesitan referentes masculinos fuertes. Y necesitan sentirse parte de algo real.",
      "Esta experiencia está diseñada para ayudar a los chicos a reconectar con quiénes son — en lugar de amoldarse a las expectativas externas.",
    ],
    ageGroupsHeading: "Dos franjas de edad",
    ageGroupsNote:
      "De nueve a dieciséis años hay un margen amplio, así que en la práctica los chicos se agrupan en dos franjas de edad. Los desafíos, el acompañamiento y las conversaciones se adaptan al punto en el que está cada grupo.",
    ageGroups: [
      { range: "9 – 13", label: "Grupo de los más pequeños" },
      { range: "13 – 16", label: "Grupo de los mayores" },
    ],
    closing:
      "No prometo «arreglar» a su hijo en cuatro días. Pero estamos creando una experiencia que recordará el resto de su vida — una que planta el tipo de semillas que crecen hasta convertirse en un joven fuerte, firme y capaz.",
    imageAlt:
      "Un monitor junto a cinco chicos que sostienen sus monopatines en el skatepark",
  },

  outcomes: {
    eyebrow: "Los resultados",
    heading: "Lo que los chicos se llevan a casa",
    subheading: "Habilidades y valores reales que perduran más allá de los cuatro días.",
    items: [
      { title: "Autorrespeto y disciplina", description: "Una base de autoestima construida al presentarse y llegar hasta el final." },
      { title: "Confianza sin arrogancia", description: "Una creencia tranquila y firme en sí mismos, ganada a través del desafío real." },
      { title: "Gestionar la presión y la emoción", description: "Herramientas para mantenerse tranquilos, concentrados y en control cuando las cosas se ponen difíciles." },
      { title: "Hermandad y responsabilidad", description: "Cuidar unos de otros y asumir su parte dentro del grupo." },
      { title: "Coraje", description: "Salir de su zona de confort y descubrir de lo que son capaces." },
      { title: "Masculinidad sana", description: "Comprender lo que significa ser un joven fuerte, amable y de fiar." },
    ],
  },

  included: {
    eyebrow: "La experiencia",
    heading: "Qué incluye",
    subheading: "Todo está cubierto — alojamiento, comidas, acompañamiento y las experiencias intermedias.",
    items: [
      { title: "Alojamiento", description: "Villa en una ubicación inmejorable, justo frente al pointbreak de Ericeira.", emoji: "🏡" },
      { title: "Surf", description: "Te garantizamos que aprenderás a surfear las olas más perfectas de Ericeira, con monitores experimentados.", emoji: "🌊" },
      { title: "Skate", description: "Avanza a tu propio ritmo, aprende a caer, a levantarte y a seguir.", emoji: "🛹" },
      { title: "Desafío en la playa", description: "Carreras de obstáculos en equipo, transporte de sacos de arena, esprints y tareas de coordinación que construyen hermandad.", emoji: "🏖️" },
      { title: "Baño de agua fría", description: "Sesiones guiadas de exposición al agua fría, diseñadas para desarrollar resiliencia, confianza, concentración y control emocional.", emoji: "❄️" },
      { title: "Hoguera", description: "Noches junto al fuego hablando de disciplina, respeto, autoconfianza, responsabilidad y la superación de los miedos — a través de conversación, historias y risas compartidas.", emoji: "🔥" },
      { title: "Comidas", description: "Desayuno, almuerzo y cena. Cocinar y comer juntos se convierten en momentos de conexión, trabajo en equipo y responsabilidad compartida.", emoji: "🍽️" },
      { title: "Foto y vídeo", description: "Capturamos fotos y vídeos para que los chicos se los lleven a casa.", emoji: "📸" },
    ],
  },

  gallery: {
    eyebrow: "En la costa",
    heading: "Momentos del retiro",
    subheading: "Surf, skate, arena y hermandad en la costa de Ericeira.",
    tiles: [
      { src: "/img/skateboarder-air-bowl.jpg", label: "Cogiendo aire", alt: "Un chico salta con su monopatín por encima del bowl en el skatepark" },
      { src: "/img/boy-skateboarding-skatepark.jpg", label: "Sesiones de skate", alt: "Un chico con casco y protecciones haciendo un truco en el skatepark" },
      { src: "/img/coach-teaching-skatepark-ramp.jpg", label: "Acompañamiento en la rampa", alt: "Un monitor guía a un chico que baja por la rampa mientras otros observan" },
      { src: "/img/coach-high-five-skatepark.jpg", label: "Pequeñas victorias, grandes choca esos cinco", alt: "Un monitor choca esos cinco con un chico sonriente en el skatepark" },
      { src: "/img/kids-group-beach.jpg", label: "Hermandad", alt: "Cuatro chicos cargan juntos a un amigo en la playa" },
      { src: "/img/boy-hiking-coastal-trail.jpg", label: "Aventuras en la costa", alt: "Un chico sube un sendero costero de arena entre colinas verdes" },
      { src: "/img/boy-sandbag-beach-fitness.jpg", label: "Desafíos en la playa", alt: "Un chico carga un saco de arena pesado durante un desafío de fitness en la playa" },
      { src: "/img/boy-playing-beach-sand.jpg", label: "Juego y arena", alt: "Un chico jugando y cavando en la arena de la playa" },
      { src: "/img/boy-holding-longboard.jpg", label: "Listo para rodar", alt: "Un chico con protecciones de skate sonríe mientras sostiene una longboard de colores" },
    ],
  },

  pricing: {
    eyebrow: "Reserva tu semana",
    heading: "Únete al próximo retiro",
    price: "700 €",
    duration: "4 días / 4 noches",
    note: "Fechas flexibles disponibles — ponte en contacto para encontrar la semana adecuada.",
    includes: [
      "Alojamiento en la villa",
      "Desayuno, almuerzo y cena",
      "Clases de surf con Blue Ocean Surf School",
      "Acompañamiento de skate con Skateschool 36",
      "Desafíos en la playa y sesiones de agua fría",
      "Círculos junto a la hoguera y escritura reflexiva",
      "Fotos y vídeos para llevar a casa",
    ],
    cta: { label: "Reservar una plaza", href: "/#contact" },
  },

  team: {
    eyebrow: "Las personas",
    heading: "Conoce al equipo",
    subheading:
      "Creemos que los jóvenes no solo necesitan instrucción — necesitan presencia, orientación y referentes fuertes. Nuestro equipo está aquí para crear un entorno de confianza, desafío, hermandad y crecimiento.",
    members: [
      {
        name: "Maxim Rettich",
        role: "Fundador y Anfitrión",
        bio: "54 años, neerlandés de nacimiento, con fluidez en inglés y español, y facilitador certificado de breathwork. Padre de dos hijos — un niño de 9 años y una niña de 13 — afincado en Ericeira, Portugal. Su trayectoria vital lo ha llevado por todo el mundo, marcada por una profunda pasión por el deporte, el crecimiento personal y la búsqueda de algo más significativo.",
        initials: "MR",
        kind: "photo",
        image: "/img/max-richter.jpg",
        imageAlt: "Maxim Rettich, fundador de Boys To Men Retreat, sonriendo al aire libre con una gorra",
      },
      {
        name: "Rafa",
        role: "Skateschool 36 Ericeira — Monitor",
        bio: "Años de experiencia en skate. «Me encanta ayudar a la gente a ganar confianza sobre su tabla, a aprender nuevas habilidades y, sobre todo, a divertirse.»",
        initials: "R",
        kind: "photo",
        image: "/img/rafa.jpg",
        imageAlt: "Rafa, monitor de skate, recorriendo el borde de un bowl sobre su monopatín",
      },
      {
        name: "Blue Ocean Surf School",
        role: "Instrucción de surf — Ribeira d'Ilhas",
        bio: "Nuestra escuela ha enseñado a miles de alumnos, y hoy podemos evaluar y corregir las malas técnicas para que los alumnos mejoren y avancen en su camino en el surf.",
        initials: "BO",
        kind: "logo",
        image: "/img/blue-ocean.png",
        imageAlt: "Logotipo de Blue Ocean Ericeira Surf School",
      },
    ],
  },

  contact: {
    eyebrow: "Ponte en contacto",
    heading: "¿Listo para dar el siguiente paso?",
    subheading: "Escríbenos con cualquier pregunta o para reservar una plaza. Las fechas son flexibles — te ayudaremos a encontrar la semana adecuada.",
    whatsappLabel: "Mensaje por WhatsApp",
    languageNote: "El retiro se realiza en inglés. Max también habla alemán, neerlandés y español, así que escríbenos en el idioma que prefieras.",
  },

  footer: {
    explore: "Explorar",
    home: "Inicio",
    aboutFounder: "Sobre el fundador",
    included: "Qué incluye",
    privacy: "Política de privacidad",
    getInTouch: "Ponte en contacto",
  },

  about: {
    eyebrow: "Acerca de",
    heading: "Mensaje del fundador",
    intro:
      "Maxim ha vivido tanto grandes éxitos como retos importantes — momentos que lo pusieron a prueba y que, en última instancia, definieron quién es hoy.",
    imageAlt: "Maxim Rettich, fundador de Boys To Men Retreat, sonriendo al aire libre con una gorra",
    sections: [
      {
        title: "Un punto de inflexión",
        body: "Un momento decisivo llegó cuando sobrevivió a un grave accidente de coche, permaneciendo sumergido durante ocho minutos y pasando diez días en coma. Aquello transformó su manera de ver la vida y lo que de verdad importa.",
      },
      {
        title: "Convertirse en padre",
        body: "Otra experiencia transformadora fue convertirse en padre. Su hijo nació con gastrosquisis y necesitó cuatro cirugías mayores justo después de nacer. Esto influyó profundamente en la perspectiva de Maxim sobre la resiliencia y sobre lo que más importa — moldeando tanto su forma de ser padre como su trabajo con jóvenes.",
      },
      {
        title: "Cómo trabaja hoy",
        body: "Maxim actúa desde valores auténticos y un propósito. Como facilitador certificado de breathwork, su trabajo con jóvenes reúne breathwork, surf, skate, desafíos en la playa, inmersión en agua fría, hogueras y conversaciones en grupo — todo diseñado para animar a salir de la zona de confort, fortalecer la seguridad en uno mismo y fomentar un mayor autoconocimiento y conexión.",
      },
    ],
    mission:
      "Su intención es sencilla: ayudarles a construir confianza, fortaleza emocional y un sentido claro de quiénes son — para que puedan afrontar la vida con coraje, resiliencia y el corazón abierto.",
    ctaLabel: "Únete al próximo retiro",
  },

  privacy: {
    heading: "Política de privacidad",
    updated: "Última actualización: 2026",
    body: [
      "Boys To Men Retreat respeta tu privacidad. Esta página explica, en términos sencillos, cómo tratamos la información que compartes con nosotros.",
      "Información que facilitas: Cuando te pones en contacto con nosotros por teléfono, WhatsApp, Instagram o correo electrónico para hacer preguntas o reservar una plaza, recibimos los datos que decides compartir — como tu nombre, datos de contacto e información sobre el participante. Los usamos únicamente para responderte y organizar el retiro.",
      "Cómo la usamos: Usamos tu información para comunicarnos contigo, gestionar las reservas y garantizar la seguridad y el bienestar de los participantes durante el retiro. No vendemos tu información a terceros.",
      "Fotos y vídeo: Durante el retiro tomamos fotos y vídeos para que los participantes se los lleven a casa. Si prefieres que tu hijo no aparezca en ninguna imagen compartida, dínoslo y lo respetaremos.",
      "Contacto: Para cualquier pregunta sobre tu privacidad o para solicitar cambios o la eliminación de tu información, ponte en contacto con nosotros a través de los datos de nuestro sitio.",
    ],
  },

  application: {
    eyebrow: "Solicita ahora",
    intro: {
      heading: "Déjanos responder a tus preguntas",
      subheading:
        "¿Tienes una pregunta o quieres solicitar plaza? Deja tus datos y un mensaje abajo y nos pondremos en contacto.",
    },
    steps: [
      {
        kind: "welcome",
        title: "Boys to Men Retreat",
        body: "Gracias por tu interés en el Boys to Men Retreat en Ericeira, Portugal. Deja tus datos y un mensaje abajo y te responderemos. Si prefieres hablar directamente, puedes llamar a Maxim J Rettich para una conversación individual al +34 600 235 207.",
        buttonLabel: "Empezar",
        meta: "Tarda un minuto",
      },
      { kind: "question", id: "name", type: "text", title: "Tu nombre", placeholder: "Escribe aquí tu respuesta…", required: true },
      { kind: "question", id: "email", type: "email", title: "Correo electrónico", placeholder: "nombre@ejemplo.com", required: true },
      { kind: "question", id: "phone", type: "tel", title: "Número de teléfono", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "message", type: "longtext", title: "Tu mensaje", placeholder: "Escribe aquí tu mensaje…", required: true },
    ] as Step[],
  },

  formUi: {
    ok: "OK",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    continueLabel: "Continuar",
    pressEnter: "pulsa",
    shiftEnter: "para crear un salto de línea",
    month: "Mes",
    day: "Día",
    year: "Año",
    prevQuestion: "Pregunta anterior",
    nextQuestion: "Pregunta siguiente",
    required: "Rellena este campo.",
    requiredChoice: "Selecciona una opción.",
    invalidEmail: "Introduce una dirección de correo electrónico válida.",
    invalidAge: "Introduce una edad válida.",
    invalidDate: "Introduce una fecha completa.",
    submitError:
      "Algo salió mal al enviar tu solicitud. Inténtalo de nuevo o llama a Maxim al +34 600 235 207.",
    successTitle: "Gracias — hemos recibido tu solicitud.",
    successBody:
      "Revisaremos tus datos y nos pondremos en contacto pronto. Si quieres hablar antes, llama a Maxim al +34 600 235 207.",
  },

  og: {
    homeTagline: "Surf · Skate Retreat",
    about: {
      eyebrow: "Acerca de",
      title: "Mensaje del fundador",
      subtitle: "La historia y la intención detrás del retiro.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      subtitle: "Cómo tratamos la información que compartes con nosotros.",
    },
  },

  seo: {
    siteDescription:
      "Un retiro de 4 días / 4 noches en Ericeira, Portugal, que acompaña a los jóvenes (9–16 años) a través del desafío, la aventura y el autodescubrimiento — surf, skate, desafíos en la playa, baños de agua fría y círculos junto a la hoguera.",
    about: {
      title: "Sobre el fundador",
      description:
        "Un mensaje de Maxim Rettich, fundador de Boys To Men Retreat — su historia, sus valores y la intención detrás del retiro.",
    },
    privacy: {
      title: "Política de privacidad",
      description: "Cómo Boys To Men Retreat trata la información que compartes con nosotros.",
    },
  },
};
