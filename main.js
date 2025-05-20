const { useState } = React;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [language, setLanguage] = useState('en');

  const texts = {
    en: {
      title: "Sonia Tabti",
      nav: ["About", "Services", "Training", "Superpowers", "Contact"],
      heroTitle: "Empowering Businesses with Intelligent Solutions",
      heroDesc: "Freelance AI Project Leader • Expert in Computer Vision, LLMs & Responsible AI • Helping teams build cutting-edge AI products",
      getInTouch: "Get in Touch",
      aboutTitle: "Over 12 Years of AI Leadership",
      aboutDesc: "From academic research to real-world deployment — building impactful AI solutions tailored to your business.",
      servicesTitle: "What I Can Do",
      servicesSubtitle: "I help organizations turn ideas into intelligent, scalable products using AI.",
      serviceItems: [
        "Define your roadmap by prioritizing use cases and R&D questions",
        "Help launch new custom AI products from POC to deployment",
        "Crack complex data science challenges, especially in Computer Vision",
        "Mentor your data scientists and ML engineers",
        "Acculturate your teams to AI through training",
        "Help you leverage the potential of Visual Language Models for your business (Computer Vision, Multimodal RAG...)"
      ],
      trainingTitle: "Training Programs",
      trainingSubtitle: "Tailored training sessions designed to enhance your team's AI capabilities.",
      superpowersTitle: "My Strengths",
      superpowersSubtitle: "Unique skills that drive successful outcomes for clients.",
      superpowers: [
        {
          title: "Needs Interpretation",
          description: "Identify and challenge business needs to formulate the best technical solution."
        },
        {
          title: "Clarity in Complexity",
          description: "Explain advanced AI concepts clearly for both technical and non-technical audiences."
        },
        {
          title: "Ethical AI Advocate",
          description: "Committed to responsible AI, inclusivity in tech, and transparency in model development."
        },
        {
          title: "Thought Leadership",
          description: "Frequent speaker at industry events and contributor to AI discussions."
        }
      ],
      contactTitle: "Let's Build Something Together",
      contactDesc: "Reach out via email or connect with me to start your next AI project.",
      bookNow: "Book Now",
      bookAction: "Book Now",
      linkedin: "LinkedIn Profile",
      copyright: "All rights reserved."
    },
    fr: {
      title: "Sonia Tabti",
      nav: ["À Propos", "Services", "Formations", "Superpouvoirs", "Contact"],
      heroTitle: "Transformer les entreprises avec des solutions intelligentes",
      heroDesc: "Consultante freelance en IA • Spécialiste en Vision par Ordinateur, LLMs et IA Responsable • Accompagne les équipes dans la création d'applications IA innovantes",
      getInTouch: "Me Contacter",
      aboutTitle: "Plus de 12 ans d'expérience en IA",
      aboutDesc: "De la recherche académique à l’industrie — concevoir des solutions IA efficaces adaptées à vos besoins.",
      servicesTitle: "Ce que je propose",
      servicesSubtitle: "J'aide les organisations à transformer leurs idées en produits intelligents et évolutifs grâce à l'IA.",
      serviceItems: [
        "Définir votre feuille de route en priorisant vos cas d'utilisation et questions de R&D",
        "Aider au lancement de nouveaux produits basés sur l'IA, du POC au déploiement",
        "Résoudre des problèmes complexes de science des données, notamment en vision par ordinateur",
        "Mentorat pour vos data scientists et ingénieurs ML",
        "Former vos équipes à l'IA",
        "Vous aider à tirer parti du potentiel des modèles visuo-linguistiques pour votre entreprise (Vision par ordinateur, RAG multimodal…)"
      ],
      trainingTitle: "Programmes de Formation",
      trainingSubtitle: "Des formations sur mesure pour renforcer les compétences de votre équipe en IA.",
      superpowersTitle: "Mes Atouts",
      superpowersSubtitle: "Des compétences uniques qui assurent le succès de vos projets.",
      superpowers: [
        {
          title: "Interprétation des besoins",
          description: "Identifier et remettre en question les besoins métier pour formuler la meilleure solution technique."
        },
        {
          title: "Clarté dans la complexité",
          description: "Expliquer simplement des concepts avancés d'intelligence artificielle aux profils techniques et non techniques."
        },
        {
          title: "IA responsable",
          description: "Engagée pour une IA responsable, inclusive et transparente dans le développement des modèles."
        },
        {
          title: "Leadership technologique",
          description: "Intervenante régulière lors d'événements professionnels et participante à des débats autour de l'IA."
        }
      ],
      contactTitle: "Construisons quelque chose ensemble",
      contactDesc: "Contactez-moi par e-mail ou via LinkedIn pour démarrer votre prochain projet d'IA.",
      bookNow: "Réserver un créneau",
      bookAction: "Réserver maintenant",
      linkedin: "Profil LinkedIn",
      copyright: "Tous droits réservés."
    }
  };

  const current = texts[language];

  const trainingTabs = [
    {
      title: {
        en: "Lifecycle of an AI Project",
        fr: "Cycle de vie d'un projet IA"
      },
      description: {
        en: "Understand the complete lifecycle of an AI project, from ideation to deployment, including common challenges and best practices.",
        fr: "Comprendre le cycle complet d’un projet d’intelligence artificielle, de l’idéation au déploiement, en passant par les défis courants et bonnes pratiques."
      }
    },
    {
      title: {
        en: "AI Assistant Awareness",
        fr: "Utilisation responsable des assistants IA"
      },
      description: {
        en: "Learn how to use AI assistants effectively while being mindful of their limitations and ethical considerations.",
        fr: "Apprendre à utiliser les assistants d'intelligence artificielle efficacement tout en étant conscient de leurs limites et enjeux éthiques."
      }
    },
    {
      title: {
        en: "Carbon Footprint Measurement",
        fr: "Évaluation de l'empreinte carbone"
      },
      description: {
        en: "Discover methods to measure and reduce the carbon footprint of AI model development and inference.",
        fr: "Découvrir des méthodes pour mesurer et réduire l'empreinte carbone liée au développement et à l’utilisation des modèles d’IA."
      }
    },
    {
      title: {
        en: "Semi-Automated Image Labeling",
        fr: "Annotation semi-automatique d'images"
      },
      description: {
        en: "Master techniques for semi-automating image labeling processes in Computer Vision projects.",
        fr: "Maîtriser les techniques pour automatiser partiellement le processus d’annotation d’images dans des projets de vision par ordinateur."
      }
    }
  ];

  return (
    React.createElement("div", { className: "bg-white text-gray-800 leading-relaxed tracking-tight" },
      // Header
      React.createElement("header", { className: "sticky top-0 z-50 bg-white shadow-sm" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          React.createElement("div", { className: "flex justify-between items-center py-4 md:justify-start md:space-x-10" },
            // Logo
            React.createElement("div", { className: "flex justify-start lg:w-0 lg:flex-1" },
              React.createElement("a", {
                href: "#",
                className: "text-xl font-bold text-indigo-600"
              }, current.title)
            ),

            // Desktop Nav
            React.createElement("nav", { className: "hidden md:flex space-x-10" },
              current.nav.map((item, idx) =>
                React.createElement("a", {
                  key: idx,
                  href: `#${item.toLowerCase().replace(/\\s+/g, "")}`,
                  className: "text-base font-medium text-gray-700 hover:text-indigo-600"
                }, item)
              )
            ),

            // Language Toggle
            React.createElement("div", { className: "hidden md:flex justify-end space-x-4" },
              React.createElement("button", {
                onClick: () => setLanguage(language === 'en' ? 'fr' : 'en'),
                className: "text-indigo-600 underline hover:text-indigo-800"
              }, language === 'en' ? 'Français' : 'English')
            ),

            // Mobile Menu Button
            React.createElement("div", { className: "-mr-2 -my-2 md:hidden" },
              React.createElement("button", {
                onClick: () => setMobileMenuOpen(true),
                className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              },
                React.createElement("span", { className: "sr-only" }, "Open menu"),
                React.createElement("svg", {
                  className: "h-6 w-6",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                },
                  React.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16m-7 6h7"
                  })
                )
              )
            )
          )
        ),

        // Mobile Menu
        mobileMenuOpen && React.createElement("div", {
          className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        },
          React.createElement("div", {
            className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          },
            React.createElement("div", { className: "pt-5 pb-6 px-5" },
              React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", null,
                  React.createElement("a", {
                    href: "#",
                    className: "text-xl font-bold text-indigo-600"
                  }, current.title)
                ),
                React.createElement("div", { className: "-mr-2" },
                  React.createElement("button", {
                    onClick: () => setMobileMenuOpen(false),
                    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  },
                    React.createElement("span", { className: "sr-only" }, "Close menu"),
                    React.createElement("svg", {
                      className: "h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    },
                      React.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    )
                  )
                )
              ),
              React.createElement("div", { className: "mt-6" },
                React.createElement("nav", { className: "grid gap-y-8" },
                  current.nav.map((item, idx) =>
                    React.createElement("a", {
                      key: idx,
                      href: `#${item.toLowerCase().replace(/\s+/g, '')}`,
                      className: "text-base font-medium text-gray-700 hover:text-indigo-600"
                    }, item)
                  )
                )
              ),
              React.createElement("div", { className: "mt-6 flex justify-between" },
                React.createElement("button", {
                  onClick: () => setLanguage(language === 'en' ? 'fr' : 'en'),
                  className: "text-indigo-600 underline hover:text-indigo-800"
                }, language === 'en' ? 'Français' : 'English')
              )
            )
          )
        )
      ),

      // Hero Section
      React.createElement("section", { className: "relative bg-gradient-to-br from-indigo-50 to-white overflow-hidden" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28" },
          React.createElement("div", { className: "text-center" },
            React.createElement("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight" }, current.heroTitle),
            React.createElement("p", { className: "mt-6 text-xl text-gray-600 max-w-3xl mx-auto" }, current.heroDesc),
            React.createElement("div", { className: "mt-10" },
              React.createElement("a", {
                href: "#contact",
                className: "inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              }, current.getInTouch)
            )
          )
        )
      ),

      // About Section
      React.createElement("section", { id: "about", className: "py-16 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          React.createElement("div", { className: "lg:text-center" },
            React.createElement("h2", { className: "text-base text-indigo-600 font-semibold tracking-wide uppercase" }, current.aboutTitle),
            React.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, current.aboutTitle),
            React.createElement("p", { className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" }, current.aboutDesc)
          )
        )
      ),

      // Services Section
      React.createElement("section", { id: "services", className: "py-16 bg-gray-50" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          React.createElement("div", { className: "lg:text-center" },
            React.createElement("h2", { className: "text-base text-indigo-600 font-semibold tracking-wide uppercase" }, current.servicesTitle),
            React.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, current.servicesTitle),
            React.createElement("p", { className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" }, current.servicesSubtitle),
            React.createElement("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
              current.serviceItems.map((service, idx) =>
                React.createElement("div", {
                  key: idx,
                  className: "bg-white p-6 rounded-lg shadow-sm hover:shadow transition-shadow"
                },
                  React.createElement("div", {
                    className: "rounded-md bg-indigo-50 w-12 h-12 flex items-center justify-center mb-4"
                  },
                    React.createElement("span", {
                      className: "text-indigo-600 font-bold"
                    }, idx + 1)
                  ),
                  React.createElement("p", { className: "text-gray-700" }, service)
                )
              )
            )
          )
        )
      ),

      // Training Section
      React.createElement("section", { id: "training", className: "py-16 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          React.createElement("div", { className: "lg:text-center" },
            React.createElement("h2", { className: "text-base text-indigo-600 font-semibold tracking-wide uppercase" }, current.trainingTitle),
            React.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, current.trainingTitle),
            React.createElement("p", { className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" }, current.trainingSubtitle),
            React.createElement("div", { className: "mt-16" },
              React.createElement("div", { className: "flex flex-wrap border-b border-gray-200" },
                trainingTabs.map((tab, index) =>
                  React.createElement("button", {
                    key: index,
                    className: `px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === index
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-600 hover:text-indigo-600"
                    }`,
                    onClick: () => setActiveTab(index)
                  }, tab.title[language])
                )
              ),
              React.createElement("div", { className: "mt-6 p-6 bg-gray-50 rounded-lg shadow-sm" },
                React.createElement("h3", { className: "text-xl font-semibold text-gray-900" }, trainingTabs[activeTab].title[language]),
                React.createElement("p", { className: "mt-2 text-gray-600" }, trainingTabs[activeTab].description[language])
              )
            )
          )
        )
      ),

      // Superpowers Section
      React.createElement("section", { id: "superpowers", className: "py-16 bg-indigo-50" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          React.createElement("div", { className: "lg:text-center" },
            React.createElement("h2", { className: "text-base text-indigo-600 font-semibold tracking-wide uppercase" }, current.superpowersTitle),
            React.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" }, current.superpowersTitle),
            React.createElement("p", { className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" }, current.superpowersSubtitle),
            React.createElement("div", { className: "mt-16 grid gap-8 md:grid-cols-2" },
              current.superpowers.map((sp, idx) =>
                React.createElement("div", {
                  key: idx,
                  className: "bg-white p-6 rounded-lg shadow-sm hover:shadow transition-shadow"
                },
                  React.createElement("h3", { className: "text-xl font-semibold text-gray-900" }, sp.title),
                  React.createElement("p", { className: "mt-2 text-gray-600" }, sp.description)
                )
              )
            )
          )
        )
      ),

      // Contact Section
      React.createElement("section", { id: "contact", className: "py-16 bg-indigo-50" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" },
          React.createElement("h2", { className: "text-base text-indigo-600 font-semibold tracking-wide uppercase" }, "Get in Touch"),
          React.createElement("p", { className: "mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl" }, current.contactTitle),
          React.createElement("p", { className: "mt-4 max-w-2xl text-xl text-gray-600 mx-auto" }, current.contactDesc),
          React.createElement("div", { className: "mt-8" },
            React.createElement("a", {
              href: "mailto:soniatabti@gmail.com",
              className: "inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            }, "soniatabti@gmail.com")
          ),
          React.createElement("div", { className: "mt-8" },
            React.createElement("h3", { className: "text-xl font-semibold text-gray-900" }, current.bookNow),
            React.createElement("p", { className: "text-gray-600 mt-2" }, "Schedule a 30-minute call to discuss your AI project."),
            React.createElement("a", {
              href: "https://calendly.com/sonia-tabti ",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center justify-center px-6 py-3 mt-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            }, current.bookAction)
          ),
          React.createElement("div", { className: "mt-8" },
            React.createElement("p", { className: "text-gray-600" }, "Connect with me professionally:"),
            React.createElement("a", {
              href: "https://www.linkedin.com/in/sonia-tabti-phd-b6993835 ",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-indigo-600 underline hover:text-indigo-800"
            }, current.linkedin)
          )
        )
      ),

      // Footer
      React.createElement("footer", { className: "bg-white border-t border-gray-200" },
        React.createElement("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500"
        }, `© ${new Date().getFullYear()} Sonia Tabti – AI Consulting. ${current.copyright}`)
      )
    )
  );
}

// Mount App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
