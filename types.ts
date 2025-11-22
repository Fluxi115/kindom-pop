export interface Product {
  id: string;
  name: string;
  image: string;
  images?: string[]; // Array of additional images
  price: number;
  category: string;
  description?: string; // Long description
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Franchise {
  id: string;
  name: string;
  logoText: string; // Using text representation for the logo for simplicity/copyright
  color: string;
}