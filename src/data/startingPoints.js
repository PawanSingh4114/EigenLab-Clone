import {
  Ruler,
  HardHat,
  Gauge,
  Wrench,
  Database,
  Compass,
  FileText,
  TrendingUp,
  GitBranch,
  Bot,
  Boxes,
} from "lucide-react";

const BLUE = "#1e9bff";
const TEAL = "#12d68a";
const GREEN = "#4cc04c";

export const startingPointHeader = {
  title: "Find the right starting point",
};

export const startingTabs = [
  { id: "need", label: "Your Need" },
  { id: "role", label: "Your Role" },
];

export const startingPoints = {
  // "Your Role" tab: screenshots se liya hua content
  role: [
    { title: "Design & Engineering", to: "/solutions#engineering-teams", accent: BLUE, icon: Ruler },
    { title: "Project & EPC Teams", to: "/solutions#project-epc-teams", accent: TEAL, icon: HardHat },
    { title: "Operations Teams", to: "/solutions#operations-teams", accent: GREEN, icon: Gauge },
    { title: "Maintenance & Reliability", to: "/solutions#maintenance-reliability", accent: BLUE, icon: Wrench },
    { title: "IT & Data Teams", to: "/solutions#it-data-teams", accent: TEAL, icon: Database },
    { title: "Digital Transformation Leaders", to: "/solutions#digital-transformation", accent: GREEN, icon: Compass },
  ],

  // "Your Need" tab: PLACEHOLDER (iska screenshot abhi nahi mila).
  // Maine Solutions menu ke use cases se bhar diya hai, baad mein asli content se badal dena.
  need: [
    { title: "EPC Proposal Intelligence", to: "/solutions#epc-proposal", accent: BLUE, icon: FileText },
    { title: "Engineering Data Quality", to: "/solutions#data-quality", accent: TEAL, icon: Database },
    { title: "Predictive Asset Intelligence", to: "/solutions#predictive", accent: GREEN, icon: TrendingUp },
    { title: "P&ID Intelligence", to: "/solutions#pid-intelligence", accent: BLUE, icon: GitBranch },
    { title: "Engineering Copilots", to: "/solutions#copilots", accent: TEAL, icon: Bot },
    { title: "Digital Twin Scenario Planning", to: "/solutions#digital-twin", accent: GREEN, icon: Boxes },
  ],
};