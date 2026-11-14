/* ==========================================================================
   CONTENU DU SITE — c'est le SEUL fichier à modifier pour mettre à jour le site.
   Chaque texte existe en "fr" et "en". Les listes (expériences, projets...)
   s'affichent automatiquement dans l'ordre où elles sont écrites ici.
   Astuce : dans les listes de tags/compétences, "Texte FR / Text EN" affiche
   la partie gauche en français et la partie droite en anglais.
   ========================================================================== */

window.SITE = {
  name: "Jonathan Díaz-Vreys",
  email: "jonathanjosediazvreys@gmail.com",
  photo: "assets/img/jonathan.png",

  /* ---------- Textes d'interface ---------- */
  ui: {
    fr: {
      role: "Ingénieur Data, BI & IA — en alternance",
      quote: "« Les données sont les étoiles qui guident les entreprises à travers l'immense univers des opportunités. »",
      status: "Ouvert aux opportunités",
      scroll: "Découvrir",
      nav: { home: "Accueil", about: "À propos", journey: "Parcours", projects: "Projets", skills: "Compétences", contact: "Contact", lang: "Switch to English" },
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
      status: "Open to opportunities",
      scroll: "Explore",
      nav: { home: "Home", about: "About", journey: "Journey", projects: "Projects", skills: "Skills", contact: "Contact", lang: "Passer en français" },
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
    }
  },

  /* ---------- À propos ---------- */
  about: {
    fr: [
      "Apprenti-ingénieur passionné par la donnée, je conçois des architectures et des écosystèmes BI performants, enrichis par l'IA générative.",
      "Aujourd'hui en alternance chez Grenoble École de Management, j'y construis les flux de données, le data warehouse et un portefeuille de plus de 75 tableaux de bord Power BI, tout en pilotant l'intégration de l'IA générative dans l'écosystème BI. En parallèle, je poursuis mon cursus d'ingénieur à Télécom Saint-Étienne.",
      "Ayant grandi au Salvador avec des racines belges et une scolarité au lycée français, j'aborde chaque problème avec un regard international — et en cinq langues."
    ],
    en: [
      "I'm an apprentice engineer passionate about data: I design high-performance BI architectures and ecosystems, enhanced with generative AI.",
      "As an apprentice at Grenoble École de Management, I build data pipelines, the data warehouse and a portfolio of 75+ Power BI dashboards, while leading the integration of generative AI into the BI ecosystem. Alongside this, I'm pursuing my engineering degree at Télécom Saint-Étienne.",
      "Raised in El Salvador with Belgian roots and a French-school education, I approach every problem with an international mindset — in five languages."
    ]
  },

  facts: {
    fr: [
      { k: "Basé à", v: "Saint-Étienne & Strasbourg" },
      { k: "Poste actuel", v: "Data & BI Engineer @ GEM" },
      { k: "École", v: "Télécom Saint-Étienne" },
      { k: "Origines", v: "Belgique · Salvador" }
    ],
    en: [
      { k: "Based in", v: "Saint-Étienne & Strasbourg, FR" },
      { k: "Current role", v: "Data & BI Engineer @ GEM" },
      { k: "School", v: "Télécom Saint-Étienne" },
      { k: "Roots", v: "Belgium · El Salvador" }
    ]
  },

  /* level = niveau CECRL ; score = 1 à 6 (A1→C2) pour la jauge */
  languages: [
    { fr: "Espagnol", en: "Spanish", level: "C2", score: 6 },
    { fr: "Français", en: "French", level: "C2", score: 6 },
    { fr: "Anglais", en: "English", level: "C1", score: 5 },
    { fr: "Néerlandais", en: "Dutch", level: "B2", score: 4 },
    { fr: "Portugais", en: "Portuguese", level: "B2", score: 4 }
  ],

  hobbies: {
    fr: ["Football", "Astronomie", "Sport"],
    en: ["Football", "Astronomy", "Sports"]
  },

  /* ---------- Expériences ---------- */
  work: [
    {
      org: "Grenoble École de Management (GEM)",
      fr: {
        role: "Alternant Data & BI Engineer",
        when: "Sept. 2024 — aujourd'hui · Grenoble",
        points: [
          "Construction et automatisation des flux entre HubSpot CRM, ERP, référentiels de données et data warehouse avec Semarchy XDI.",
          "Conception et modélisation de l'architecture d'un nouveau data warehouse.",
          "Développement, optimisation et maintenance de 75+ tableaux de bord Power BI pilotant les décisions stratégiques de 350+ utilisateurs internes.",
          "Traduction des besoins métiers en spécifications techniques et fonctionnelles BI, en lien étroit avec les équipes.",
          "Lead de l'étude comparative et du POC d'IA générative dans l'écosystème BI (Copilot sous Fabric, MCP Claude) : impact budgétaire, conformité RGPD, souveraineté des données — validation et déploiement de la première phase."
        ]
      },
      en: {
        role: "Data & BI Engineer (apprenticeship)",
        when: "Sept. 2024 — present · Grenoble, France",
        points: [
          "Built and automated data flows between HubSpot CRM, ERP, master data and the data warehouse with Semarchy XDI.",
          "Designed and modelled the architecture of a new data warehouse.",
          "Develop, optimise and maintain 75+ Power BI dashboards driving strategic decisions for 350+ internal users.",
          "Work closely with business teams to turn operational needs into technical and functional BI specifications.",
          "Led the benchmark and POC for generative AI in the BI ecosystem (Copilot in Fabric, Claude MCP): budget impact, GDPR compliance and data sovereignty — first phase approved and deployed."
        ]
      },
      tags: ["Semarchy XDI", "Power BI", "Data Warehouse", "HubSpot", "Fabric", "GenAI"]
    },
    {
      org: "P&V Group",
      fr: {
        role: "Stage Data Analyst",
        when: "Avr. — juin 2024 · Bruxelles",
        points: [
          "Développement d'un algorithme de matching pour associer des prospects aux clients actifs.",
          "Tableau de bord Power BI de suivi de l'efficacité des campagnes marketing pour optimiser les investissements.",
          "Analyses ad hoc pour la direction : extraction de données via SQL et SAS."
        ]
      },
      en: {
        role: "Data Analyst Intern",
        when: "Apr. — June 2024 · Brussels, Belgium",
        points: [
          "Developed a matching algorithm linking prospects to active customers.",
          "Built a Power BI dashboard tracking marketing campaign effectiveness to optimise spend.",
          "Ad hoc analyses for senior management: data extraction with SQL and SAS."
        ]
      },
      tags: ["Power BI", "SQL", "SAS", "Matching"]
    }
  ],

  /* ---------- Formation ---------- */
  education: [
    {
      org: "Télécom Saint-Étienne",
      fr: { title: "Diplôme d'ingénieur — Data engineering (informatique & électronique)", when: "2025 — 2028" },
      en: { title: "Engineering degree — Data engineering (computer science & electronics)", when: "2025 — 2028" }
    },
    {
      org: "Université Grenoble Alpes — IUT2",
      fr: { title: "BUT Science des Données — Visualisation et conception d'outils décisionnels", when: "2022 — 2025" },
      en: { title: "Bachelor in Data Science (BUT SD) — Visualisation & decision-support tools", when: "2022 — 2025" }
    },
    {
      org: "Lycée français de San Salvador",
      fr: { title: "Baccalauréat général — Mathématiques & Physique, mention Assez Bien", when: "2022" },
      en: { title: "French Baccalaureate — Mathematics & Physics, with honours", when: "2022" }
    }
  ],

  /* ---------- Projet phare ---------- */
  featured: {
    fr: {
      title: "Système d'inspection optique par IA",
      meta: "Chef de projet & lead technique data · Sept. 2025 — aujourd'hui · Sponsor : Télécom Saint-Étienne",
      summary: "Conception d'un système d'inspection optique basé sur l'IA pour détecter et classifier automatiquement des anomalies microscopiques sur des plaques de verre industrielles.",
      points: [
        "Direction d'une équipe pluridisciplinaire de 5 apprentis-ingénieurs (photonique, data, software) : budget, planning et feuille de route technique.",
        "Pipeline complet de classification de défauts par réseaux de neurones convolutifs (CNN) en Python, sur une architecture Azure.",
        "Livraison d'un démonstrateur industriel : acquisition d'images et traitement automatisé en temps réel pour la prise de décision."
      ]
    },
    en: {
      title: "AI-powered optical inspection system",
      meta: "Project manager & data tech lead · Sept. 2025 — present · Sponsor: Télécom Saint-Étienne",
      summary: "Designing an AI-based optical inspection system that automatically detects and classifies microscopic defects on industrial glass plates.",
      points: [
        "Leading a cross-disciplinary team of 5 apprentice engineers (photonics, data, software): budget, schedule and technical roadmap.",
        "End-to-end defect classification pipeline with convolutional neural networks (CNN) in Python, on an Azure architecture.",
        "Delivering an industrial demonstrator: image acquisition and real-time automated processing for decision-making."
      ]
    },
    tags: ["Python", "CNN", "Computer vision", "Azure", "Gestion de projet / PM"]
  },

  /* ---------- Projets académiques ---------- */
  projects: [
    {
      img: "assets/img/proj-gf38.jpg",
      year: "2024",
      tools: ["R", "RShiny", "ACP & clustering / PCA & clustering"],
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
      }
    },
    {
      img: "assets/img/proj-sfo.jpg",
      year: "2023",
      tools: ["R", "Séries temporelles", "Holt-Winters"],
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
      }
    },
    {
      img: "assets/img/proj-dwh.jpg",
      year: "2023",
      tools: ["Talend", "MySQL", "Modèle en étoile"],
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
      }
    },
    {
      img: "assets/img/proj-geo.jpg",
      year: "2024",
      tools: ["ArcGIS", "Collecte de données", "SIG"],
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
      }
    }
  ],

  /* ---------- Compétences ---------- */
  skills: [
    { fr: "Data engineering & Big Data", en: "Data engineering & Big Data", items: ["ETL — Talend", "Semarchy XDI", "Apache Spark", "Azure Cloud", "Data warehousing"] },
    { fr: "BI & Data viz", en: "BI & Data viz", items: ["Power BI (expert)", "Tableau", "Modélisation dimensionnelle / Dimensional modelling", "ArcGIS"] },
    { fr: "Programmation", en: "Programming", items: ["Python", "SQL", "NoSQL", "C++", "R", "SAS", "VBA"] },
    { fr: "Statistiques & IA", en: "Statistics & AI", items: ["Régression / Regression", "Séries temporelles / Time series", "Classification", "Data mining", "Machine learning", "Deep learning (CNN)", "IA générative / GenAI"] },
    { fr: "Environnements", en: "Environments", items: ["Linux", "Windows", "Git", "TFS", "Excel avancé / Advanced Excel"] }
  ],

  soft: {
    fr: ["Polyglotte", "Persévérant", "Adaptable", "Autonome", "Résolution de problèmes", "Créatif", "Leadership"],
    en: ["Polyglot", "Persistent", "Adaptable", "Autonomous", "Problem solving", "Creative", "Leadership"]
  }
};
