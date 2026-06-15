import type { Step } from "@/lib/application-form";
import type { Dictionary } from "@/dictionaries/en";

/**
 * Portuguese (European / pt-PT) translation.
 * ⚠️ Machine-assisted translation — review by a native speaker recommended.
 * The legal screens (`application.steps` waiver/release/medical) are a legal
 * document and must be reviewed by a qualified person before launch.
 */
export const pt: Dictionary = {
  meta: {
    tagline: "Orientar jovens rapazes através do desafio, da aventura e da autodescoberta",
  },

  nav: [
    { label: "Sobre", href: "/about" },
    { label: "Porquê", href: "/#why" },
    { label: "Incluído", href: "/#included" },
    { label: "Equipa", href: "/#team" },
    { label: "Candidatar", href: "/#apply" },
    { label: "Contacto", href: "/#contact" },
  ],

  header: {
    bookAPlace: "Reservar um lugar",
    openMenu: "Abrir menu",
    languageLabel: "Idioma",
  },

  hero: {
    badge: "Datas flexíveis disponíveis",
    title: "Boys To Men Retreat",
    subtitle: "Orientar jovens rapazes através do desafio, da aventura e da autodescoberta",
    primaryCta: { label: "Reservar um lugar", href: "/#contact" },
    secondaryCta: { label: "Porque existe", href: "/#why" },
    stats: [
      { value: "4 dias", label: "4 noites" },
      { value: "9–16", label: "anos de idade" },
      { value: "Ericeira", label: "Portugal" },
      { value: "700 €", label: "tudo incluído" },
    ],
  },

  why: {
    eyebrow: "A missão",
    heading: "Porque existe este retiro",
    lead: "Os rapazes de hoje estão a crescer sem um rito de passagem.",
    paragraphs: [
      "Os rapazes de hoje enfrentam um mundo de ecrãs sem fim, pressão e distração — e demasiado poucos momentos que lhes exijam algo verdadeiro.",
      "A maioria dos rapazes não precisa de mais um sermão. Precisam de desafio. Precisam de orientação. Precisam de modelos masculinos fortes. E precisam de sentir que fazem parte de algo real.",
      "Esta experiência foi concebida para ajudar os rapazes a reconectarem-se com quem são — em vez de se conformarem às expectativas exteriores.",
    ],
    ageGroupsHeading: "Dois escalões etários",
    ageGroupsNote:
      "Dos nove aos dezasseis é um intervalo amplo, por isso, na prática, os rapazes são organizados em dois escalões etários. Os desafios, o acompanhamento e as conversas são ajustados ao ponto em que cada grupo se encontra.",
    ageGroups: [
      { range: "9 – 13", label: "Grupo mais novo" },
      { range: "13 – 16", label: "Grupo mais velho" },
    ],
    closing:
      "Não prometo “consertar” o seu filho em quatro dias. Mas estamos a criar uma experiência que ele recordará para o resto da vida — uma que planta o tipo de sementes que crescem para dar um jovem forte, sólido e capaz.",
    imageAlt:
      "Um treinador com cinco rapazes a segurar os seus skates no skatepark",
  },

  outcomes: {
    eyebrow: "Os resultados",
    heading: "O que os rapazes levam para casa",
    subheading: "Competências e valores reais que perduram para além dos quatro dias.",
    items: [
      { title: "Autorrespeito e disciplina", description: "Uma base de autoestima construída ao comparecer e ir até ao fim." },
      { title: "Confiança sem arrogância", description: "Uma crença tranquila e sólida em si próprios, conquistada através de desafio real." },
      { title: "Gerir pressão e emoção", description: "Ferramentas para se manterem calmos, focados e no controlo quando as coisas ficam difíceis." },
      { title: "Fraternidade e responsabilidade", description: "Cuidar uns dos outros e assumir o seu papel no grupo." },
      { title: "Coragem", description: "Ultrapassar a sua zona de conforto e descobrir do que são capazes." },
      { title: "Masculinidade saudável", description: "Compreender o que significa ser um jovem forte, gentil e de confiança." },
    ],
  },

  included: {
    eyebrow: "A experiência",
    heading: "O que está incluído",
    subheading: "Está tudo tratado — alojamento, refeições, acompanhamento e as experiências pelo meio.",
    items: [
      { title: "Alojamento", description: "Moradia numa excelente localização, mesmo em frente ao pointbreak da Ericeira.", emoji: "🏡" },
      { title: "Surf", description: "Garantimos que vai aprender a surfar as ondas mais perfeitas da Ericeira, com instrutores experientes.", emoji: "🌊" },
      { title: "Skate", description: "Progrida ao seu próprio ritmo, aprenda a cair, a levantar-se e a continuar.", emoji: "🛹" },
      { title: "Desafio na praia", description: "Corridas de obstáculos em equipa, transporte de areia, corridas de velocidade e tarefas de coordenação que constroem fraternidade.", emoji: "🏖️" },
      { title: "Banho de água fria", description: "Sessões guiadas de exposição a água fria, concebidas para desenvolver resiliência, confiança, foco e controlo emocional.", emoji: "❄️" },
      { title: "Fogueira", description: "Noites à volta da fogueira a falar de disciplina, respeito, autoconfiança, responsabilidade e superação de medos — através de conversa, histórias e risos partilhados.", emoji: "🔥" },
      { title: "Refeições", description: "Pequeno-almoço, almoço e jantar. Cozinhar e comer juntos tornam-se momentos de ligação, trabalho de equipa e responsabilidade partilhada.", emoji: "🍽️" },
      { title: "Foto e vídeo", description: "Captamos fotos e vídeos para os rapazes levarem para casa.", emoji: "📸" },
    ],
  },

  gallery: {
    eyebrow: "Na costa",
    heading: "Momentos do retiro",
    subheading: "Surf, skate, areia e fraternidade na costa da Ericeira.",
    tiles: [
      { src: "/img/skateboarder-air-bowl.jpg", label: "Salto no ar", alt: "Um rapaz salta com o seu skate por cima da bowl no skatepark" },
      { src: "/img/boy-skateboarding-skatepark.jpg", label: "Sessões de skate", alt: "Um rapaz de capacete e proteções a fazer um truque no skatepark" },
      { src: "/img/coach-teaching-skatepark-ramp.jpg", label: "Acompanhamento na rampa", alt: "Um treinador a orientar um rapaz a descer a rampa enquanto outros observam" },
      { src: "/img/coach-high-five-skatepark.jpg", label: "Pequenas vitórias, grandes high-fives", alt: "Um treinador dá um high-five a um rapaz sorridente no skatepark" },
      { src: "/img/kids-group-beach.jpg", label: "Fraternidade", alt: "Quatro rapazes a carregar um amigo em conjunto na praia" },
      { src: "/img/boy-hiking-coastal-trail.jpg", label: "Aventuras na costa", alt: "Um rapaz a subir um trilho costeiro arenoso por colinas verdes" },
      { src: "/img/boy-sandbag-beach-fitness.jpg", label: "Desafios na praia", alt: "Um rapaz a carregar um saco de areia pesado durante um desafio de fitness na praia" },
      { src: "/img/boy-playing-beach-sand.jpg", label: "Brincadeira e areia", alt: "Um rapaz a brincar e a cavar na areia da praia" },
      { src: "/img/boy-holding-longboard.jpg", label: "Pronto para rolar", alt: "Um rapaz com proteções de skate sorri enquanto segura uma longboard colorida" },
    ],
  },

  pricing: {
    eyebrow: "Reserve a sua semana",
    heading: "Junte-se ao próximo retiro",
    price: "700 €",
    duration: "4 dias / 4 noites",
    note: "Datas flexíveis disponíveis — entre em contacto para encontrar a semana certa.",
    includes: [
      "Alojamento na moradia",
      "Pequeno-almoço, almoço e jantar",
      "Aulas de surf com a Blue Ocean Surf School",
      "Acompanhamento de skate com a Skateschool 36",
      "Desafios na praia e sessões de água fria",
      "Círculos à fogueira e escrita reflexiva",
      "Fotos e vídeos para levar para casa",
    ],
    cta: { label: "Reservar um lugar", href: "/#contact" },
  },

  team: {
    eyebrow: "As pessoas",
    heading: "Conheça a equipa",
    subheading:
      "Acreditamos que os jovens rapazes não precisam apenas de instrução — precisam de presença, orientação e modelos fortes. A nossa equipa está aqui para criar um ambiente de confiança, desafio, fraternidade e crescimento.",
    members: [
      {
        name: "Maxim Rettich",
        role: "Fundador e Anfitrião",
        bio: "54 anos, neerlandês de nascimento, fluente em inglês e espanhol, e facilitador certificado de breathwork. Pai de dois filhos — um rapaz de 9 anos e uma rapariga de 13 — a viver na Ericeira, Portugal. O seu percurso de vida levou-o por todo o mundo, moldado por uma profunda paixão pelo desporto, pelo crescimento pessoal e pela busca de algo mais significativo.",
        initials: "MR",
        kind: "photo",
        image: "/img/max-richter.jpg",
        imageAlt: "Maxim Rettich, fundador do Boys To Men Retreat, a sorrir ao ar livre com um boné",
      },
      {
        name: "Rafa",
        role: "Skateschool 36 Ericeira — Treinador",
        bio: "Anos de experiência em skate. \"Adoro ajudar as pessoas a ganhar confiança nas suas pranchas, a aprender novas competências e, acima de tudo, a divertirem-se.\"",
        initials: "R",
        kind: "photo",
        image: "/img/rafa.jpg",
        imageAlt: "Rafa, treinador de skate, a percorrer a borda de uma bowl no seu skate",
      },
      {
        name: "Blue Ocean Surf School",
        role: "Instrução de surf — Ribeira d'Ilhas",
        bio: "A nossa escola já ensinou milhares de alunos, e hoje conseguimos avaliar e corrigir técnicas incorretas para que os alunos melhorem e avancem no seu percurso de surf.",
        initials: "BO",
        kind: "logo",
        image: "/img/blue-ocean.png",
        imageAlt: "Logótipo da Blue Ocean Ericeira Surf School",
      },
    ],
  },

  contact: {
    eyebrow: "Entre em contacto",
    heading: "Pronto para dar o próximo passo?",
    subheading: "Contacte-nos com qualquer questão ou para reservar um lugar. As datas são flexíveis — ajudamo-lo a encontrar a semana certa.",
    whatsappLabel: "Mensagem no WhatsApp",
  },

  footer: {
    explore: "Explorar",
    home: "Início",
    aboutFounder: "Sobre o fundador",
    included: "O que está incluído",
    privacy: "Política de Privacidade",
    getInTouch: "Entre em contacto",
  },

  about: {
    eyebrow: "Sobre",
    heading: "Mensagem do fundador",
    intro:
      "Maxim viveu grandes sucessos e desafios significativos — momentos que o puseram à prova e, em última análise, definiram quem ele é hoje.",
    imageAlt: "Maxim Rettich, fundador do Boys To Men Retreat, a sorrir ao ar livre com um boné",
    sections: [
      {
        title: "Um ponto de viragem",
        body: "Um momento decisivo surgiu quando sobreviveu a um grave acidente de automóvel, permanecendo submerso durante oito minutos e passando dez dias em coma. Isso redefiniu a forma como vê a vida e o que realmente importa.",
      },
      {
        title: "Tornar-se pai",
        body: "Outra experiência transformadora foi tornar-se pai. O seu filho nasceu com gastrosquise e necessitou de quatro grandes cirurgias logo após o nascimento. Isto influenciou profundamente a perspetiva de Maxim sobre a resiliência e sobre o que mais importa — moldando tanto a sua parentalidade como o seu trabalho com jovens.",
      },
      {
        title: "Como trabalha hoje",
        body: "Maxim atua a partir de valores autênticos e de um propósito. Como facilitador certificado de breathwork, o seu trabalho com jovens reúne breathwork, surf, skate, desafios na praia, imersão em água fria, fogueiras e conversas em grupo — tudo concebido para incentivar a saída da zona de conforto, construir autoconfiança e promover um maior autoconhecimento e ligação.",
      },
    ],
    mission:
      "A sua intenção é simples: ajudá-los a construir confiança, força emocional e um sentido claro de quem são — para que possam enfrentar a vida com coragem, resiliência e um coração aberto.",
    ctaLabel: "Junte-se ao próximo retiro",
  },

  privacy: {
    heading: "Política de Privacidade",
    updated: "Última atualização: 2026",
    body: [
      "O Boys To Men Retreat respeita a sua privacidade. Esta página explica, em termos simples, como tratamos a informação que partilha connosco.",
      "Informação que fornece: Quando nos contacta por telefone, WhatsApp, Instagram ou e-mail para colocar questões ou reservar um lugar, recebemos os dados que escolhe partilhar — como o seu nome, contactos e informações sobre o participante. Usamos isto apenas para lhe responder e para organizar o retiro.",
      "Como a usamos: Usamos a sua informação para comunicar consigo, organizar reservas e garantir a segurança e o bem-estar dos participantes durante o retiro. Não vendemos a sua informação a terceiros.",
      "Fotos e vídeo: Durante o retiro tiramos fotos e vídeos para os participantes levarem para casa. Se preferir que o seu filho não apareça em qualquer imagem partilhada, diga-nos e respeitaremos isso.",
      "Contacto: Para qualquer questão sobre a sua privacidade ou para solicitar alterações ou a eliminação da sua informação, contacte-nos através dos dados disponíveis no nosso site.",
    ],
  },

  application: {
    eyebrow: "Candidate-se agora",
    intro: {
      heading: "Deixe-nos responder às suas questões",
      subheading:
        "Confiar o seu filho a alguém levanta questões legítimas. Inicie a candidatura abaixo — demora cerca de 7 minutos e é um pedido de informação, não um compromisso.",
    },
    steps: [
      {
        kind: "welcome",
        title: "Candidatura ao Boys to Men Retreat",
        body: "Obrigado pelo seu interesse no Boys to Men Retreat na Ericeira, Portugal. Compreendemos que confiar o seu filho a outra pessoa traz consigo questões e preocupações importantes. Este formulário é apenas uma candidatura e não uma inscrição direta. Existem dois escalões etários: rapazes dos 9–13 e rapazes dos 13–16. As datas do retiro são flexíveis para ambos os escalões. Se preferir falar diretamente, pode ligar a Maxim J Rettich para uma conversa individual através do +34 600 235 207.",
        buttonLabel: "Iniciar candidatura",
        meta: "Demora 7 minutos",
      },
      { kind: "question", id: "parentEmail", type: "email", title: "Endereço de e-mail do pai/mãe ou tutor", placeholder: "nome@exemplo.com", required: true },
      { kind: "question", id: "parentNames", type: "text", title: "Nome(s) do pai/mãe ou tutor", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "countryTown", type: "text", title: "País e localidade", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "occupation", type: "text", title: "Profissão", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "parentPhone", type: "tel", title: "Número de telefone do pai/mãe ou tutor", description: "Após a reserva, será adicionado a um grupo de WhatsApp.", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "familyStructure", type: "longtext", title: "Qual é a atual estrutura familiar?", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "childName", type: "text", title: "Nome da criança", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "childAge", type: "number", title: "Idade da criança", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "childDescription", type: "longtext", title: "Descreva o seu filho em algumas frases", placeholder: "Escreva aqui a sua resposta…", required: true },
      { kind: "question", id: "allergies", type: "longtext", title: "Alergias", placeholder: "Escreva aqui a sua resposta…" },
      { kind: "question", id: "medication", type: "longtext", title: "Medicação", description: "Se aplicável, seja o mais específico possível. Também discutiremos isto pessoalmente em detalhe.", placeholder: "Escreva aqui a sua resposta…" },
      { kind: "question", id: "emergencyContact", type: "tel", title: "Número de contacto de emergência", placeholder: "+34 600 235 207", required: true },
      { kind: "question", id: "photoConsent", type: "choice", title: "Autoriza-nos a usar fotos do seu filho no nosso site e na nossa página de Instagram?", description: "Nunca usamos fotos que mostrem crianças em momentos vulneráveis ou emotivos.", options: ["Sim", "Não"], required: true },
      {
        kind: "legal",
        id: "liabilityWaiver",
        title: "Termo de responsabilidade e assunção de risco",
        body: "Eu, abaixo-assinado, pai/mãe ou tutor legal do participante acima identificado, compreendo que a participação no Boys to Men Retreat pode incluir atividades físicas, emocionais, recreativas, ao ar livre, de grupo, de mentoria, de fitness e de desenvolvimento pessoal que comportam riscos inerentes, incluindo, entre outros, lesões físicas, stress emocional, acidentes durante o transporte ou as atividades, doença ou emergências médicas, e perigos ao ar livre ou ambientais. Reconheço que a participação é voluntária e que o meu filho está física, mental e emocionalmente apto a participar nas atividades do retiro. Assumo consciente e voluntariamente todos os riscos associados à participação no retiro, sejam conhecidos ou desconhecidos.",
      },
      {
        kind: "legal",
        id: "releaseOfLiability",
        title: "Renúncia de responsabilidade",
        body: "Na máxima medida permitida por lei, liberto, renuncio, exonero e isento de responsabilidade o Boys to Men Retreat, incluindo os seus proprietários, organizadores, treinadores, mentores, voluntários, colaboradores, prestadores de serviços, afiliados e representantes, de toda e qualquer reclamação, responsabilidade, exigência, dano, perda, custo ou causa de ação decorrente ou relacionada com a participação no retiro, incluindo as resultantes de negligência simples. Esta renúncia aplica-se a lesões pessoais, danos materiais, sofrimento emocional, doença, acidentes, morte e quaisquer incidentes imprevistos ocorridos durante ou em relação ao retiro.",
      },
      {
        kind: "legal",
        id: "medicalAuthorization",
        title: "Autorização médica",
        body: "Autorizo a equipa e os organizadores do retiro a obter tratamento médico de emergência para o meu filho, se considerado necessário. Compreendo que serão envidados todos os esforços razoáveis para me contactar em caso de emergência. Aceito a total responsabilidade financeira por qualquer tratamento médico, transporte, medicação ou serviços de emergência prestados.",
      },
      { kind: "question", id: "dateSigned", type: "date", title: "Data de assinatura", required: true },
    ] as Step[],
  },

  formUi: {
    ok: "OK",
    submit: "Enviar candidatura",
    sending: "A enviar…",
    continueLabel: "Continuar",
    pressEnter: "prima",
    shiftEnter: "para criar uma quebra de linha",
    month: "Mês",
    day: "Dia",
    year: "Ano",
    prevQuestion: "Pergunta anterior",
    nextQuestion: "Pergunta seguinte",
    required: "Preencha este campo.",
    requiredChoice: "Selecione uma opção.",
    invalidEmail: "Introduza um endereço de e-mail válido.",
    invalidAge: "Introduza uma idade válida.",
    invalidDate: "Introduza uma data completa.",
    submitError:
      "Ocorreu um erro ao enviar a sua candidatura. Tente novamente ou ligue a Maxim através do +34 600 235 207.",
    successTitle: "Obrigado — a sua candidatura foi recebida.",
    successBody:
      "Vamos analisar os seus dados e entrar em contacto em breve. Se quiser falar mais cedo, ligue a Maxim através do +34 600 235 207.",
  },

  og: {
    homeTagline: "Surf · Skate Retreat",
    about: {
      eyebrow: "Sobre",
      title: "Mensagem do fundador",
      subtitle: "A história e a intenção por trás do retiro.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Política de Privacidade",
      subtitle: "Como tratamos a informação que partilha connosco.",
    },
  },

  seo: {
    siteDescription:
      "Um retiro de 4 dias / 4 noites na Ericeira, Portugal, que orienta jovens rapazes (9–16) através do desafio, da aventura e da autodescoberta — surf, skate, desafios na praia, banhos de água fria e círculos à fogueira.",
    about: {
      title: "Sobre o fundador",
      description:
        "Uma mensagem de Maxim Rettich, fundador do Boys To Men Retreat — a sua história, os seus valores e a intenção por trás do retiro.",
    },
    privacy: {
      title: "Política de Privacidade",
      description: "Como o Boys To Men Retreat trata a informação que partilha connosco.",
    },
  },
};
