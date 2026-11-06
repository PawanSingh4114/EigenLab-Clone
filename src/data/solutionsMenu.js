import { FileText, Database, TrendingUp, GitBranch, Bot, Boxes } from "lucide-react";

export const solutionsMenu = {
  eyebrow: "Industrial AI Solutions",
  title: "Start with your business challenge.",
  text: "Find a path from your team's priorities to practical industrial AI.",
  allLink: { label: "Explore all solutions", to: "/solutions" },
  talkLink: { label: "Talk to an engineer", to: "/contact" },

  roles: {
    heading: "By Role",
    items: [
      { title: "Engineering Teams", to: "/solutions#engineering-teams" },
      { title: "Project & EPC Teams", to: "/solutions#project-epc-teams" },
      { title: "Operations Teams", to: "/solutions#operations-teams" },
      { title: "Maintenance & Reliability", to: "/solutions#maintenance-reliability" },
      { title: "IT & Data Teams", to: "/solutions#it-data-teams" },
      { title: "Digital Transformation Leaders", to: "/solutions#digital-transformation" },
    ],
  },

  // Order: pehle left column ke 3 items, phir right column ke 3 items
  useCases: {
    heading: "By Use Case",
    items: [
      { title: "EPC Proposal Intelligence", desc: "Extract scope from bid packages", to: "/solutions#epc-proposal", icon: FileText },
      { title: "Engineering Data Quality", desc: "Reconcile engineering tags", to: "/solutions#data-quality", icon: Database },
      { title: "Predictive Asset Intelligence", desc: "Analyze historian and IoT data", to: "/solutions#predictive", icon: TrendingUp },
      { title: "P&ID Intelligence", desc: "Detect equipment and connectivity", to: "/solutions#pid-intelligence", icon: GitBranch },
      { title: "Engineering Copilots", desc: "Natural-language engineering assistance", to: "/solutions#copilots", icon: Bot },
      { title: "Digital Twin Scenario Planning", desc: "Connect asset models and plant data", to: "/solutions#digital-twin", icon: Boxes },
    ],
  },

  consultingLink: { label: "Consulting & implementation", to: "/solutions#consulting" },
};