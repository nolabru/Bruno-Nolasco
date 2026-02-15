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
    subtitle: "Transformando suas ideias em experiências digitais",
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
      "Interfaces de usuário intuitivas e experiências que encantam, mantendo seus visitantes engajados e satisfeitos.",
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
    { icon: icons.faHtml5, language: "HTML", color: "#e34f26" },
    { icon: icons.faCss3Alt, language: "CSS", color: "#1572b6" },
    { icon: icons.faJs, language: "JavaScript", color: "#f7df1e" },
    { icon: icons.faPhp, language: "PHP", color: "#777bb4" },
  ],
  [
    { icon: icons.faHtml5, language: "HTML", color: "#e34f26" },
    { icon: icons.faCss3Alt, language: "CSS", color: "#1572b6" },
    { icon: icons.faJs, language: "JavaScript", color: "#f7df1e" },
  ],
  [
    { icon: icons.faHtml5, language: "HTML", color: "#e34f26" },
    { icon: icons.faCss3Alt, language: "CSS", color: "#1572b6" },
    { icon: icons.faJs, language: "JavaScript", color: "#f7df1e" },
    { icon: icons.faReact, language: "React", color: "#61dafb" },
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
    state: "Professional",
  },
  {
    background: fastprice,
    title: "Fastprice",
    hrefProject: "",
    description: "",
    tools: "",
    state: "Professional",
  },
  {
    background: aifirst,
    title: "Aifirst",
    hrefProject: "",
    description: "",
    tools: "",
    state: "Professional",
  },
  {
    background: prontuai,
    title: "Prontuai",
    hrefProject: "",
    description: "",
    tools: "",
    state: "Professional",
  },
  {
    background: calma,
    title: "Calma",
    hrefProject: "",
    description: "",
    tools: "f",
    state: "Professional",
  },
  {
    background: security,
    title: "Ax Security",
    hrefProject: "",
    description: "",
    tools: "",
    state: "Professional",
  },
  {
    background: secretWord,
    title: "Secret Word",
    hrefProject: "",
    description: "",
    tools: "",
    state: "",
  },
  {
    background: dachshund,
    title: "Dachshund",
    hrefProject: "",
    description: "",
    tools: "",
    state: "",
  },

  // {
  //   background: dachshund,
  //   title: "A História da Belinha",
  //   hrefProject: "https://nolabru.github.io/Project-Belinha/",
  //   hrefRepository: "https://github.com/nolabru/Project-Belinha/",
  //   description:
  //     "Projeto pessoal dedicado à Belinha, minha cachorrinha, compartilhando sua história de vida e superações. Este foi um dos meus primeiros projetos e tem grande valor sentimental.",
  //   tools: languages[1],
  // },
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

export const toolTitle = ["Estudando", "Ferramentas", "Habilidades"];

// My Tools
export const tools = [
  {
    icon: icons.angular,
    category: "Estudando",
    techDescription: "Angular - 3 Meses de Estudo",
  },
  {
    icon: icons.sass,
    category: "Estudando",
    techDescription: "Sass - 1 Mês de Estudo",
  },
  {
    icon: icons.git,
    category: "Ferramentas",
    techDescription: "Git - 3 Anos de Experiência",
  },
  {
    icon: icons.github,
    category: "Ferramentas",
    techDescription: "GitHub - 3 Anos de Experiência",
  },
  {
    icon: icons.figma,
    category: "Ferramentas",
    techDescription: "Figma - 2 Anos de Experiência",
  },
  {
    icon: icons.ubuntu,
    category: "Ferramentas",
    techDescription: "Ubuntu - 1 Ano de Experiência",
  },
  {
    icon: icons.html,
    category: "Habilidades",
    techDescription: "HTML5 - 4 Anos de Experiência",
  },
  {
    icon: icons.css,
    category: "Habilidades",
    techDescription: "CSS3 - 4 Anos de Experiência",
  },
  {
    icon: icons.js,
    category: "Habilidades",
    techDescription: "JavaScript - 3 Anos de Experiência",
  },
  {
    icon: icons.react,
    category: "Habilidades",
    techDescription: "ReactJs - 1 Ano de Experiência",
  },
  {
    icon: icons.node,
    category: "Habilidades",
    techDescription: "NodeJs - 1 Ano de Experiência",
  },
  {
    icon: icons.python,
    category: "Habilidades",
    techDescription: "Python - 4 Anos de Experiência",
  },
];

// Social Links

export const socialLinks = [
  { icon: icons.linkedin, href: "https://linkedin.com/in/nolabru" },
  { icon: icons.whatsapp, href: "https://wa.me/5511980327136" },
];
