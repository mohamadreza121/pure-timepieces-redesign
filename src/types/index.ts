export type Product = {
  slug: string;
  name: string;
  brand: string;
  reference: string;
  price: string;
  availability: "Available" | "Out of stock";
  condition: string;
  includes: string;
  image: string;
  gallery: string[];
  featured: boolean;
  description: string;
  specs: Record<string, string>;
};

export type Review = {
  author: string;
  text: string;
};
