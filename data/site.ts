export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Professional Work", "/professional-work"],
  ["Lab", "/lab"],
  ["Academic Archive", "/academic-archive"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
] as const;

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  tags: string[];
  status: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Inbox Avenger",
    eyebrow: "Cybersecurity + Software",
    summary: "A security-focused product concept for investigating suspicious messages and helping people make safer decisions.",
    tags: ["Cybersecurity", "Product engineering", "Threat analysis"],
    status: "Flagship project — details coming soon",
    href: "/projects#inbox-avenger",
  },
  {
    title: "Automation Atlas",
    eyebrow: "Full-stack Development",
    summary: "A modern web application centered on turning complex automation workflows into clear, usable systems.",
    tags: ["Next.js", "TypeScript", "Automation"],
    status: "Flagship project — details coming soon",
    href: "/projects#automation-atlas",
  },
  {
    title: "Gutter Guru",
    eyebrow: "Professional Case Study",
    summary: "Selected professional work presented as a case study, focused on contribution, process, and outcomes.",
    tags: ["Client work", "Web", "Delivery"],
    status: "Case study only — no private repository linked",
    href: "/professional-work#gutter-guru",
  },
  {
    title: "Home Lab & Systems",
    eyebrow: "Infrastructure + Operations",
    summary: "Hands-on systems work spanning networking, services, troubleshooting, automation, and resilient operations.",
    tags: ["Linux", "Networking", "Automation"],
    status: "Living lab journal — details coming soon",
    href: "/lab",
  },
];
