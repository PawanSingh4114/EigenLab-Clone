import {
  Box,
  Repeat,
  Pencil,
  Eye,
  FileText,
  Search,
  ListChecks,
  Bot,
  Gauge,
  Database,
} from "lucide-react";

export const productsMenu = {
  eyebrow: "Engineering Software",
  title: "Tools for every stage of engineering.",
  text: "Explore ten products for design, automation and operations.",
  allLink: { label: "Explore all products", to: "/products" },
  talkLink: { label: "Talk to an engineer", to: "/contact" },
  columns: [
    {
      heading: "Design & Engineering",
      items: [
        { title: "3D Symbol Studio", desc: "Visual symbol creation", to: "/products#3d-symbol-studio", icon: Box },
        { title: "3D Model Translator", desc: "2D and 3D model migration", to: "/products#3d-model-translator", icon: Repeat },
        { title: "DEXPI P&ID Web Drafter", desc: "Web-based P&ID drafting", to: "/products#dexpi-web-drafter", icon: Pencil },
        { title: "DEXPI Viewer", desc: "Browser-based viewing", to: "/products#dexpi-viewer", icon: Eye },
        { title: "P&ID to DEXPI Translator", desc: "P&ID content conversion", to: "/products#pid-to-dexpi", icon: FileText },
      ],
    },
    {
      heading: "Automation & Documents",
      items: [
        { title: "PDF to P&ID Translation", desc: "PDF engineering document input", to: "/products#pdf-to-pid", icon: Search },
        { title: "Autonomous Engineering Document Review", desc: "AI-assisted document review", to: "/products#document-review", icon: ListChecks },
        { title: "Smart 3D / AVEVA E3D Co-Pilot", desc: "Natural-language interaction", to: "/products#co-pilot", icon: Bot },
      ],
    },
    {
      heading: "Operations & Data",
      items: [
        { title: "EigenFlow", desc: "Plant performance optimization", to: "/products#eigenflow", icon: Gauge },
        { title: "Eng. dataHub", desc: "Contextual industrial data", to: "/products#datahub", icon: Database },
      ],
    },
  ],
};