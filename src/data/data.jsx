import security from "../assets/security.jpg";
import doctor from "../assets/doctor.jpg";
import developer from "../assets/developer.jpg";
import secretWord from "../assets/secret-word.jpg";
import bmi from "../assets/bmi.jpg";
import cupcake from "../assets/cupcake.jpg";
import dachshund from "../assets/dachshund.jpg";
import login from "../assets/login.jpg";

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

// Services
export const services = [
  {
    icon: icons.faCode,
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações web modernas e responsivas, do front-end ao back-end, seguindo as melhores práticas de desenvolvimento.",
    data: "10+",
    dataText: "Projetos",
  },
  {
    icon: icons.faHardDrive,
    title: "Criação de APIs RESTful",
    description:
      "Desenvolvimento de APIs robustas e bem documentadas para integração entre sistemas e aplicações mobile.",
    data: "3+",
    dataText: "Anos de Experiência",
  },
  {
    icon: icons.faWindowRestore,
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
    position: "Engenheiro de Software Júnior",
    company: "Izzi Tech",
    time: "Dez/2023 - Atual",
    description:
      "Desenvolvimento de websites, blogs, portfólios, e-commerces e landing pages com arquitetura full stack, utilizando React no front-end e Node.js no back-end para construção de aplicações dinâmicas, performáticas e escaláveis.",
  },
  {
    position: "Engenheiro de Software Júnior",
    company: "Iavne Beith Chinuch",
    time: "Jan/2024 - Jan/2025",
    description:
      "Desenvolvimento de aplicações web escaláveis com React, utilizando Hooks para gerenciamento de estado e React Router para controle de rotas, integradas a APIs RESTful desenvolvidas com Node.js e Express.",
  },
  {
    position: "Desenvolvedor RPA",
    company: "Itaú Unibanco",
    time: "Mar/2022 - Jul/2023",
    description:
      "Implementação de automações escaláveis em Python, com manipulação e análise de dados utilizando Pandas, alinhado a práticas de desenvolvimento ágil com metodologia Scrum.",
  },
];

// Defaults Sections Buttons
export const textButtons = [
  {
    id: 1,
    text: "Baixar CV",
    icon: icons.faCircleDown,
    href: "CV Bruno Nolasco.pdf",
  },
  {
    id: 2,
    text: "Acessar Site Profissional",
    icon: icons.faArrowUpRightFromSquare,
    href: "https://izzitech.vercel.app/",
  },
  {
    id: 3,
    text: "Acessar LinkedIn",
    icon: icons.faLinkedin,
    href: "https://linkedin.com/in/nolabru/",
  },
  {
    id: 4,
    text: "Acessar GitHub",
    icon: icons.faGithub,
    href: "https://github.com/nolabru/",
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
    background: security,
    title: "Ax Security",
    hrefProject: "https://axsecurity.com.br/",
    description:
      "Projeto desenvolvido para a empresa de segurança Ax Security. O site é totalmente intuitivo e responsivo, refletindo a expertise da empresa em soluções de segurança, com destaque para os serviços oferecidos e os produtos comercializados.",
    tools: languages[0],
    state: "Professional",
  },
  {
    background: doctor,
    title: "Doutora Ana Esther Fukumoto",
    hrefProject: "https://draanaestherfukumoto.com.br/",
    description:
      "Projeto criado para o consultório da Dra. Ana Esther Fukumoto, com o objetivo de apresentar informações sobre o consultório, os serviços prestados e a trajetória profissional da doutora.",
    tools: languages[1],
    state: "Professional",
  },
  {
    background: developer,
    title: "Izzi Tech",
    hrefProject: "https://izzitech.vercel.app/",
    description:
      "Projeto desenvolvido para a empresa de tecnologia Izzi Tech, uma empresa especializada no desenvolvimento de soluções digitais completas, mostrando seus serviços, projetos e clientes satisfeitos",
    tools: languages[2],
    state: "Professional",
  },
  {
    background: secretWord,
    title: "Secret Word",
    hrefProject: "https://nolabru.github.io/Secret-Word/",
    hrefRepository: "https://github.com/nolabru/Secret-Word/",
    description:
      "Projeto pessoal que simula um jogo da forca, no qual o usuário deve adivinhar a palavra secreta. Desenvolvido com foco em interatividade e lógica de programação.",
    tools: languages[2],
  },
  {
    background: bmi,
    title: "Calculadora de IMC",
    hrefProject: "https://nolabru.github.io/Calculadora-IMC/",
    hrefRepository: "https://github.com/nolabru/Calculadora-IMC/",
    description:
      "Projeto pessoal desenvolvido para o cálculo do Índice de Massa Corporal (IMC), oferecendo ao usuário uma forma prática de obter informações relacionadas à saúde e bem-estar.",
    tools: languages[1],
  },
  {
    background: cupcake,
    title: "Loja de Cupcakes",
    hrefRepository: "https://github.com/nolabru/Nolacake/",
    description:
      "Projeto integrador transdisciplinar da universidade, criado com o objetivo de simular um sistema de venda de cupcakes, proporcionando ao usuário uma experiência de compra prática, visualmente agradável e intuitiva.",
    tools: languages[0],
    state: "Personal",
  },
  {
    background: dachshund,
    title: "A História da Belinha",
    hrefProject: "https://nolabru.github.io/Project-Belinha/",
    hrefRepository: "https://github.com/nolabru/Project-Belinha/",
    description:
      "Projeto pessoal dedicado à Belinha, minha cachorrinha, compartilhando sua história de vida e superações. Este foi um dos meus primeiros projetos e tem grande valor sentimental.",
    tools: languages[1],
  },
  {
    background: login,
    title: "Tela de Login",
    hrefProject: "https://nolabru.github.io/Project-Login/",
    hrefRepository: "https://github.com/nolabru/Project-Login/",
    description:
      "Projeto desenvolvido para criação de uma tela de login simples, com foco na usabilidade, design funcional e uma interface interativa.",
    tools: languages[1],
  },
];

