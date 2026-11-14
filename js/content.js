/* ==========================================================================
   CONTENU DU SITE — c'est le SEUL fichier à modifier pour mettre à jour le site.
   Chaque texte existe en "fr", "en" et "es". Les listes (expériences, projets...)
   s'affichent automatiquement dans l'ordre où elles sont écrites ici.
   Astuce : dans les listes de tags/compétences, "Texte FR / Text EN / Texto ES"
   affiche la bonne partie selon la langue (un texte sans " / " est commun).
   ========================================================================== */

window.SITE = {
  name: "Jonathan Díaz-Vreys",
  email: "jonathanjosediazvreys@gmail.com",
  photo: "assets/img/jonathan.png",
  langs: ["fr", "en", "es"],

  /* ---------- Textes d'interface ---------- */
  ui: {
    fr: {
      role: "Ingénieur Data, BI & IA — en alternance",
      quote: "« Les données sont les étoiles qui guident les entreprises à travers l'immense univers des opportunités. »",
      scroll: "Découvrir",
      nav: { home: "Accueil", about: "À propos", journey: "Parcours", projects: "Projets", skills: "Compétences", contact: "Contact", lang: "Langue" },
      aboutTitle: "À propos",
      factsTitle: "En bref",
      langsTitle: "Langues",
      hobbiesTitle: "En dehors des données",
      journeyTitle: "Parcours",
      workTitle: "Expériences",
      eduTitle: "Formation",
      projectsTitle: "Projets",
      featured: "Projet phare",
      academicTitle: "Projets académiques",
      readMore: "Voir le détail",
      skillsLabel: "Compétences",
      viewCode: "Voir le projet sur GitHub",
      bench: {
        title: "Principe : la strioscopie",
        source: "Source", lens: "Lentille", plate: "Plaque", knife: "Couteau", camera: "Caméra",
        steps: ["Sans défaut, la lumière est bloquée : image noire", "Un défaut dévie la lumière : point lumineux", "Le CNN détecte et classifie le défaut"]
      },
      close: "Fermer",
      skillsTitle: "Compétences",
      softTitle: "Savoir-être",
      contactTitle: "Contact",
      contactLead: "Un projet data, une opportunité d'alternance ou simplement une question ? Écrivez-moi.",
      contactCta: "M'écrire un e-mail",
      copy: "Copier l'adresse",
      copied: "Adresse copiée !",
      footer: "Conçu et développé par Jonathan Díaz-Vreys",
      loading: "chargement · "
    },
    en: {
      role: "Data, BI & AI Engineer — apprentice",
      quote: "“Data are the stars guiding businesses through the vast universe of opportunities.”",
      scroll: "Explore",
      nav: { home: "Home", about: "About", journey: "Journey", projects: "Projects", skills: "Skills", contact: "Contact", lang: "Language" },
      aboutTitle: "About me",
      factsTitle: "At a glance",
      langsTitle: "Languages",
      hobbiesTitle: "Beyond data",
      journeyTitle: "Journey",
      workTitle: "Experience",
      eduTitle: "Education",
      projectsTitle: "Projects",
      featured: "Featured project",
      academicTitle: "Academic projects",
      readMore: "Read more",
      skillsLabel: "Skills",
      viewCode: "View the project on GitHub",
      bench: {
        title: "How it works: schlieren imaging",
        source: "Source", lens: "Lens", plate: "Glass", knife: "Knife edge", camera: "Camera",
        steps: ["No defect, light is blocked: dark image", "A defect deflects light: bright spot", "The CNN detects and classifies the defect"]
      },
      close: "Close",
      skillsTitle: "Skills",
      softTitle: "Soft skills",
      contactTitle: "Contact",
      contactLead: "A data project, an apprenticeship opportunity or just a question? Drop me a line.",
      contactCta: "Send me an email",
      copy: "Copy address",
      copied: "Address copied!",
      footer: "Designed and built by Jonathan Díaz-Vreys",
      loading: "loading · "
    },
    es: {
      role: "Ingeniero de Datos, BI e IA — en alternancia",
      quote: "«Los datos son las estrellas que guían a las empresas a través del vasto universo de oportunidades.»",
      scroll: "Descubrir",
      nav: { home: "Inicio", about: "Sobre mí", journey: "Trayectoria", projects: "Proyectos", skills: "Competencias", contact: "Contacto", lang: "Idioma" },
      aboutTitle: "Sobre mí",
      factsTitle: "En resumen",
      langsTitle: "Idiomas",
      hobbiesTitle: "Más allá de los datos",
      journeyTitle: "Trayectoria",
      workTitle: "Experiencia",
      eduTitle: "Formación",
      projectsTitle: "Proyectos",
      featured: "Proyecto destacado",
      academicTitle: "Proyectos académicos",
      readMore: "Ver detalle",
      skillsLabel: "Competencias",
      viewCode: "Ver el proyecto en GitHub",
      bench: {
        title: "Principio: la estrioscopía",
        source: "Fuente", lens: "Lente", plate: "Placa", knife: "Cuchilla", camera: "Cámara",
        steps: ["Sin defecto, la luz queda bloqueada: imagen negra", "Un defecto desvía la luz: punto brillante", "La CNN detecta y clasifica el defecto"]
      },
      close: "Cerrar",
      skillsTitle: "Competencias",
      softTitle: "Habilidades blandas",
      contactTitle: "Contacto",
      contactLead: "¿Un proyecto de datos, una oportunidad de alternancia o simplemente una pregunta? Escríbeme.",
      contactCta: "Enviarme un correo",
      copy: "Copiar dirección",
      copied: "¡Dirección copiada!",
      footer: "Diseñado y desarrollado por Jonathan Díaz-Vreys",
      loading: "cargando · "
    }
  },

  /* ---------- À propos ---------- */
  about: {
    fr: [
      "Apprenti-ingénieur passionné par la donnée, je conçois des architectures et des écosystèmes BI performants, enrichis par l'IA générative.",
      "Aujourd'hui en alternance chez Grenoble École de Management, j'y construis les flux de données, le data warehouse et un portefeuille de plus de 75 tableaux de bord Power BI, tout en pilotant l'intégration de l'IA générative dans l'écosystème BI. En parallèle, je poursuis mon cursus d'ingénieur à Télécom Saint-Étienne.",
      "Ayant grandi au Salvador avec des racines belges et une scolarité au lycée français, j'aborde chaque problème avec un esprit analytique et un regard international."
    ],
    en: [
      "I'm an apprentice engineer passionate about data: I design high-performance BI architectures and ecosystems, enhanced with generative AI.",
      "As an apprentice at Grenoble École de Management, I build data pipelines, the data warehouse and a portfolio of 75+ Power BI dashboards, while leading the integration of generative AI into the BI ecosystem. Alongside this, I'm pursuing my engineering degree at Télécom Saint-Étienne.",
      "Raised in El Salvador with Belgian roots and a French-school education, I approach every problem with an analytical and international mindset."
    ],
    es: [
      "Soy ingeniero en formación apasionado por los datos: diseño arquitecturas y ecosistemas de BI de alto rendimiento, potenciados con IA generativa.",
      "En alternancia en Grenoble École de Management, construyo los flujos de datos, el data warehouse y un portafolio de más de 75 tableros Power BI, a la vez que lidero la integración de la IA generativa en el ecosistema BI. Paralelamente, curso mi carrera de ingeniería en Télécom Saint-Étienne.",
      "Crecí en El Salvador, con raíces belgas y una escolaridad en el liceo francés: abordo cada problema con un espíritu analítico y una mirada internacional."
    ]
  },

  facts: {
    fr: [
      { k: "Âge", v: "22 ans" },
      { k: "Basé à", v: "Lyon et périphérie" },
      { k: "Poste actuel", v: "Data & BI Engineer @ GEM" },
      { k: "École", v: "Télécom Saint-Étienne" },
      { k: "Origines", v: "Belgique · Salvador" }
    ],
    en: [
      { k: "Age", v: "22" },
      { k: "Based in", v: "Lyon area, France" },
      { k: "Current role", v: "Data & BI Engineer @ GEM" },
      { k: "School", v: "Télécom Saint-Étienne" },
      { k: "Roots", v: "Belgium · El Salvador" }
    ],
    es: [
      { k: "Edad", v: "22 años" },
      { k: "Ubicación", v: "Lyon y alrededores, Francia" },
      { k: "Puesto actual", v: "Data & BI Engineer @ GEM" },
      { k: "Escuela", v: "Télécom Saint-Étienne" },
      { k: "Orígenes", v: "Bélgica · El Salvador" }
    ]
  },

  /* level = niveau CECRL ; score = 1 à 6 (A1→C2) pour la jauge */
  languages: [
    { fr: "Espagnol", en: "Spanish", es: "Español", level: "C2", score: 6 },
    { fr: "Français", en: "French", es: "Francés", level: "C2", score: 6 },
    { fr: "Anglais", en: "English", es: "Inglés", level: "C1", score: 5 },
    { fr: "Néerlandais", en: "Dutch", es: "Neerlandés", level: "B2", score: 4 },
    { fr: "Portugais", en: "Portuguese", es: "Portugués", level: "B2", score: 4 }
  ],

  hobbies: {
    fr: ["Football", "Astronomie", "Sport"],
    en: ["Football", "Astronomy", "Sports"],
    es: ["Fútbol", "Astronomía", "Deporte"]
  },

  /* ---------- Expériences (format LinkedIn) ----------
     Une entreprise = un bloc. "roles" liste les postes, du plus récent au plus ancien.
     "skills" = compétences affichées sous chaque poste. */
  work: [
    {
      org: "Grenoble École de Management (GEM)",
      initials: "GEM",
      logo: "assets/img/logo-gem.png",
      fr: { meta: "Alternance · Grenoble, France" },
      en: { meta: "Apprenticeship · Grenoble, France" },
      es: { meta: "Alternancia · Grenoble, Francia" },
      roles: [
        {
          fr: {
            role: "Data & BI Engineer",
            when: "Septembre 2025 — aujourd'hui",
            points: [
              "Construction et automatisation des flux entre HubSpot CRM, ERP, référentiels de données et data warehouse avec Semarchy XDI.",
              "Conception et modélisation de l'architecture d'un nouveau data warehouse.",
              "Développement, optimisation et maintenance de 75+ tableaux de bord Power BI pilotant les décisions stratégiques de 350+ utilisateurs internes.",
              "Lead de l'étude comparative et du POC d'IA générative dans l'écosystème BI (Copilot sous Fabric, MCP Claude) : impact budgétaire, conformité RGPD, souveraineté des données — validation et déploiement de la première phase."
            ]
          },
          en: {
            role: "Data & BI Engineer",
            when: "September 2025 — present",
            points: [
              "Built and automated data flows between HubSpot CRM, ERP, master data and the data warehouse with Semarchy XDI.",
              "Designed and modelled the architecture of a new data warehouse.",
              "Develop, optimise and maintain 75+ Power BI dashboards driving strategic decisions for 350+ internal users.",
              "Led the benchmark and POC for generative AI in the BI ecosystem (Copilot in Fabric, Claude MCP): budget impact, GDPR compliance and data sovereignty — first phase approved and deployed."
            ]
          },
          es: {
            role: "Data & BI Engineer",
            when: "Septiembre 2025 — actualidad",
            points: [
              "Construcción y automatización de flujos entre HubSpot CRM, ERP, datos maestros y el data warehouse con Semarchy XDI.",
              "Diseño y modelado de la arquitectura de un nuevo data warehouse.",
              "Desarrollo, optimización y mantenimiento de más de 75 tableros Power BI que orientan las decisiones estratégicas de más de 350 usuarios internos.",
              "Líder del estudio comparativo y del POC de IA generativa en el ecosistema BI (Copilot en Fabric, MCP Claude): impacto presupuestario, cumplimiento del RGPD y soberanía de los datos — validación y despliegue de la primera fase."
            ]
          },
          skills: ["Semarchy XDI", "HubSpot", "Data warehouse", "Power BI", "Power BI Service", "IA générative / Generative AI / IA generativa"]
        },
        {
          fr: {
            role: "Data & BI Analyst",
            when: "Septembre 2024 — août 2025",
            points: [
              "Maintenance et amélioration des rapports BI gérés par le Data Management Office (Digital Factory).",
              "Ateliers avec les équipes métiers pour recueillir les besoins et proposer des solutions adaptées.",
              "Développement et test de nouveaux rapports Power BI ; création de règles de qualité des données et mise à jour des KPI.",
              "Présentation des évolutions lors du comité BI mensuel."
            ]
          },
          en: {
            role: "Data & BI Analyst",
            when: "September 2024 — August 2025",
            points: [
              "Maintained and enhanced the BI reports managed by the Data Management Office (Digital Factory).",
              "Ran workshops with business units to gather requirements and propose tailored solutions.",
              "Developed and tested new Power BI reports; created data quality rules and updated KPIs.",
              "Presented updates at the monthly BI committee."
            ]
          },
          es: {
            role: "Data & BI Analyst",
            when: "Septiembre 2024 — agosto 2025",
            points: [
              "Mantenimiento y mejora de los informes BI gestionados por el Data Management Office (Digital Factory).",
              "Talleres con los equipos de negocio para recoger necesidades y proponer soluciones a medida.",
              "Desarrollo y prueba de nuevos informes Power BI; creación de reglas de calidad de datos y actualización de KPI.",
              "Presentación de las novedades en el comité BI mensual."
            ]
          },
          skills: ["Power BI", "SQL", "Modélisation de données / Data modelling / Modelado de datos", "Qualité des données / Data quality / Calidad de datos"]
        }
      ]
    },
    {
      org: "P&V Group",
      initials: "P&V",
      logo: "assets/img/logo-pv.png",
      fr: { meta: "Stage · Bruxelles, Belgique" },
      en: { meta: "Internship · Brussels, Belgium" },
      es: { meta: "Prácticas · Bruselas, Bélgica" },
      roles: [
        {
          fr: {
            role: "Data Analyst",
            when: "Avril — juin 2024",
            points: [
              "Développement d'un algorithme de matching pour associer des prospects aux clients actifs.",
              "Tableau de bord Power BI de suivi de l'efficacité des campagnes marketing pour optimiser les investissements.",
              "Analyses ad hoc pour la direction : extraction de données via SQL et SAS."
            ]
          },
          en: {
            role: "Data Analyst",
            when: "April — June 2024",
            points: [
              "Developed a matching algorithm linking prospects to active customers.",
              "Built a Power BI dashboard tracking marketing campaign effectiveness to optimise spend.",
              "Ad hoc analyses for senior management: data extraction with SQL and SAS."
            ]
          },
          es: {
            role: "Data Analyst",
            when: "Abril — junio 2024",
            points: [
              "Desarrollo de un algoritmo de matching para asociar prospectos con clientes activos.",
              "Tablero Power BI de seguimiento de la eficacia de las campañas de marketing para optimizar la inversión.",
              "Análisis ad hoc para la dirección: extracción de datos con SQL y SAS."
            ]
          },
          skills: ["Power BI", "SQL", "SAS", "Matching"]
        }
      ]
    }
  ],

  /* ---------- Formation ---------- */
  education: [
    {
      org: "Télécom Saint-Étienne",
      fr: { title: "Diplôme d'ingénieur — Data engineering (informatique & électronique)", when: "2025 — 2028" },
      en: { title: "Engineering degree — Data engineering (computer science & electronics)", when: "2025 — 2028" },
      es: { title: "Título de ingeniero — Ingeniería de datos (informática y electrónica)", when: "2025 — 2028" }
    },
    {
      org: "Université Grenoble Alpes — IUT2",
      fr: { title: "BUT Science des Données — Visualisation et conception d'outils décisionnels", when: "2022 — 2025" },
      en: { title: "Bachelor in Data Science (BUT SD) — Visualisation & decision-support tools", when: "2022 — 2025" },
      es: { title: "Licenciatura en Ciencia de Datos (BUT SD) — Visualización y herramientas de decisión", when: "2022 — 2025" }
    },
    {
      org: "Lycée français de San Salvador",
      fr: { title: "Baccalauréat général — Mathématiques & Physique, mention Assez Bien", when: "2022" },
      en: { title: "French Baccalaureate — Mathematics & Physics, with honours", when: "2022" },
      es: { title: "Bachillerato francés — Matemáticas y Física, con mención", when: "2022" }
    }
  ],

  /* ---------- Projet phare ---------- */
  featured: {
    fr: {
      title: "SCOT — Système de contrôle optique par IA",
      meta: ["Chef de projet & lead technique data · Septembre 2025 — aujourd'hui", "Sponsor : Télécom Saint-Étienne"],
      summary: "Conception d'un système d'inspection optique basé sur l'IA pour détecter et classifier automatiquement des anomalies microscopiques sur des plaques de verre industrielles.",
      points: [
        "Direction d'une équipe pluridisciplinaire de 5 apprentis-ingénieurs (photonique, data, software) : budget, planning et feuille de route technique.",
        "Pipeline complet de classification de défauts par réseaux de neurones convolutifs (CNN) en Python, sur une architecture Azure.",
        "Livraison d'un démonstrateur industriel : acquisition d'images et traitement automatisé en temps réel pour la prise de décision."
      ]
    },
    en: {
      title: "SCOT — AI-powered optical inspection",
      meta: ["Project manager & data tech lead · September 2025 — present", "Sponsor: Télécom Saint-Étienne"],
      summary: "Designing an AI-based optical inspection system that automatically detects and classifies microscopic defects on industrial glass plates.",
      points: [
        "Leading a cross-disciplinary team of 5 apprentice engineers (photonics, data, software): budget, schedule and technical roadmap.",
        "End-to-end defect classification pipeline with convolutional neural networks (CNN) in Python, on an Azure architecture.",
        "Delivering an industrial demonstrator: image acquisition and real-time automated processing for decision-making."
      ]
    },
    es: {
      title: "SCOT — Sistema de control óptico con IA",
      meta: ["Jefe de proyecto y líder técnico de datos · Septiembre 2025 — actualidad", "Patrocinador: Télécom Saint-Étienne"],
      summary: "Diseño de un sistema de inspección óptica basado en IA para detectar y clasificar automáticamente anomalías microscópicas en placas de vidrio industriales.",
      points: [
        "Dirección de un equipo multidisciplinario de 5 ingenieros en formación (fotónica, datos, software): presupuesto, planificación y hoja de ruta técnica.",
        "Pipeline completo de clasificación de defectos con redes neuronales convolucionales (CNN) en Python, sobre una arquitectura Azure.",
        "Entrega de un demostrador industrial: adquisición de imágenes y procesamiento automatizado en tiempo real para la toma de decisiones."
      ]
    },
    link: "https://github.com/jonathandiazv/SCOT",
    tags: ["Python", "PyTorch", "CNN", "Streamlit", "Azure", "Computer vision", "Gestion de projet / Project management / Gestión de proyectos"]
  },

  /* ---------- Projets académiques ---------- */
  projects: [
    {
      img: "assets/img/proj-gf38.jpg",
      year: "2024",
      tools: ["R", "RShiny", "ACP & clustering / PCA & clustering / ACP y clustering"],
      fr: {
        tag: "Statistiques",
        title: "Analyse multivariée — Grenoble Foot 38",
        short: "Évaluer la performance athlétique des joueurs du GF38 face aux équipes de Ligue 1 et Ligue 2.",
        sections: [
          ["Objectif", "Comparer les performances physiques des joueurs et de l'équipe du GF38 à celles de la Ligue 1 et de la Ligue 2, et livrer un outil automatisé d'aide à la décision."],
          ["Données", "Données athlétiques individuelles par match du GF38 (saison 2023/2024) et métriques détaillées des équipes de Ligue 1 et Ligue 2 (2022/2023), agrégées et normalisées selon le nombre de matchs joués."],
          ["Résultats", "Analyse menée en R et restituée dans une application RShiny : sur les sprints à haute intensité, le GF38 a le potentiel pour rivaliser avec la Ligue 1, et certains joueurs en ont déjà le profil physique. Globalement, l'équipe reste en dessous de la Ligue 1 mais au-dessus de la moyenne de Ligue 2."]
        ]
      },
      en: {
        tag: "Statistics",
        title: "Multivariate analysis — Grenoble Foot 38",
        short: "Assessing GF38 players' athletic performance against Ligue 1 and Ligue 2 teams.",
        sections: [
          ["Objective", "Compare the physical performance of GF38 players and team with Ligue 1 and Ligue 2, and deliver an automated decision-support tool."],
          ["Data", "Per-match individual athletic data for GF38 (2023/2024 season) and detailed Ligue 1 and Ligue 2 team metrics (2022/2023), aggregated and normalised by matches played."],
          ["Results", "Analysis in R, delivered as an RShiny app: on high-intensity sprints GF38 can compete with Ligue 1, and some players already have a Ligue 1 physical profile. Overall the team is behind Ligue 1 but above the Ligue 2 average."]
        ]
      },
      es: {
        tag: "Estadística",
        title: "Análisis multivariante — Grenoble Foot 38",
        short: "Evaluar el rendimiento atlético de los jugadores del GF38 frente a los equipos de Ligue 1 y Ligue 2.",
        sections: [
          ["Objetivo", "Comparar el rendimiento físico de los jugadores y del equipo del GF38 con el de la Ligue 1 y la Ligue 2, y entregar una herramienta automatizada de apoyo a la decisión."],
          ["Datos", "Datos atléticos individuales por partido del GF38 (temporada 2023/2024) y métricas detalladas de los equipos de Ligue 1 y Ligue 2 (2022/2023), agregados y normalizados según el número de partidos jugados."],
          ["Resultados", "Análisis realizado en R y presentado en una aplicación RShiny: en los sprints de alta intensidad, el GF38 tiene potencial para competir con la Ligue 1, y algunos jugadores ya tienen ese perfil físico. En conjunto, el equipo queda por debajo de la Ligue 1 pero por encima de la media de la Ligue 2."]
        ]
      }
    },
    {
      img: "assets/img/proj-sfo.jpg",
      year: "2023",
      tools: ["R", "Séries temporelles / Time series / Series temporales", "Holt-Winters"],
      fr: {
        tag: "Statistiques",
        title: "Prévision du trafic — aéroport de San Francisco",
        short: "Modéliser et prévoir à court terme l'affluence de passagers à SFO.",
        sections: [
          ["Objectif", "Développer et évaluer plusieurs modèles de prévision à court terme du nombre de passagers à l'aéroport international de San Francisco à partir de l'historique."],
          ["Méthodes", "Tendance paramétrique, lissage exponentiel et Holt-Winters (additif et multiplicatif), comparés selon leur précision et leur capacité à capter tendance et saisonnalité."],
          ["Résultats", "Les prévisions confirment la poursuite des tendances historiques et l'analyse des résidus valide l'ajustement — des éléments utiles pour la planification aéroportuaire."]
        ]
      },
      en: {
        tag: "Statistics",
        title: "Traffic forecasting — San Francisco Airport",
        short: "Modelling and forecasting short-term passenger traffic at SFO.",
        sections: [
          ["Objective", "Build and evaluate several models forecasting short-term passenger traffic at San Francisco International Airport from historical data."],
          ["Methods", "Parametric trend, exponential smoothing and Holt-Winters (additive and multiplicative), compared on accuracy and ability to capture trend and seasonality."],
          ["Results", "Forecasts confirm historical trends continue and residual analysis validates the fit — useful input for airport planning."]
        ]
      },
      es: {
        tag: "Estadística",
        title: "Previsión de tráfico — aeropuerto de San Francisco",
        short: "Modelar y prever a corto plazo la afluencia de pasajeros en SFO.",
        sections: [
          ["Objetivo", "Desarrollar y evaluar varios modelos de previsión a corto plazo del número de pasajeros del aeropuerto internacional de San Francisco a partir de datos históricos."],
          ["Métodos", "Tendencia paramétrica, suavizado exponencial y Holt-Winters (aditivo y multiplicativo), comparados según su precisión y su capacidad para captar tendencia y estacionalidad."],
          ["Resultados", "Las previsiones confirman la continuidad de las tendencias históricas y el análisis de residuos valida el ajuste — información útil para la planificación aeroportuaria."]
        ]
      }
    },
    {
      img: "assets/img/proj-dwh.jpg",
      year: "2023",
      tools: ["Talend", "MySQL", "Modèle en étoile / Star schema / Modelo en estrella"],
      fr: {
        tag: "Data engineering",
        title: "Data warehouse pour la SPA du Dauphiné",
        short: "Intégration de sources multiples dans un entrepôt ROLAP avec Talend.",
        sections: [
          ["Objectif", "Mettre en place un système ROLAP pour analyser les données d'adoption et de gestion de la Société Protectrice des Animaux du Dauphiné."],
          ["Réalisation", "Processus ETL sous Talend (extraction de fichiers xlsx et xml, transformations comme le calcul des coûts de séjour, chargement dans MySQL) et modèle dimensionnel en étoile garantissant intégrité et cohérence."],
          ["Résultats", "Requêtes SQL répondant aux questions de la SPA : mois d'adoption les plus actifs, coût moyen de séjour, profils d'adoptants — avec des pistes d'analyses futures."]
        ]
      },
      en: {
        tag: "Data engineering",
        title: "Data warehouse for an animal shelter",
        short: "Integrating multiple sources into a ROLAP warehouse with Talend.",
        sections: [
          ["Objective", "Set up a ROLAP system to analyse adoption and operations data for the Dauphiné animal protection society (SPA)."],
          ["Build", "Talend ETL (xlsx and xml extraction, transformations such as stay-cost calculation, loading into MySQL) and a star-schema dimensional model ensuring integrity and consistency."],
          ["Results", "SQL queries answering the shelter's questions: busiest adoption months, average stay cost, adopter profiles — plus leads for future analyses."]
        ]
      },
      es: {
        tag: "Data engineering",
        title: "Data warehouse para un refugio de animales",
        short: "Integración de múltiples fuentes en un almacén ROLAP con Talend.",
        sections: [
          ["Objetivo", "Implementar un sistema ROLAP para analizar los datos de adopción y gestión de la Sociedad Protectora de Animales del Dauphiné (SPA)."],
          ["Realización", "Proceso ETL con Talend (extracción de archivos xlsx y xml, transformaciones como el cálculo del costo de estancia, carga en MySQL) y modelo dimensional en estrella que garantiza integridad y coherencia."],
          ["Resultados", "Consultas SQL que responden a las preguntas de la SPA: meses con más adopciones, costo medio de estancia, perfiles de adoptantes — con pistas para análisis futuros."]
        ]
      }
    },
    {
      img: "assets/img/proj-energy.jpg",
      year: "2023",
      tools: ["Power BI", "DAX", "Data viz"],
      fr: {
        tag: "Data viz",
        title: "Reporting Power BI — consommation d'énergie",
        short: "Visualiser la consommation énergétique des ménages français.",
        sections: [
          ["Objectif", "Construire un reporting interactif sur la consommation d'énergie des ménages français."],
          ["Réalisation", "Tableaux de bord Power BI : comparaison annuelle, consommation par saison et par jour, répartition heures creuses / heures pleines et coût associé."]
        ]
      },
      en: {
        tag: "Data viz",
        title: "Power BI reporting — energy consumption",
        short: "Visualising the energy consumption of French households.",
        sections: [
          ["Objective", "Build interactive reporting on French household energy consumption."],
          ["Build", "Power BI dashboards: year-over-year comparison, consumption by season and weekday, off-peak / peak split and related cost."]
        ]
      },
      es: {
        tag: "Data viz",
        title: "Reporting Power BI — consumo de energía",
        short: "Visualizar el consumo energético de los hogares franceses.",
        sections: [
          ["Objetivo", "Construir un reporting interactivo sobre el consumo de energía de los hogares franceses."],
          ["Realización", "Tableros Power BI: comparación anual, consumo por estación y por día, reparto horas valle / horas punta y costo asociado."]
        ]
      }
    },
    {
      img: "assets/img/proj-geo.jpg",
      year: "2024",
      tools: ["ArcGIS", "Collecte de données / Data collection / Recolección de datos", "SIG / GIS / SIG"],
      fr: {
        tag: "Data viz",
        title: "Dashboard géospatial — Grenoble",
        short: "Collecte de données et tableau de bord cartographique sur ArcGIS.",
        sections: [
          ["Objectif", "Collecter des données terrain et produire un tableau de bord géospatial pour le suivi des points de collecte de déchets de proximité à Grenoble."],
          ["Réalisation", "Carte interactive et indicateurs clés sous ArcGIS (nombre de points, état moyen, coûts) pour faciliter le pilotage."]
        ]
      },
      en: {
        tag: "Data viz",
        title: "Geospatial dashboard — Grenoble",
        short: "Data collection and a map-based dashboard on ArcGIS.",
        sections: [
          ["Objective", "Collect field data and produce a geospatial dashboard to monitor neighbourhood waste collection points in Grenoble."],
          ["Build", "Interactive map and key indicators in ArcGIS (number of points, average condition, costs) to support management."]
        ]
      },
      es: {
        tag: "Data viz",
        title: "Tablero geoespacial — Grenoble",
        short: "Recolección de datos y tablero cartográfico en ArcGIS.",
        sections: [
          ["Objetivo", "Recolectar datos de campo y producir un tablero geoespacial para el seguimiento de los puntos de recogida de residuos de proximidad en Grenoble."],
          ["Realización", "Mapa interactivo e indicadores clave en ArcGIS (número de puntos, estado medio, costos) para facilitar la gestión."]
        ]
      }
    }
  ],

  /* ---------- Compétences ---------- */
  skills: [
    { fr: "Data engineering & Big Data", en: "Data engineering & Big Data", es: "Ingeniería de datos y Big Data", items: ["ETL — Talend", "Semarchy XDI", "Apache Spark", "Azure Cloud", "Data warehousing"] },
    { fr: "BI & Data viz", en: "BI & Data viz", es: "BI y visualización", items: ["Power BI (expert) / Power BI (expert) / Power BI (experto)", "Tableau", "Modélisation dimensionnelle / Dimensional modelling / Modelado dimensional", "ArcGIS"] },
    { fr: "Programmation", en: "Programming", es: "Programación", items: ["Python", "SQL", "NoSQL", "C++", "R", "SAS", "VBA"] },
    { fr: "Statistiques & IA", en: "Statistics & AI", es: "Estadística e IA", items: ["Régression / Regression / Regresión", "Séries temporelles / Time series / Series temporales", "Classification / Classification / Clasificación", "Data mining", "Machine learning", "Deep learning (CNN)", "IA générative / GenAI / IA generativa"] },
    { fr: "Environnements", en: "Environments", es: "Entornos", items: ["Linux", "Windows", "Git", "TFS", "Excel avancé / Advanced Excel / Excel avanzado"] }
  ],

  soft: {
    fr: ["Polyglotte", "Persévérant", "Adaptable", "Autonome", "Résolution de problèmes", "Créatif", "Leadership"],
    en: ["Polyglot", "Persistent", "Adaptable", "Autonomous", "Problem solving", "Creative", "Leadership"],
    es: ["Políglota", "Perseverante", "Adaptable", "Autónomo", "Resolución de problemas", "Creativo", "Liderazgo"]
  }
};
