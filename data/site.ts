/*
 * PORTFOLIO CONTENT HUB
 * ---------------------
 * Edit this file to change wording, links, projects, or list items.
 * Edit app/globals.css to change colors, fonts, spacing, or styling.
 */

export const siteContent = {
  name: "Jonathan Cagle",
  initials: "JC",
  role: "Applied Computing",
  location: "Arizona",
  availability: "Open to meaningful technical work",
  description:
    "Software, cybersecurity, systems, and automation—designed with clarity and built for practical use.",
  githubUrl: "https://github.com/Jc007-code",
  footerNote: "Built in Arizona with Next.js, TypeScript, and a bias toward useful work.",
} as const;

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
  repository?: string;
};

export const projects: Project[] = [
  {
    title: "Inbox Avenger",
    eyebrow: "Cybersecurity + Software",
    summary:
      "A Chrome extension that combines transparent rules and local machine learning to classify suspicious, unwanted, promotional, transactional, and useful email.",
    tags: ["Cybersecurity", "Chrome MV3", "Local ML"],
    status: "Public repository · Version 5.1",
    href: "/projects#inbox-avenger",
    repository: "https://github.com/Jc007-code/inbox-avenger",
  },
  {
    title: "Automation Atlas",
    eyebrow: "Full-stack Development",
    summary:
      "A modern web application centered on turning complex automation workflows into clear, usable systems.",
    tags: ["Next.js", "TypeScript", "Automation"],
    status: "Flagship project · Details coming soon",
    href: "/projects#automation-atlas",
  },
  {
    title: "Gutter Guru",
    eyebrow: "Professional Case Study",
    summary:
      "Selected professional work presented as a case study, focused on contribution, process, and outcomes.",
    tags: ["Client work", "Web", "Delivery"],
    status: "Case study only · No private repository linked",
    href: "/professional-work#gutter-guru",
  },
  {
    title: "Home Lab & Systems",
    eyebrow: "Infrastructure + Operations",
    summary:
      "Hands-on systems work spanning networking, services, troubleshooting, automation, and resilient operations.",
    tags: ["Linux", "Networking", "Automation"],
    status: "Living lab journal · Details coming soon",
    href: "/lab",
  },
];

export const homeContent = {
  hero: {
    eyebrow: siteContent.availability,
    titleLead: "I build useful systems where",
    titleAccent: "software, security, and automation meet.",
    intro:
      "I’m Jonathan Cagle, an Applied Computing professional who turns ambiguous problems into dependable tools, clearer workflows, and practical outcomes.",
    primaryAction: ["View selected work", "/projects"],
    secondaryAction: ["More about me", "/about"],
  },
  fieldNotes: {
    eyebrow: "Field notes · Arizona",
    greekMotto: "Τέχνη · Λόγος · Πράξις",
    mottoTranslation: "craft · reason · practice",
    items: [
      ["Craft", "Software development"],
      ["Discipline", "Cybersecurity"],
      ["Foundation", "Systems + networking"],
      ["Leverage", "Automation"],
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    title: "Projects with a point of view.",
    linkLabel: "See all projects",
  },
  principles: {
    eyebrow: "How I work",
    items: [
      {
        number: "01",
        title: "Understand the real problem",
        text: "Start with context, constraints, and the person on the other side of the screen.",
      },
      {
        number: "02",
        title: "Make complexity legible",
        text: "Design systems and explanations that people can understand, trust, and maintain.",
      },
      {
        number: "03",
        title: "Ship, learn, improve",
        text: "Build a strong first version, test assumptions, and make the next decision with evidence.",
      },
    ],
  },
} as const;

export const pageContent = {
  about: {
    hero: {
      eyebrow: "About",
      title: "A builder who likes the whole system.",
      intro:
        "I work across software, security, infrastructure, and automation—especially where understanding the connections matters as much as writing the code.",
    },
    sectionTitle: "My perspective",
    paragraphs: [
      "I’m drawn to practical problems: tools that remove friction, systems that become more dependable, and technical ideas that need a clear path into the real world.",
      "This portfolio begins with my strongest independent and professional work. Coursework and academic artifacts will be added later as a separate archive.",
    ],
    focusTitle: "Current focus",
    focusItems: [
      "Applied software development",
      "Defensive cybersecurity",
      "Systems and networking",
      "Workflow automation",
      "Technical communication",
    ],
  },
  projects: {
    hero: {
      eyebrow: "Projects",
      title: "Selected builds and experiments.",
      intro:
        "A growing collection of products, tools, and technical explorations. Detailed write-ups, demos, and approved source links will be added as each project is prepared for publication.",
    },
  },
  professionalWork: {
    hero: {
      eyebrow: "Professional work",
      title: "Contribution, process, and outcomes.",
      intro: "Selected work is documented with care for client confidentiality and repository ownership.",
    },
    caseStudy: {
      eyebrow: "Case study · Draft",
      title: "Gutter Guru",
      summary:
        "A professional web project that will be presented through the problems addressed, Jonathan’s specific contributions, the delivery process, and measurable outcomes.",
      boundaryTitle: "Publication boundary",
      boundaryText:
        "This is a case study only. No private, client-owned, or Josh-owned repository is linked or represented as Jonathan’s work.",
    },
  },
  lab: {
    hero: {
      eyebrow: "Home lab",
      title: "Learning by operating real systems.",
      intro:
        "A living record of infrastructure experiments, network design, service deployment, troubleshooting, and automation.",
    },
    items: [
      ["Systems", "Linux services, configuration, observability, and resilient operations."],
      ["Networking", "Topology, segmentation, secure access, and diagnosing what happens between endpoints."],
      ["Automation", "Repeatable setup, maintenance workflows, and removing fragile manual steps."],
    ],
    status: "Lab notes coming soon",
  },
  academic: {
    hero: {
      eyebrow: "Academic archive",
      title: "Selected academic work, with context.",
      intro:
        "Coursework belongs here when it demonstrates a real process, technical growth, and a result worth explaining.",
    },
    label: "First archive entry · ACO 494",
    title: "Inbox Avenger",
    text: "A collaborative software project exploring local email classification, safer inbox management, iterative prototyping, and the tradeoffs between browser-based scanning and Gmail API integration.",
    collaborators: "Team project with Benjamin Marshall and Jordan Wishom.",
    documents: [
      {
        label: "Project paper",
        detail: "Five-page design, implementation, testing, and reflection paper.",
        href: "https://github.com/Jc007-code/inbox-avenger/blob/main/docs/academic/inbox-avenger-project-paper.pdf",
      },
      {
        label: "Final status presentation",
        detail: "Nineteen-slide walkthrough of Versions 1-5 and future direction.",
        href: "https://github.com/Jc007-code/inbox-avenger/blob/main/docs/academic/inbox-avenger-final-status-report.pdf",
      },
    ],
    repositoryLabel: "View the project repository",
    repositoryUrl: "https://github.com/Jc007-code/inbox-avenger",
  },
  resume: {
    hero: {
      eyebrow: "Resume",
      title: "Experience at a glance.",
      intro: "A concise resume will be added here after the public details and final document are reviewed.",
    },
    label: "Resume placeholder",
    title: "Want to start a conversation?",
    text: "Until the final resume is published, the projects and professional-work sections provide the clearest picture of Jonathan’s work.",
    action: "Get in touch",
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      intro:
        "For opportunities, collaboration, or a thoughtful technical conversation, GitHub is the best public starting point.",
    },
    title: "Find me online",
    text: "More contact options can be added here whenever you decide which details you want to publish.",
    action: "Visit GitHub profile",
  },
} as const;
