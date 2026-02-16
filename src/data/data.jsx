import security from "../assets/security.jpg";
import secretWord from "../assets/secret-word.jpg";
import dachshund from "../assets/dachshund.jpg";
import prontuai from "../assets/prontuai.jpg";
import aifirst from "../assets/aifirst.jpg";
import fastprice from "../assets/fastprice.jpg";
import habilitai from "../assets/habilitai.jpg";
import calma from "../assets/calma.jpg";

import { icons } from "./icons";

// NavBar Titles
export const linkTitle = [
  "Serviços",
  "Experiência",
  "Projetos",
  "Habilidades",
  "Contato",
];

// Section Headers
export const sectionHeaders = [
  {
    title: "Serviços",
    subtitle: "Transformando suas ideias em experiências|digitais",
  },
  {
    title: "Experiência",
    subtitle: "Quatro anos de experência em desenvolvimento Full Stack",
  },
  {
    title: "Projetos",
    subtitle:
      "Clique em detalhes para mais informações e utilize as setas para navegar entre os projetos ",
  },
  {
    title: "Habilidades",
    subtitle: "Passe o cursor do mouse nos cards para interação",
  },
];

// Defaults Sections Buttons
export const textButtons = [
  {
    id: 1,
    text: "Baixar CV",
    icon: icons.download,
    href: "CV Bruno Nolasco.pdf",
  },
  {
    id: 2,
    text: "Acessar LinkedIn",
    icon: icons.linkedin,
    href: "https://linkedin.com/in/nolabru/",
  },
  {
    id: 3,
    text: "Acessar GitHub",
    icon: icons.github,
    href: "https://github.com/nolabru/",
  },
];

// Services
export const services = [
  {
    icon: icons.web,
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações web modernas e responsivas, do front-end ao back-end, seguindo as melhores práticas de desenvolvimento.",
    data: "10+",
    dataText: "Projetos",
  },
  {
    icon: icons.mobile,
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos para celular android e IOS, do zero ao aplicativo publicado na loja.",
    data: "4+",
    dataText: "Anos de Experiência",
  },
  {
    icon: icons.ux,
    title: "UX/UI Design",
    description:
      "Interfaces de usuário intuitivas e experiências|que encantam, mantendo seus visitantes engajados e satisfeitos.",
    data: "100%",
    dataText: "Clientes Satisfeitos",
  },
];

// Professional Experience
export const experience = [
  {
    position: "Mid-Level Software Engineer",
    company: "Echo AI",
    time: "Abr/2025 - Atual · 11 meses",
    description:
      "Desenvolvimento de aplicações web e mobile (React, Flutter, React Native) com foco em soluções de IA. Especialista na criação de sistemas multiagentes baseados em LLMs e integração via MCP, gerenciando bancos PostgreSQL/Supabase sob metodologia Scrum para converter tecnologia em valor de negócio.",
  },
  {
    position: "Junior IT Analyst",
    company: "Iavne Beith Chinuch",
    time: "Jan/2024 - Jan/2025 · 1 ano 1 mês",
    description:
      "Atuação no suporte técnico e desenvolvimento de sistemas de segurança digital para controle de acesso. Além de otimizar processos administrativos via automação, foi responsável por ministrar aulas de programação em Python, fomentando a formação técnica de alunos.",
  },
  {
    position: "Software Engineering Intern",
    company: "Itaú Unibanco",
    time: "Mar/2022 - Jul/2023 · 1 ano 5 meses",
    description:
      "Foco em automação de dados financeiros utilizando Python e Pandas. Desenvolvi a solução 'OK2' para validação automática de taxas e consolidação de relatórios para o Credit Suisse, reduzindo erros manuais e otimizando fluxos críticos no time de Eventos Societários.",
  },
];

