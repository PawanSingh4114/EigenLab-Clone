import { FileSearch, Share2, Bot, Activity } from "lucide-react";

const BLUE = "#1e9bff";
const TEAL = "#12d68a";
const GREEN = "#6cc04a";

export const caseStudiesHeader = {
  eyebrow: "Case Studies",
  titleStart: "Field-proven",
  titleGradient: "Industrial AI",
  text: "Representative engagements showing how Industrial AI delivers measurable engineering and operational value. Customer names withheld under confidentiality.",
};

export const caseStudies = [
  {
    number: "01",
    title: "AI-Assisted EPC Proposal Review",
    tags: ["EPC", "Document AI"],
    icon: FileSearch,
    accent: BLUE,
    challenge:
      "Engineering teams were spending weeks reviewing large proposal packages — drawings, specifications and commercial documents — under tight bid deadlines.",
    solution:
      "An AI-assisted proposal analysis workflow that reads the full package and extracts scope, resources, risks, deliverables, assumptions and exclusions — with engineers validating every output.",
    impact: [
      "Weeks of review compressed to days",
      "Clause-level traceability to source documents",
      "Excel-ready structured output",
      "Human-in-the-loop validation throughout",
    ],
  },
  {
    number: "02",
    title: "P&ID to Structured Engineering Graph",
    tags: ["Brownfield", "Knowledge Graph"],
    icon: Share2,
    accent: TEAL,
    challenge:
      "Decades of brownfield P&ID data sat locked in PDFs, CAD files and inconsistent engineering databases — invisible to modern digital tools.",
    solution:
      "Engineering data converted into structured nodes and relationships with DEXPI-ready output, loaded into a graph database that connects every tag, line and instrument.",
    impact: [
      "Faster digital twin onboarding",
      "End-to-end tag traceability",
      "Search across all engineering data",
      "Foundation for AI copilots",
    ],
  },
  {
    number: "03",
    title: "Smart 3D Engineering Co-Pilot",
    tags: ["Agentic AI", "Smart 3D"],
    icon: Bot,
    accent: GREEN,
    challenge:
      "Engineers performed repetitive modeling, data extraction and report generation by hand inside Smart 3D and related engineering tools.",
    solution:
      "An agentic co-pilot architecture that operates Smart 3D and engineering databases on behalf of the engineer — automating modeling tasks, data retrieval and design checks.",
    impact: [
      "Repetitive modeling work automated",
      "Faster engineering data retrieval",
      "Automated design checks",
      "Higher engineering throughput",
    ],
  },
  {
    number: "04",
    title: "Industrial Digital Twin for Asset Performance",
    tags: ["Digital Twin", "Operations"],
    icon: Activity,
    accent: BLUE,
    challenge:
      "Operations teams lacked forward visibility into asset health, process behavior and future failure risk across critical equipment.",
    solution:
      "Time-series data, engineering metadata, AI models and physics-based logic fused into one live digital twin dashboard for asset performance.",
    impact: [
      "Live asset health monitoring",
      "Early anomaly detection",
      "Smarter maintenance planning",
      "Confident operational decisions",
    ],
  },
];

export const caseStudiesCta = {
  titleStart: "Want a similar outcome",
  titleGradient: "for your team?",
  text: "Start with a focused pilot on your own data — measurable results before you scale.",
  primary: { label: "Start a Pilot", to: "/" },
  secondary: { label: "Book a Discovery Call", to: "/" },
};