// Projects Buttons
export const buttonProjects = [
  {
    icon: icons.faLink,
    text: "Projeto",
  },
  {
    icon: icons.faGithub,
    text: "Repositório",
  },
  {
    icon: icons.faCaretRight,
    text: "Detalhes",
  },
];

export const toolTitle = ["Estudando", "Ferramentas", "Habilidades"];

// My Tools
export const tools = [
  {
    icon: icons.faAngular,
    category: "Estudando",
    techDescription: "Angular - 3 Meses de Estudo",
  },
  {
    icon: icons.faNodeJs,
    category: "Estudando",
    techDescription: "NodeJs - 5 Meses de Estudo",
  },
  {
    icon: icons.faGitAlt,
    category: "Ferramentas",
    techDescription: "Git - 3 Anos de Experiência",
  },
  {
    icon: icons.faGithub,
    category: "Ferramentas",
    techDescription: "GitHub - 3 Anos de Experiência",
  },
  {
    icon: icons.faFigma,
    category: "Ferramentas",
    techDescription: "Figma - 2 Anos de Experiência",
  },
  {
    icon: icons.faUbuntu,
    category: "Ferramentas",
    techDescription: "Ubuntu - 1 Ano de Experiência",
  },
  {
    icon: icons.faHtml5,
    category: "Habilidades",
    techDescription: "HTML5 - 4 Anos de Experiência",
  },
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
    techDescription: "CSS3 - 4 Anos de Experiência",
  },
  {
    icon: icons.faJs,
    category: "Habilidades",
    techDescription: "JavaScript - 3 Anos de Experiência",
  },
  {
    icon: icons.faReact,
    category: "Habilidades",
    techDescription: "ReactJs - 1 Ano de Experiência",
  },
  {
    icon: icons.faPython,
    category: "Habilidades",
    techDescription: "Python - 4 Anos de Experiência",
  },
];

// Social Links

export const socialLinks = [
  { icon: icons.faLinkedin, href: "https://linkedin.com/in/nolabru" },
  { icon: icons.faWhatsapp, href: "https://wa.me/5511980327136" },
];
