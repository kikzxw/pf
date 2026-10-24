/* ============================================================
   DATA.JS — Contenu du portfolio.
   Garde uniquement les informations qui correspondent à ton parcours.
   ============================================================ */

const SITE = {
  profile: {
    firstName: "Ibrahim",
    lastName: "POULAIN",
    initials: ">_",
    status: "Élève au lycée Simone de Beauvoir",
    domain: "Formation CIEL · informatique · réseaux · électronique",
    tagline: "En première CIEL, j’explore la cybersécurité, l’informatique, les réseaux et l’électronique — et je mets tout cela en pratique chez moi à travers des projets personnels : bots Telegram, outils en ligne de commande et automatisation en Python.",
    location: "Toulouse, France",
    email: "ibrahimpoulain5@gmail.com",
    available: "En formation"
  },

  links: {
    github: "",
    linkedin: "",
    portfolio: "",
    phone: "07 69 63 95 46"
  },

  about: {
    intro: [
      "Élève au lycée Simone de Beauvoir, à Gragnague, je suis en première CIEL (Cybersécurité, Informatique et réseaux, Électronique) après une seconde MTNE. Cette formation me donne des bases solides en programmation, en réseaux et en sécurité, que je prolonge chez moi à travers des projets personnels.",
      "J’ai effectué un stage chez ACTIA AUTOMOTIVE, une expérience très enrichissante et agréable qui m’a fait découvrir le monde professionnel. Curieux de nature, j’aime apprendre en réalisant : je développe des bots Telegram, des outils en Python et des automatisations qui me permettent de transformer les notions vues en cours en réalisations concrètes."
    ],
    facts: [
      { label: "Âge", value: "16 ans" },
      { label: "Niveau", value: "Première CIEL" },
      { label: "Parcours", value: "Seconde MTNE → CIEL" },
      { label: "Localisation", value: "Toulouse, France" }
    ],
    goals: [
      {
        text: "Approfondir Python en réalisant des scripts et des projets personnels.",
        source: "https://docs.python.org/fr/3/tutorial/index.html",
        sourceLabel: "Tutoriel officiel Python"
      },
      {
        text: "Continuer à créer et améliorer mes bots Telegram et Discord.",
        source: "https://core.telegram.org/bots/api",
        sourceLabel: "Documentation Telegram Bot API"
      },
      {
        text: "Apprendre à protéger les comptes et les données avec des mots de passe robustes et uniques.",
        source: "https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe",
        sourceLabel: "Conseils de la CNIL"
      },
      {
        text: "Découvrir et appliquer les bonnes pratiques d’hygiène informatique recommandées par l’ANSSI.",
        source: "https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique",
        sourceLabel: "Guide d’hygiène informatique de l’ANSSI"
      }
    ]
  },

  skills: [
    {
      category: "Programmation",
      icon: "python",
      items: ["Python (scripts et outils)", "Bots Telegram (Bot API)", "Bots Discord", "Ligne de commande (CLI)", "Automatisation de tâches"]
    },
    {
      category: "Informatique",
      icon: "code",
      items: ["Bases de la programmation", "Notions de HTML et CSS", "Bureautique", "Gestion de fichiers", "Lecture et débogage de code"]
    },
    {
      category: "Réseaux",
      icon: "network",
      items: ["Notions d’adressage IP", "Architecture des réseaux", "Notions de TCP/IP", "Découverte en cours"]
    },
    {
      category: "Cybersécurité",
      icon: "shield",
      items: ["Hygiène informatique (ANSSI)", "Mots de passe robustes", "Sensibilisation aux menaces", "Premières notions d’OSINT"]
    },
    {
      category: "Électronique",
      icon: "cpu",
      items: ["Composants électroniques", "Notions de mesure", "Lecture de schémas", "Découverte en formation"]
    }
  ],

  projects: [
    {
      name: "Bot Telegram Multitool",
      description: "Un assistant Telegram qui regroupe mes outils au même endroit : recherches OSINT, utilitaires pour Discord et génération de fiches d’identité, le tout depuis une conversation.",
      image: "assets/project-multitool.svg",
      status: "Projet personnel",
      tech: ["Python", "Telegram Bot API", "OSINT", "Outils Discord", "Fiche d’identité"]
    },
    {
      name: "Multitool Python en CLI",
      description: "La version ligne de commande du Multitool : mêmes fonctionnalités (OSINT, outils Discord, fiches d’identité) mais utilisable directement dans un terminal, sans dépendre de Telegram.",
      image: "assets/project-python-cli.svg",
      status: "Projet personnel",
      tech: ["Python", "CLI", "OSINT", "Outils Discord", "Fiche d’identité"]
    },
    {
      name: "Bot Telegram islamique",
      description: "Un compagnon du quotidien : horaires de prière, lecture ou écoute du Coran et notifications à l’heure de la prière, envoyées automatiquement par le bot.",
      image: "assets/project-prayer-bot.svg",
      status: "Projet personnel",
      tech: ["Python", "Telegram", "Horaires de prière", "Coran", "Notifications"]
    }
  ],

  timeline: [
    {
      date: "Collège",
      type: "Scolarité",
      title: "Collège Simone Veil",
      place: "Parcours scolaire",
      description: "Scolarité au collège, où sont nées mes premières curiosités pour l’informatique et les nouvelles technologies."
    },
    {
      date: "Seconde",
      type: "Formation",
      title: "Seconde MTNE",
      place: "Parcours MTNE",
      description: "Découverte de la maintenance, des réseaux et de l’électronique : un parcours technologique qui m’a orienté vers la formation CIEL."
    },
    {
      date: "Stage",
      type: "Expérience",
      title: "Stage chez ACTIA AUTOMOTIVE",
      place: "ACTIA AUTOMOTIVE",
      description: "Une première immersion en entreprise, très enrichissante et agréable : observation du fonctionnement d’une entreprise et découverte du travail en équipe."
    },
    {
      date: "Actuellement",
      type: "Formation",
      title: "Première CIEL",
      place: "Lycée Simone de Beauvoir, Gragnague",
      description: "Cybersécurité, Informatique et réseaux, Électronique : j’y consolide mes bases théoriques, que je complète par des projets personnels."
    }
  ],

  cv: {
    file: "assets/cv.pdf",
    education: [
      { period: "Actuellement", title: "Première CIEL — Cybersécurité, Informatique et réseaux, Électronique", place: "Lycée Simone de Beauvoir, Gragnague" },
      { period: "Seconde", title: "Seconde MTNE", place: "Parcours technologique" }
    ],
    experience: [
      {
        period: "Stage",
        title: "Stage en entreprise",
        place: "ACTIA AUTOMOTIVE",
        detail: "Une expérience très enrichissante et agréable : découverte du fonctionnement d’une entreprise, du travail en équipe et du rythme de la vie professionnelle."
      }
    ],
    languages: [
      { name: "Français", level: "Langue maternelle · courant" },
      { name: "Anglais", level: "B1" }
    ],
    certifications: [],
    interests: [
      "Programmation Python",
      "Bots Telegram et Discord",
      "Cybersécurité",
      "Réseaux",
      "Électronique",
      "Création de projets personnels",
      "Veille informatique"
    ]
  },

  contact: {
    message: "Une question sur ma formation, mes projets ou un échange autour du numérique ? Écris-moi, je réponds volontiers.",
    formEndpoint: ""
  }
};
