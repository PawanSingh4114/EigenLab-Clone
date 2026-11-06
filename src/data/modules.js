import { Gauge, Wrench, Boxes, Bot } from "lucide-react";

const BLUE = "#1e9bff";
const TEAL = "#12d68a";
const GREEN = "#4cc04c";

export const modulesHeader = {
  eyebrow: "Core Modules",
  titleStart: "Purpose-built",
  titleGradient: "AI modules",
  text: "Focused intelligence for production, maintenance, simulation and field knowledge. Each module connects engineering context with the data your team uses to make decisions.",
};

// heading ek array hai: har item screenshot ki ek line hai
export const modules = [
  {
    name: "Production Optimization",
    heading: ["Find better operating settings."],
    text: "Use production data and process constraints to explore adjustments to equipment and operating parameters. Help engineers evaluate the balance between output, energy use and asset performance.",
    worksWith: "Production telemetry, equipment settings and operating limits.",
    helps: "Compare operating adjustments and identify opportunities to improve performance.",
    cta: { label: "Explore EigenFlow", to: "/products#eigenflow" },
    accent: BLUE,
    icon: Gauge,
  },
  {
    name: "Predictive Maintenance",
    heading: ["Spot changes before they", "become disruptions."],
    text: "Look for abnormal patterns in equipment signals and track how asset condition changes over time. Give maintenance teams a clearer starting point for investigation and planning.",
    worksWith: "Vibration, pressure and other equipment condition signals.",
    helps: "Investigate anomalies, assess degradation and prioritize maintenance attention.",
    cta: { label: "Explore predictive intelligence", to: "/solutions#predictive" },
    accent: TEAL,
    icon: Wrench,
  },
  {
    name: "Digital Twin & Physics AI",
    heading: ["Explore what could happen", "before making a change."],
    text: "Connect asset models with operating data and engineering physics. Use simulation to understand process behavior and examine how proposed changes could affect capacity, reliability or energy use.",
    worksWith: "Engineering models, process conditions and sensor data.",
    helps: "Compare what-if scenarios to inform engineering and operating decisions.",
    cta: { label: "Explore digital twin scenarios", to: "/solutions#digital-twin" },
    accent: GREEN,
    icon: Boxes,
  },
  {
    name: "GenAI Field Copilot",
    heading: ["Put engineering knowledge within", "reach."],
    text: "Bring technical documents and operating records into a conversational workflow. Help field teams find relevant information, investigate issues and prepare reports using their existing knowledge base.",
    worksWith: "O&M manuals, P&IDs, shift logs and incident reports.",
    helps: "Find context for operational questions and prepare draft reports for team review.",
    cta: { label: "Explore AI copilots", to: "/solutions#copilots" },
    accent: TEAL,
    icon: Bot,
  },
];

export const modulesFooter = {
  title: "Start with the workflow that matters most.",
  text: "Tell us what you want to improve. We'll help identify a module and the data it needs.",
  cta: { label: "Discuss your use case", to: "/contact" },
};