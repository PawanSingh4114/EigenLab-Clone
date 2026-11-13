import {
  Ruler,
  Bot,
  Gauge,
  Box,
  Repeat,
  Pencil,
  Eye,
  FileText,
  Search,
  ClipboardCheck,
  Database,
} from "lucide-react";

export const productsHero = {
  eyebrow: "Eigenlab / Products",
  titleLine1: "Engineering software.",
  titleLine2: "Real-world intelligence.",
  text: "From the first drawing to everyday plant decisions. Explore tools that help your team design, automate and operate with confidence.",
  primaryCta: { label: "Explore products", to: "/products#explore-products" },
  secondaryCta: { label: "Request a demo", to: "/contact" },
  note: "10 focused products. Built for industrial engineering.",
};

export const lifecycle = {
  eyebrow: "The engineering lifecycle",
  badge: "E / AI",
  title: "Intelligence at every stage.",
  rows: [
    { number: "01", title: "Design & engineer", text: "Drawings · Models · Symbols", icon: Ruler },
    { number: "02", title: "Automate & review", text: "Documents · Reviews · Copilots", icon: Bot },
    { number: "03", title: "Operate & optimize", text: "Plant performance · Contextual data", icon: Gauge },
  ],
  footerLeft: "Engineering physics",
  footerRight: "Modern AI",
};

// Band, sidebar aur cards, teeno isi ek list se bante hain.
// Product ke "id" wahi hain jo navbar ke Products menu ke links mein hain (/products#id).
export const productGroups = [
  {
    id: "design-engineering",
    title: "Design & Engineering",
    tagline: "Build better engineering deliverables.",
    text: "Create, translate and inspect engineering models with tools built for your design workflow.",
    icon: Ruler,
    products: [
      {
        id: "3d-symbol-studio",
        title: "3D Symbol Studio",
        text: "Create parametric Smart 3D symbols visually, without coding.",
        features: ["Visual symbol creation", "Parametric equipment geometry"],
        icon: Box,
      },
      {
        id: "3d-model-translator",
        title: "3D Model Translator",
        text: "Migrate 2D and 3D models between AVEVA and Hexagon platforms.",
        features: ["2D and 3D model migration", "AVEVA and Hexagon workflows"],
        icon: Repeat,
      },
      {
        id: "dexpi-web-drafter",
        title: "DEXPI P&ID Web Drafter",
        text: "Draft and edit DEXPI-compliant P&IDs in a web-based workspace.",
        features: ["Web-based P&ID drafting", "Drawing editing workflows"],
        icon: Pencil,
      },
      {
        id: "dexpi-viewer",
        title: "DEXPI Viewer",
        text: "Open and inspect DEXPI P&IDs in the browser. Free, with no install.",
        features: ["Browser-based viewing", "DEXPI P&ID inspection"],
        icon: Eye,
        badge: "Free browser app",
        appUrl: "https://eigenlab.ai", // PLACEHOLDER: asli app ka link yaha lagana
      },
      {
        id: "pid-to-dexpi",
        title: "P&ID to DEXPI Translator",
        text: "Convert P&ID content into structured, open-standard DEXPI.",
        features: ["P&ID content conversion", "Structured engineering data"],
        icon: FileText,
      },
    ],
  },
  {
    id: "automation-documents",
    title: "Automation & Documents",
    tagline: "Give engineers their time back.",
    text: "Turn documents into usable data and automate repetitive engineering tasks.",
    icon: ClipboardCheck,
    products: [
      {
        id: "pdf-to-pid",
        title: "PDF to P&ID Translation",
        text: "Translate PDF engineering documents into intelligent P&IDs.",
        features: ["PDF engineering document input", "Intelligent P&ID translation"],
        icon: Search,
      },
      {
        id: "document-review",
        title: "Autonomous Engineering Document Review",
        text: "Use AI to review engineering documents for quality and compliance.",
        features: ["AI-assisted document review", "Engineering quality checks"],
        icon: ClipboardCheck,
      },
      {
        id: "co-pilot",
        title: "Smart 3D / AVEVA E3D Co-Pilot",
        text: "A natural-language assistant for Smart 3D and AVEVA E3D workflows.",
        features: ["Natural-language interaction", "Smart 3D workflow assistance"],
        icon: Bot,
      },
    ],
  },
  {
    id: "operations-data",
    title: "Operations & Data",
    tagline: "Connect data to better decisions.",
    text: "Bring engineering context and operational intelligence into the same workflow.",
    icon: Gauge,
    products: [
      {
        id: "eigenflow",
        title: "EigenFlow",
        text: "Apply AI to plant, energy and process optimization.",
        features: ["Plant performance optimization", "Energy optimization"],
        icon: Gauge,
      },
      {
        id: "datahub",
        title: "Eng. dataHub",
        text: "Unify engineering and operational data with industrial context.",
        features: ["Contextual industrial data", "Engineering and IT data unification"],
        icon: Database,
      },
    ],
  },
];

export const productsCta = {
  eyebrow: "Build with Eigenlab",
  title: "Let’s put your engineering data to work.",
  text: "Tell us about your workflow. We’ll help you find the right products and a practical place to start.",
  button: { label: "Talk to an engineer", to: "/contact" },
};