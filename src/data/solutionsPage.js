import { Ruler, Bot, Gauge, FileSearch, GitBranch, Database, TrendingUp, Boxes } from "lucide-react";

export const solutionsHero = {
  eyebrow: "Eigenlab / Solutions",
  titleLine1: "Your challenge.",
  titleLine2: "Our engineering.",
  text: "Connect industrial AI to the work that matters. Find solutions for your role, your engineering workflow and your operational priorities.",
  primaryCta: { label: "Explore solutions", to: "/solutions#use-cases" },
  secondaryCta: { label: "Talk to an engineer", to: "/contact" },
  note: "Engineering expertise, from discovery to deployment.",
};

export const lifecycle = {
  eyebrow: "The engineering lifecycle",
  badge: "E / AI",
  title: "A connected path to value.",
  rows: [
    { number: "01", title: "Make engineering data usable", text: "P&IDs · Documents · Project data", icon: Ruler },
    { number: "02", title: "Put intelligence into workflows", text: "Copilots · Reviews · Automation", icon: Bot },
    { number: "03", title: "Make informed plant decisions", text: "Asset condition · What-if scenarios", icon: Gauge },
  ],
  footerLeft: "Engineering physics",
  footerRight: "Modern AI",
};

export const pageTabs = [
  { label: "By your role", to: "/solutions#roles" },
  { label: "By use case", to: "/solutions#use-cases" },
  { label: "How we deliver", to: "/solutions#consulting" },
];

// Ye 6 solutions "role" wale panel mein bhi aate hain aur cards mein bhi.
// id wahi hain jo navbar ke Solutions menu ke links mein hain (/solutions#id).
export const solutions = [
  {
    id: "epc-proposal",
    title: "EPC Proposal Intelligence",
    text: "Turn complex bid packages into a clearer scope, resource estimate and risk picture.",
    checks: ["Extract scope from bid packages", "Support resource estimation", "Flag proposal risks for review"],
    icon: FileSearch,
  },
  {
    id: "pid-intelligence",
    title: "P&ID Intelligence",
    text: "Move from engineering drawings to connected, validated P&ID data.",
    checks: ["Detect equipment and connectivity", "Validate engineering rules", "Export structured DEXPI data"],
    icon: GitBranch,
  },
  {
    id: "data-quality",
    title: "Engineering Data Quality",
    text: "Reconcile tags, drawings and databases across your engineering project.",
    checks: ["Reconcile engineering tags", "Cross-check drawings and databases", "Identify data inconsistencies"],
    icon: Database,
  },
  {
    id: "copilots",
    title: "Engineering Copilots",
    text: "Bring natural-language assistance into everyday engineering workflows.",
    checks: ["Natural-language engineering assistance", "Smart 3D and AVEVA E3D workflows", "Engineering task automation"],
    icon: Bot,
  },
  {
    id: "predictive",
    title: "Predictive Asset Intelligence",
    text: "Use plant data to identify anomalies and understand asset degradation.",
    checks: ["Analyze historian and IoT data", "Detect anomalous behavior", "Forecast asset degradation"],
    icon: TrendingUp,
  },
  {
    id: "digital-twin",
    title: "Digital Twin Scenario Planning",
    text: "Explore what-if scenarios for capacity, reliability and plant performance.",
    checks: [
      "Connect asset models and plant data",
      "Explore capacity and reliability scenarios",
      "Evaluate performance tradeoffs",
    ],
    icon: Boxes,
  },
];

export const rolesSection = {
  eyebrow: "Built around your team",
  title: "A starting point for every role.",
  text: "Choose your team to discover relevant solutions and the workflows they support.",
};

// Role ke id wahi hain jo navbar menu ke "By Role" links mein hain (/solutions#id).
// solutionIds: upar ki "solutions" list ke id.
// NOTE: Sirf "Engineering Teams" ka content screenshot se liya hai.
// Baaki 5 roles ka text aur solutions mere PLACEHOLDER hain. Original site par har role par
// click karke screenshot bhejoge to main asli content laga dunga.
export const roles = [
  {
    id: "engineering-teams",
    title: "Engineering Teams",
    text: "Create better deliverables with connected drawings, data and design assistance.",
    solutionIds: ["pid-intelligence", "data-quality", "copilots"],
  },
  {
    id: "project-epc-teams",
    title: "Project & EPC Teams",
    text: "Reduce proposal and handover effort with structured scope, risk and project data.",
    solutionIds: ["epc-proposal", "data-quality", "pid-intelligence"],
  },
  {
    id: "operations-teams",
    title: "Operations Teams",
    text: "Understand asset condition and plant behavior with the data your teams already collect.",
    solutionIds: ["predictive", "digital-twin", "copilots"],
  },
  {
    id: "maintenance-reliability",
    title: "Maintenance & Reliability",
    text: "Spot degradation early and prioritize maintenance attention with better insight.",
    solutionIds: ["predictive", "digital-twin"],
  },
  {
    id: "it-data-teams",
    title: "IT & Data Teams",
    text: "Connect engineering and operational data into a governed, usable foundation.",
    solutionIds: ["data-quality", "pid-intelligence", "copilots"],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Leaders",
    text: "Find a practical path from first pilot to production across engineering and operations.",
    solutionIds: ["epc-proposal", "predictive", "digital-twin"],
  },
];

export const useCasesSection = {
  eyebrow: "From challenge to outcome",
  title: "Industrial AI, put to work.",
  text: "Explore the problem each solution addresses, how it works and the products that support it.",
};

export const deliverSection = {
  eyebrow: "Expertise behind the technology",
  title: "From first use case to deployment.",
  text: "Engineering-led consulting and implementation to fit your data, systems and delivery needs.",
  items: [
    { title: "Industrial AI Consulting", text: "Use-case discovery, ROI prioritization and an implementation roadmap." },
    { title: "Engineering Automation", text: "Automation for EPC deliverables, CAD/CAE workflows and documents." },
    { title: "Data Engineering & Integration", text: "Connect historians, databases, CAD systems and enterprise platforms." },
    { title: "Digital Twin Implementation", text: "Asset models, simulation integration and performance monitoring." },
    { title: "AI Agents & Copilots", text: "Domain copilots for engineering, maintenance and documents." },
    { title: "Cloud, MLOps & Security", text: "Architecture, model lifecycle, governance and deployment." },
  ],
};

export const solutionsCta = {
  eyebrow: "Build with Eigenlab",
  title: "Where could industrial AI help your team?",
  text: "Bring us a drawing, a workflow or an operational challenge. Together, we’ll identify a useful first step.",
  button: { label: "Talk to an engineer", to: "/contact" },
};