// Programming Languages
export const languages = [
  [
    { icon: icons.html, language: "HTML" },
    { icon: icons.css, language: "CSS" },
    { icon: icons.js, language: "JavaScript" },
    { icon: icons.php, language: "PHP" },
  ],
  [
    { icon: icons.html, language: "HTML" },
    { icon: icons.css, language: "CSS" },
    { icon: icons.js, language: "JavaScript" },
  ],
  [
    { icon: icons.flutter, language: "Flutter" },
    { icon: icons.dart, language: "Dart" },
  ],

  [
    { icon: icons.react, language: "React Native" },
    { icon: icons.expo, language: "ExpoGO" },
  ],

  [
    { icon: icons.react, language: "React" },
    { icon: icons.typescript, language: "Typescript" },
    { icon: icons.tailwind, language: "Tailwind" },
  ],
];

// Projects Data
export const projects = [
  {
    background: habilitai,
    title: "HabilitAI",
    hrefProject: "",
    description: "",
    tools: "",
    state: "Development",
  },
  {
    background: fastprice,
    title: "Fastprice",
    hrefProject: "https://fastprice.nexabyte.dev/",
    description:
      "O FastPrice é um aplicativo de orçamentos inteligentes para marcenaria, focado na criação, gestão e finalização de projetos sob medida. Desenvolvido para a EchoAI, fui o responsável pelo desenvolvimento do aplicativo mobile utilizando Flutter (Dart) com integração via API REST. Atualmente em Fevereiro de 2026 o projeto está em fase de publicação nas lojas oficiais.",
    tools: languages[2],
    state: "Professional",
  },
  {
    background: aifirst,
    title: "Aifirst",
    hrefProject: "https://aifirst.app/",
    description:
      "AI First é uma Plataforma brasileira voltada à criação e gestão de agentes autônomos de IA para empresas. O sistema permite a 'contratação' ou criação de funcionários digitais para áreas como RH, Vendas e Marketing sem a necessidade de código. fui o responsável pelo desenvolvimento do aplicativo mobile utilizando React Native com ExpoGo, Atualmente em Fevereiro de 2026 o projeto está em processo de aprovação nas lojas oficiais.",
    tools: languages[3],
    state: "Professional",
  },
  {
    background: prontuai,
    title: "ProntuAI",
    hrefProject: "https://prontuai.developecho.com/",
    description:
      "ProntuAI é uma plataforma médica que une gestão de consultório e IA em tempo real, realizando a transcrição de consultas ao vivo e oferecendo suporte diagnóstico automático. Fui responsável pelo desenvolvimento de todo o frontend da aplicação, utilizando React, TypeScript e Tailwind CSS, priorizando a experiência |o usuário e a performance.",
    tools: languages[4],
    state: "Professional",
  },
  {
    background: calma,
    title: "Calma",
    hrefProject: "https://apps.apple.com/br/app/calma/id6747729324",
    description:
      "C'Alma é um aplicativo de saúde mental e bem-estar emocional que oferece IA conversacional, meditações guiadas e diário emocional, além de outras atividades para o público lusófono. Atuei em todo o ciclo de desenvolvimento, desde a prototipagem no Figma, implementação final em Flutter (Dart) e deploy nas lojas oficiais. O projeto já está disponível para download na App Store e Google Play.",
    tools: languages[2],
    state: "Professional",
  },
  {
    background: security,
    title: "Ax Security",
    hrefProject: "https://axsecurity.com.br/",
    description:
      "Site institucional profissional desenvolvido para a empresa AX Security. Este foi meu primeiro projeto como freelancer, focado em apresentar os serviços de segurança da empresa com uma interface moderna e responsiva.",
    tools: languages[0],
    state: "Professional",
  },
  {
    background: secretWord,
    title: "Secret Word",
    hrefProject: "https://nolabru.github.io/Secret-Word/",
    description:
      "Secret Word é um projeto interativo que simula um jogo de adivinhação de palavras, inspirado em um projeto do mesmo nome apresentado no curso de React do Matheus Battisti. O foco principal foi o aprimoramento da lógica de programação e a manipulação de estados complexos dentro do ecossistema React.",
    tools: languages[1],
  },
  {
    background: dachshund,
    title: "Dachshund",
    hrefProject: "https://nolabru.github.io/Project-Belinha/",
    description:
      "Landing page afetiva que narra a história de superação da minha cadelinha, Belinha. Este foi um dos meus primeiros projetos web, essencial para consolidar meus conhecimentos iniciais em HTML, CSS e design responsivo.",
    tools: languages[1],
  },
];

