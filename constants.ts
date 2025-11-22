import { Product, NavLink, Franchise } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Películas', href: '#' },
  { label: 'Series', href: '#' },
  { label: 'Comics', href: '#' },
  { label: 'Deportes', href: '#' },
  { label: 'Personalidades', href: '#' },
];

export const FRANCHISES: Franchise[] = [
  { id: '1', name: 'Disney', logoText: 'Disney', color: 'text-blue-900' },
  { id: '2', name: 'Marvel', logoText: 'MARVEL', color: 'text-red-600' },
  { id: '3', name: 'Nintendo', logoText: 'Nintendo', color: 'text-red-500' },
  { id: '4', name: 'PlayStation', logoText: 'PlayStation', color: 'text-blue-700' },
  { id: '5', name: 'Nickelodeon', logoText: 'Nickelodeon', color: 'text-orange-500' },
];

// Helper to get multiple images easily
const getImages = (id: string) => [
  `https://picsum.photos/seed/${id}1/600/600`,
  `https://picsum.photos/seed/${id}2/600/600`,
  `https://picsum.photos/seed/${id}3/600/600`,
  `https://picsum.photos/seed/${id}4/600/600`,
];

const LOREM = "Figura coleccionable de vinilo con diseño estilizado. Ideal para coleccionistas y fans de la franquicia. Viene en una caja con ventana transparente, perfecta para exhibir sin abrir. Altura aproximada de 9.5 cm.";

export const PRODUCTS: Product[] = [
  {
    id: 'p_messi',
    name: 'Lionel Messi',
    image: 'https://m.media-amazon.com/images/I/61H+D5z+gPL._AC_SL1161_.jpg', // Specific image attempt, fallback to others if broken in real app, but using placeholder url structure below for reliability in this environment if needed. 
    // Using a reliable placeholder that looks like a pop for the demo if external hotlink fails, 
    // but I will try to use a generic structure for the array.
    images: [
      'https://m.media-amazon.com/images/I/61H+D5z+gPL._AC_SL1161_.jpg',
      'https://m.media-amazon.com/images/I/61-2ZgXk2lL._AC_SL1200_.jpg',
      'https://m.media-amazon.com/images/I/61P2sWkC5pL._AC_SL1200_.jpg',
      'https://m.media-amazon.com/images/I/71M9t-f2C6L._AC_SL1500_.jpg'
    ],
    price: 299.00,
    category: 'Deportes',
    description: "Lionel Andrés Messi nació el 24 de junio de 1987 en Rosario, Argentina. Con Argentina, alcanzó la gloria al ganar la Copa América 2021 y la Copa del Mundo 2022 en Catar, consolidando su legado como uno de los mejores futbolistas de la historia. Actualmente juega en el Inter Miami de la MLS, continuando su carrera como ícono del deporte y símbolo de dedicación, humildad y excelencia futbolística."
  },
  {
    id: 'p1',
    name: 'Godzilla',
    image: 'https://picsum.photos/seed/godzilla/400/400',
    images: getImages('godzilla'),
    price: 15.99,
    category: 'Películas',
    description: LOREM
  },
  {
    id: 'p2',
    name: 'Slash',
    image: 'https://picsum.photos/seed/slash/400/400',
    images: getImages('slash'),
    price: 12.99,
    category: 'Música',
    description: LOREM
  },
  {
    id: 'p3',
    name: 'Freddie Mercury',
    image: 'https://picsum.photos/seed/freddie/400/400',
    images: getImages('freddie'),
    price: 14.99,
    category: 'Música',
    description: LOREM
  },
  {
    id: 'p4',
    name: 'Axl Rose',
    image: 'https://picsum.photos/seed/axl/400/400',
    images: getImages('axl'),
    price: 13.99,
    category: 'Música',
    description: LOREM
  },
  {
    id: 'p5',
    name: 'Spider-Man',
    image: 'https://picsum.photos/seed/spidey/400/400',
    images: getImages('spidey'),
    price: 11.99,
    category: 'Comics',
    description: LOREM
  },
  {
    id: 'p6',
    name: 'Darth Vader',
    image: 'https://picsum.photos/seed/vader/400/400',
    images: getImages('vader'),
    price: 16.99,
    category: 'Películas',
    description: LOREM
  },
  {
    id: 'p7',
    name: 'Harry Potter',
    image: 'https://picsum.photos/seed/harry/400/400',
    images: getImages('harry'),
    price: 12.99,
    category: 'Películas',
    description: LOREM
  },
  {
    id: 'p8',
    name: 'Batman',
    image: 'https://picsum.photos/seed/batman/400/400',
    images: getImages('batman'),
    price: 13.99,
    category: 'Comics',
    description: LOREM
  }
];