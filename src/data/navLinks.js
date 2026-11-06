import { productsMenu } from "./productsMenu";
import { solutionsMenu } from "./solutionsMenu";

// Mobile menu ke liye: saare items ek flat list mein
const productChildren = productsMenu.columns.flatMap((col) =>
  col.items.map(({ title, to }) => ({ label: title, to }))
);

const solutionChildren = [
  ...solutionsMenu.roles.items.map(({ title, to }) => ({ label: title, to })),
  ...solutionsMenu.useCases.items.map(({ title, to }) => ({ label: title, to })),
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products", mega: "products", children: productChildren },
  { label: "Solutions", to: "/solutions", mega: "solutions", children: solutionChildren },
  { label: "About", to: "/#process" },
  { label: "Contact", to: "/contact" },
];