// Projects Buttons
export const buttonProjects = [
  {
    icon: icons.link,
    text: "Projeto",
  },
  {
    icon: icons.github,
    text: "Repositório",
  },
  {
    icon: icons.details,
    text: "Detalhes",
  },
];

export const toolTitle = ["Habilidades", "Ferramentas"];

// My Tools
export const tools = [
  {
    icon: icons.flutter,
    category: "Habilidades",
    techDescription:
      "Flutter - 1 Ano de Experiência | 3 Projetos Desenvolvidos",
  },
  {
    icon: icons.dart,
    category: "Habilidades",
    techDescription: "Dart - 1 Ano de Experiência | 3 Projetos Desenvolvidos",
  },
  {
    icon: icons.reactNative,
    category: "Habilidades",
    techDescription:
      "React Native - 1 Ano de Experiência | 1 Projeto Desenvolvido",
  },
  {
    icon: icons.typescript,
    category: "Habilidades",
    techDescription:
      "Typescript - 1 Ano de Experiência | 2 Projetos Desenvolvidos",
  },
  {
    icon: icons.react,
    category: "Habilidades",
    techDescription: "React - 2 Anos de Experiência | 4 Projetos Desenvolvidos",
  },
  {
    icon: icons.tailwind,
    category: "Habilidades",
    techDescription:
      "Tailwind - 1 Ano de Experiência | 2 Projetos Desenvolvidos",
  },
  {
    icon: icons.js,
    category: "Habilidades",
    techDescription:
      "Javascript - 4 Anos de Experiência | 5+ Projetos Desenvolvidos",
  },
  {
    icon: icons.html,
    category: "Habilidades",
    techDescription:
      "HTML - 5 Anos de Experiência | 10+ Projetos Desenvolvidos",
  },
  {
    icon: icons.css,
    category: "Habilidades",
    techDescription: "CSS - 5 Anos de Experiência | 10+ Projetos Desenvolvidos",
  },
  {
    icon: icons.python,
    category: "Habilidades",
    techDescription: "3 Anos de Experiência | 5+ Projetos Desenvolvidos",
  },
  {
    icon: icons.postgree,
    category: "Habilidades",
    techDescription:
      "PostgreSQL - 1 Ano de Experiência | 5 Projetos Desenvolvidos",
  },
  {
    icon: icons.git,
    category: "Ferramentas",
    techDescription: "Git - 4 Anos de Experiência",
  },
  {
    icon: icons.github,
    category: "Ferramentas",
    techDescription: "Github - 5 Anos de Experiência",
  },
  {
    icon: icons.figma,
    category: "Ferramentas",
    techDescription: "Figma - 2 Anos de Experiência",
  },
  {
    icon: icons.googleCloud,
    category: "Ferramentas",
    techDescription: "Google Cloud - 1 Ano de Experiência",
  },
  {
    icon: icons.xcode,
    category: "Ferramentas",
    techDescription: "Xcode - 1 Ano de Experiência",
  },
  {
    icon: icons.androidStudio,
    category: "Ferramentas",
    techDescription: "Android Studio - 2 Anos de Experiência",
  },
  {
    icon: icons.supabase,
    category: "Ferramentas",
    techDescription: "Supabase - 1 Ano de Experiência",
  },
  {
    icon: icons.insomnia,
    category: "Ferramentas",
    techDescription: "Insomnia - 2 Anos de Experiência",
  },
];

// Social Links

export const socialLinks = [
  { icon: icons.linkedin, href: "https://linkedin.com/in/nolabru" },
  { icon: icons.whatsapp, href: "https://wa.me/5511980327136" },
];
