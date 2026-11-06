import {
  Settings,
  BarChart3,
  BadgeCheck,
  Building2,
  Brain,
  Link2,
  Wrench,
  RefreshCw,
  Wifi,
  Lightbulb,
  Bot,
  Activity,
  Cpu,
} from "lucide-react";

export const heroContent = {
  eyebrow: "Industrial AI Platform",
  titleStart: "Foundation models",
  titleGradient: "built for engineering",
  textLines: [
    "Bridging Engineering Physics and Modern AI for real-world industry.",
    "From Digital Twins to Physics-Informed Neural Networks.",
  ],
  primaryCta: { label: "Get Started", to: "/contact" },
  secondaryCta: { label: "View Case Studies", to: "/case-studies" },
  stats: [
    { value: "50+", label: "Projects delivered" },
    { value: "99.9%", label: "System uptime" },
    { value: "10×", label: "Faster engineering" },
  ],
};

// tone: green | teal | blue (icon ka rang)
export const capabilityRows = {
  top: [
    { label: "Drilling Automation", icon: Settings, tone: "green" },
    { label: "Asset Management", icon: BarChart3, tone: "green" },
    { label: "Quality Control", icon: BadgeCheck, tone: "teal" },
    { label: "Structural Monitoring", icon: Building2, tone: "blue" },
    { label: "Agentic AI", icon: Brain, tone: "green" },
    { label: "Digital Twins", icon: Link2, tone: "teal" },
    { label: "Predictive Maintenance", icon: Wrench, tone: "blue" },
  ],
  bottom: [
    { label: "Data Integration", icon: RefreshCw, tone: "blue" },
    { label: "IoT Sensors", icon: Wifi, tone: "green" },
    { label: "Simulation Engine", icon: Lightbulb, tone: "green" },
    { label: "AI Assistants", icon: Bot, tone: "green" },
    { label: "Process Monitoring", icon: Activity, tone: "teal" },
    { label: "Edge Computing", icon: Cpu, tone: "blue" },
  ],
};