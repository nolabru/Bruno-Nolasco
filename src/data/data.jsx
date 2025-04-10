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
    subtitle: "Uma boa qualidade e total suporte ao cliente.",
  },
  {
    title: "Experiência",
    subtitle: "Desenvolvedor Full Stack com experiência de quatro anos.",
  },
  {
    title: "Projetos",
    subtitle:
      "Clique em detalhes para mais informações e utilize as setas para navegar entre os projetos.",
  },
  {
    title: "Habilidades",
    subtitle: "Passe o cursor do mouse nas habilidades para interação.",
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
      "Desenvolvimento de APIs RESTful escaláveis, integração com sistemas de pagamento e implementação de autenticação OAuth2. Trabalhei principalmente com Node.js, PostgreSQL e Docker.",
  },
  {
    position: "Engenheiro de Software Júnior",
    company: "Iavne Beith Chinuch",
    time: "Jan/2024 - Jan/2025",
    description:
      "Desenvolvimento de APIs RESTful escaláveis, integração com sistemas de pagamento e implementação de autenticação OAuth2. Trabalhei principalmente com Node.js, PostgreSQL e Docker.",
  },
  {
    position: "Desenvolvedor RPA",
    company: "Itaú Unibanco",
    time: "Mar/2022 - Jul/2023",
    description:
      "Desenvolvimento de APIs RESTful escaláveis, integração com sistemas de pagamento e implementação de autenticação OAuth2. Trabalhei principalmente com Node.js, PostgreSQL e Docker.",
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
    href: "https://github.com",
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
    background: "/dachshund.jpg",
    title: "Isso Aqui é Um Teste",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description:
      "Projeto desenvolvido para a empresa de segurança Ax Security, sendo intuitivo e responsivo, refletindo a expertise da empresa em soluções de segurança, trazendo os serviços prestados e produtos.",
    tools: languages[0],
  },
  {
    background: "/dachshund.jpg",
    title: "2",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[1],
  },
  {
    background: "/dachshund.jpg",
    title: "3",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[2],
  },
  {
    background: "/dachshund.jpg",
    title: "4",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[1],
  },
  {
    background: "/dachshund.jpg",
    title: "5",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[2],
  },
  {
    background: "/dachshund.jpg",
    title: "6",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[2],
  },
  {
    background: "/dachshund.jpg",
    title: "7",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description: "Projeto desenvolvido para a empresa de segurança produtos.",
    tools: languages[2],
  },
  {
    background: "/dachshund.jpg",
    title: "8",
    hrefProject: "https://github.com",
    hrefRepository: "https://google.com",
    description:
      "Projeto desenvolvido para a empresa de segurança prestados e produtos.",
    tools: languages[1],
  },
];

// Projects Buttons
export const buttonProjects = [
  {
    icon: icons.faLink,
    text: "Projeto",
    href: "",
  },
  {
    icon: icons.faGithub,
    text: "Repositório",
    href: "",
  },
  {
    icon: icons.faCaretRight,
    text: "Detalhes",
    href: "",
  },
];

export const toolTitle = ["Estudando", "Ferramentas", "Habilidades"];

// My Tools
export const tools = [
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
  },
  {
    icon: icons.faHtml5,
    category: "Ferramentas",
  },
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
  },
  {
    icon: icons.faHtml5,
    category: "Ferramentas",
  },
  {
    icon: icons.faHtml5,
    category: "Estudando",
  },
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
  },
  {
    icon: icons.faHtml5,
    category: "Estudando",
  },
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
  },
  {
    icon: icons.faCss3Alt,
    category: "Habilidades",
  },
  {
    icon: icons.faHtml5,
    category: "Ferramentas",
  },
];
