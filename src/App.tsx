import React, { useState } from "react";
import {
  Moon,
  Sun,
  Globe,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Trophy,
  Medal,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const [showSportsCv, setShowSportsCv] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const toggleSportsCv = () => {
    setShowSportsCv(!showSportsCv);
  };

  const content = {
    en: {
      title: showSportsCv
        ? "National Team Gymnast"
        : "Computer Engineering Student",
      contact: "Contact",
      skills: {
        title: "Technical Skills",
        items: [
          { name: "Python", level: "Advanced" },
          { name: "C/C++", level: "Advanced" },
          { name: "Java", level: "Intermediate" },
          { name: "Assembly (Risk - V)", level: "Basic" },
          { name: "Prolog", level: "Basic" },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          "Portuguese: Native",
          "English: IELTS 7.5 Band C1",
          "Spanish: Proficient",
        ],
      },
      about: {
        title: showSportsCv ? "About Me" : "Professional Summary",
        content: showSportsCv
          ? "I have been practicing artistic gymnastics since the age of 6. Currently, I train an average of 6 times per week, with sessions lasting about 4 hours each. During more intensive competition periods, I sometimes train twice a day, accumulating up to 6 hours of training daily. This dedication has been fundamental to my growth as an athlete and to achieving the results I have so far. At the moment, I am balancing intensive training with university studies at Instituto Superior Técnico, where I am pursuing a degree in Computer Engineering since 2023."
          : "A Computer Engineering student at Instituto Superior Técnico, passionate about cybersecurity with hands-on experience in ethical hacking. Alongside my academic career, I am a member of the Portuguese National Men's Gymnastics Team, competing internationally. I excel in time management, resilience, and thriving under pressure, skills that are key in both tech and high-performance sports.",
      },
      experience: {
        title: "Experience",
        items: [
          {
            title: "TryHackMe and CTF Challenges",
            points: [
              "Active participation in ethical hacking challenges",
              "Knowledge of attacks and defenses in computer systems",
            ],
          },
          {
            title: "Application Development",
            points: [
              "Created a wind and wave forecast app for surfers",
              "Experience with full-stack development and data analysis",
            ],
          },
        ],
      },

      sports: {
        title: "Sports Career",
        timeline: [
          {
            year: "2023",
            achievements: [
              "Luxemburg Open: 6th place individually and team bronze medal",
              "National Championship: National Champion in All Around, Pommel Horse, and Team; Silver medal in Horizontal Bar",
              "Gymsport: 2nd place in Pommel Horse; 10th place in All Around",
            ],
          },
          {
            year: "2022",
            achievements: [
              "Mediterranean Games: 6th place in teams",
              "National Championship: National Champion in Floor Exercise; Bronze medal in Pommel Horse",
            ],
          },
        ],
        links: [
          {
            title: "Gymsport 2023",
            url: "https://drive.google.com/file/d/1IXXWy2AbvvKbLuTcT8J5fRX0-TkMC8Rc/view",
          },
          {
            title: "Luxemburg Open 2023",
            url: "https://thegymter.net/2023/02/18/2023-luxembourg-open-mens-results/",
          },
          {
            title: "National Championship 2023",
            url: "https://www.ginastica.org/_files/ugd/feced7_c12099fb113f4867b3b80ac8d38db3fd.pdf",
          },
        ],
      },
      goals: {
        title: showSportsCv ? "Future Goals" : "Projects and Future Goals",
        list: showSportsCv
          ? [
              "Participate in a European Championship as a senior",
              "Continue to evolve as a senior gymnast and improve consistency in high-level competitions",
              "Keep Competing at the highest level",
            ]
          : [
              "Deepen knowledge in Cybersecurity (OSCP, CEH, CompTIA Security+ certifications)",
              "Work in Ethical Hacking and Offensive Security",
            ],
      },
      viewSportsCv: "View Sports CV",
      viewProfessionalCv: "View Professional CV",
      footer: "© 2024 Francisco Martins. All rights reserved.",
    },
    pt: {
      title: showSportsCv
        ? "Ginasta da Seleção Nacional"
        : "Estudante de Engenharia Informática",
      contact: "Contactos",
      skills: {
        title: "Competências Técnicas",
        items: [
          { name: "Java", level: "Avançado" },
          { name: "Python", level: "Avançado" },
          { name: "C/C++", level: "Intermédio" },
          { name: "Assembly", level: "Básico" },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          "Português: Nativo",
          "Inglês: IELTS 7.5 band C1",
          "Espanhol: Avançado",
        ],
      },
      about: {
        title: showSportsCv ? "Sobre Mim" : "Resumo Profissional",
        content: showSportsCv
          ? "Pratico ginástica artística desde os 6 anos de idade. Atualmente, treino em média 6 vezes por semana, com treinos de cerca de 4 horas cada. Durante períodos mais intensivos de competições, por vezes realizo treinos bidiários, acumulando até 6 horas de treino por dia. Esta dedicação tem sido fundamental para o meu crescimento como atleta e para o alcance dos resultados obtidos até agora. Neste momento, estou a conciliar os treinos intensivos com os estudos universitários no Instituto Superior Técnico, onde ingressei em 2023 no curso de Engenharia Informática."
          : "Sou estudante de Engenharia Informática no Instituto Superior Técnico, com uma grande paixão por cibersegurança e experiência prática em plataformas de Ethical Hacking. Paralelamente, sou membro da Seleção Nacional de Ginástica Artística, tendo representado Portugal em competições internacionais. A minha experiência em ambas as áreas evidencia as minhas habilidades em gestão de tempo, resiliência e trabalho sob pressão, competências essenciais tanto no desporto de alto rendimento quanto no setor tecnológico.",
      },
      experience: {
        title: "Experiência",
        items: [
          {
            title: "TryHackMe e Desafios CTF",
            points: [
              "Participação ativa em desafios de hacking ético",
              "Conhecimento de ataques e defesas em sistemas informáticos",
            ],
          },
          {
            title: "Desenvolvimento de Aplicações",
            points: [
              "Criação de uma app de previsão de ondas e vento para surfistas",
              "Experiência com desenvolvimento full-stack e análise de dados",
            ],
          },
        ],
      },
      sports: {
        title: "Trajetória Desportiva",
        timeline: [
          {
            year: "2023",
            achievements: [
              "Luxemburg Open: 6.º lugar individual e medalha de bronze por equipas",
              "Campeonato Nacional: Campeão Nacional em All Around, Cavalo com Arções e por equipas; Medalha de prata na barra fixa",
              "Gymsport: 2.º lugar em Cavalo com Arções; 10.º lugar no All Around",
            ],
          },
          {
            year: "2022",
            achievements: [
              "Jogos do Mediterrâneo: 6.º lugar em equipas",
              "Campeonato Nacional: Campeão Nacional em Solo; Medalha de bronze no Cavalo com Arções",
            ],
          },
        ],
        links: [
          {
            title: "Gymsport 2023",
            url: "https://drive.google.com/file/d/1IXXWy2AbvvKbLuTcT8J5fRX0-TkMC8Rc/view",
          },
          {
            title: "Luxemburg Open 2023",
            url: "https://thegymter.net/2023/02/18/2023-luxembourg-open-mens-results/",
          },
          {
            title: "Campeonato Nacional 2023",
            url: "https://www.ginastica.org/_files/ugd/feced7_c12099fb113f4867b3b80ac8d38db3fd.pdf",
          },
        ],
      },
      goals: {
        title: showSportsCv
          ? "Objetivos Futuros"
          : "Projetos e Objetivos Futuros",
        list: showSportsCv
          ? [
              "Participar num Campeonato da Europa como sénior",
              "Continuar a evoluir como ginasta sénior e melhorar a consistência em competições de alto nível",
              "Manter a competição ao mais alto nível",
            ]
          : [
              "Aprofundar conhecimentos em Cibersegurança (certificações OSCP, CEH, CompTIA Security+)",
              "Trabalhar em Hacking Ético e Segurança Ofensiva",
            ],
      },
      viewSportsCv: "Ver Currículo Desportivo",
      viewProfessionalCv: "Ver Currículo Profissional",
      footer: "© 2024 Francisco Martins. Todos os direitos reservados.",
    },
  };

  const t = content[language];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: string) => ({
      width:
        level === "Advanced" ? "80%" : level === "Intermediate" ? "70%" : "55%",
      transition: { duration: 1, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const controlButtonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgb(79, 70, 229)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header Controls */}
        <motion.div
          className="fixed top-4 right-4 flex gap-4 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={toggleSportsCv}
            className="p-3 rounded-full bg-indigo-600 text-white shadow-lg backdrop-blur-sm bg-opacity-80 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            variants={controlButtonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ scale: 1 }}
          >
            {showSportsCv ? <Trophy size={20} /> : <Medal size={20} />}
            <span className="font-medium hidden md:inline">
              {showSportsCv ? t.viewProfessionalCv : t.viewSportsCv}
            </span>
          </motion.button>
          <motion.button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-indigo-600 text-white shadow-lg backdrop-blur-sm bg-opacity-80 hover:bg-indigo-700 transition-colors flex items-center justify-center"
            variants={controlButtonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ scale: 1 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            onClick={toggleLanguage}
            className="p-3 rounded-full bg-indigo-600 text-white shadow-lg backdrop-blur-sm bg-opacity-80 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            variants={controlButtonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ scale: 1 }}
          >
            <Globe size={20} />
            <span className="font-medium">
              {language === "en" ? "PT" : "EN"}
            </span>
          </motion.button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className={`mt-16 grid md:grid-cols-3 gap-8 rounded-2xl overflow-hidden shadow-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side */}
          <motion.div
            className="bg-indigo-600 p-8 md:col-span-1"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="https://i.imgur.com/nBk4bKY.jpeg"
                alt="Francisco Martins"
                className="w-48 h-48 rounded-full border-4 border-white mb-6 object-cover shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h1
                className="text-2xl font-bold text-white mb-2"
                variants={itemVariants}
              >
                Francisco Martins
              </motion.h1>
              <motion.p
                className="text-indigo-100 mb-8"
                variants={itemVariants}
              >
                {t.title}
              </motion.p>

              <motion.div className="w-full space-y-8" variants={itemVariants}>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    {t.contact}
                  </h2>
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:francisco.soares.martins@tecnico.ulisboa.pt"
                      className="flex items-center gap-3 text-indigo-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo-700/50"
                      whileHover={{ x: 5 }}
                    >
                      <Mail size={18} />
                      <span className="break-all">
                        francisco.soares.martins@tecnico.ulisboa.pt
                      </span>
                    </motion.a>
                    <motion.a
                      href="tel:+351960280663"
                      className="flex items-center gap-3 text-indigo-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo-700/50"
                      whileHover={{ x: 5 }}
                    >
                      <Phone size={18} />
                      <span>+351 960 280 663</span>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/francisco-martins"
                      className="flex items-center gap-3 text-indigo-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo-700/50"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com/francisco-martins"
                      className="flex items-center gap-3 text-indigo-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo-700/50"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.div
                      className="flex items-center gap-3 text-indigo-100 p-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin size={18} />
                      <span>
                        {language === "en"
                          ? "Lisbon, Portugal"
                          : "Lisboa, Portugal"}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {!showSportsCv && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      {t.skills.title}
                    </h2>
                    <div className="space-y-4">
                      {t.skills.items.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-2"
                          variants={itemVariants}
                        >
                          <div className="flex justify-between text-indigo-100">
                            <span>{skill.name}</span>
                            <span>{skill.level}</span>
                          </div>
                          <div className="h-2 bg-indigo-800/50 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-white rounded-full"
                              variants={progressVariants}
                              custom={skill.level}
                              initial="hidden"
                              animate="visible"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    {t.languages.title}
                  </h2>
                  <ul className="space-y-2">
                    {t.languages.items.map((language, index) => (
                      <motion.li
                        key={index}
                        className="text-indigo-100"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        {language}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className={`p-8 md:col-span-2 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
            variants={containerVariants}
          >
            {/* About/Summary Section */}
            <motion.section className="mb-12" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                {t.about.title}
              </h2>
              <p className="leading-relaxed">{t.about.content}</p>
            </motion.section>

            {showSportsCv ? (
              <>
                {/* Sports Career Timeline */}
                <motion.section className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                    {t.sports.title}
                  </h2>
                  <div className="space-y-8">
                    {t.sports.timeline.map((period, index) => (
                      <motion.div
                        key={period.year}
                        className="relative pl-8 border-l-2 border-indigo-600"
                        variants={itemVariants}
                      >
                        <div className="absolute -left-3 top-0">
                          <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                            <Trophy size={14} className="text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {period.year}
                        </h3>
                        <ul className="space-y-2">
                          {period.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="flex items-start gap-2"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <Medal
                                  size={16}
                                  className="text-indigo-600 mt-1 flex-shrink-0"
                                />
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Competition Links */}
                <motion.section className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                    Links
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.sports.links.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Trophy size={20} className="text-indigo-600" />
                        <span className="font-medium">{link.title}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.section>
              </>
            ) : (
              <>
                {/* Professional Experience */}
                <motion.section className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                    {t.experience.title}
                  </h2>
                  <div className="space-y-6">
                    {t.experience.items.map((item, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                              className="hover:text-indigo-500 transition-colors"
                            >
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </>
            )}

            {/* Goals Section */}
            <motion.section className="mb-12" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                {t.goals.title}
              </h2>
              <ul className="space-y-2">
                {t.goals.list.map((goal, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Target
                      size={16}
                      className="text-indigo-600 mt-1 flex-shrink-0"
                    />
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className={`mt-8 text-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>{t.footer}</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
