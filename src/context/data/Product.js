import A from "../../assets/Cavtus Love.avif";
import B from "../../assets/saidverria.avif";
import C from "../../assets/plant2.avif";
import D from "../../assets/plant3.avif";
import E from "../../assets/Cavtus Love.avif";
import F from "../../assets/logo.png";

export const browseCategories = [
  "All Products",
  "Huzz Plants",
  "Plants of Gyatt",
  "Commander's Handbox",
  "Sale",
  "Gyattscriptions",
];

export const products = [
  {
    id: 1,
    name: "Huzz Cactus",
    price: "BDT 9,999.00",
    image: A,
    badge: "New",
    category: "Huzz Plants",
    description:
      "A hardy cactus perfect for beginners. Low maintenance and adds a touch of green to any space.",
  },
  {
    id: 2,
    name: "Tasin's Sterra",
    price: "BDT 9,999.00",
    image: B,
    badge: "New",
    category: "Huzz Plants",
    description: "Elegant succulent with striking foliage. Ideal for modern interiors.",
  },
  {
    id: 3,
    name: "Tasin's Ear",
    price: "BDT 9,999.00",
    image: C,
    category: "Plants of Gyatt",
    description:
      "Unique plant with distinctive ear-shaped leaves. A conversation starter for your home.",
  },
  {
    id: 4,
    name: "Gyatty Cheese Plant",
    oldPrice: "BDT 9,999.00",
    price: "BDT 9,995.00",
    image: D,
    badge: "Sale",
    category: "Commander's Handbox",
    description:
      "Classic monstera with beautiful fenestrated leaves. Thrives in bright, indirect light.",
  },
  {
    id: 5,
    name: "Saidverria",
    price: "BDT 9,999.00",
    image: E,
    badge: "New",
    category: "Gyattscriptions",
    description: "Compact succulent with rosette formation. Perfect for desks and shelves.",
  },
  {
    id: 6,
    name: "Epstein Fig",
    oldPrice: "BDT 50.00",
    price: "BDT 46.00",
    image: F,
    badge: "Sale",
    category: "Commander's Handbox",
    description: "Fiddle leaf fig with large, glossy leaves. A statement plant for any room.",
  },
];
