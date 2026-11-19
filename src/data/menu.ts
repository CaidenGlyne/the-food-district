
export const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Dumplings",
  "Sides",
  "Drinks",
] as const;

export type Category = (typeof categories)[number];

export type MenuItem = {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  price: string;
  image: string;
  alt: string;
  spicy?: boolean;
  dietaryTags?: string[];
  allergens?: string[];
};

export const menuItems: MenuItem[] = [
  // BURGERS
  {
    id: 1,
    name: "The District Burger",
    category: "Burgers",
    description: "Beef patty, melted cheese, lettuce, tomato and house sauce.",
    price: "R89",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85",
    alt: "Gourmet cheeseburger",
  },
  {
    id: 2,
    name: "Double Smash",
    category: "Burgers",
    description: "Two smashed patties, double cheese and pickles.",
    price: "R109",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700&q=85",
    alt: "Double smash burger",
  },
  {
    id: 3,
    name: "BBQ Bacon Burger",
    category: "Burgers",
    description: "Beef, crispy bacon, cheddar and smoky BBQ sauce.",
    price: "R115",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&q=85",
    alt: "Bacon cheeseburger",
  },
  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken, fresh lettuce and creamy mayo.",
    price: "R95",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700&q=85",
    alt: "Crispy chicken burger",
  },

  // PIZZA
  {
    id: 5,
    name: "Classic Pepperoni",
    category: "Pizza",
    description: "Tomato sauce, mozzarella and generous pepperoni.",
    price: "R119",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=85",
    alt: "Pepperoni pizza",
  },
  {
    id: 6,
    name: "Garden Pizza",
    category: "Pizza",
    description: "Fresh vegetables, mozzarella and tomato sauce.",
    price: "R115",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85",
    alt: "Vegetable pizza",
  },
  {
    id: 7,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    description: "Chicken, mozzarella, red onion and BBQ drizzle.",
    price: "R135",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=700&q=85",
    alt: "Chicken pizza",
  },
  {
    id: 8,
    name: "Margherita",
    category: "Pizza",
    description: "Classic mozzarella, tomato and fresh basil.",
    price: "R99",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=85",
    alt: "Margherita pizza",
  },

  // DUMPLINGS
  {
    id: 9,
    name: "Steamed Dumplings",
    category: "Dumplings",
    description: "Soft steamed dumplings with a savoury dipping sauce.",
    price: "R75",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=85",
    alt: "Steamed dumplings",
  },
  {
    id: 10,
    name: "Crispy Dumplings",
    category: "Dumplings",
    description: "Golden pan-fried dumplings with a crisp finish.",
    price: "R79",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=700&q=85",
    alt: "Pan fried dumplings",
  },
  {
    id: 11,
    name: "Chilli Dumplings",
    category: "Dumplings",
    description: "Dumplings finished with a spicy chilli dressing.",
    price: "R85",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=85",
    alt: "Asian dumplings",
    spicy: true,
  },

  // SIDES
  {
    id: 12,
    name: "Loaded Fries",
    category: "Sides",
    description: "Golden fries topped with cheese and savoury extras.",
    price: "R55",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85",
    alt: "Loaded fries",
  },
  {
    id: 13,
    name: "Onion Rings",
    category: "Sides",
    description: "Crunchy golden onion rings.",
    price: "R45",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=700&q=85",
    alt: "Onion rings",
  },
  {
    id: 14,
    name: "Chicken Wings",
    category: "Sides",
    description: "Juicy wings coated in a flavourful sauce.",
    price: "R79",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&q=85",
    alt: "Chicken wings",
  },

  // DRINKS
  {
    id: 15,
    name: "Classic Milkshake",
    category: "Drinks",
    description: "A thick, creamy milkshake. Choose your favourite flavour.",
    price: "R49",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700&q=85",
    alt: "Creamy milkshake",
  },
  {
    id: 16,
    name: "Fresh Lemonade",
    category: "Drinks",
    description: "Refreshing lemonade with a citrus twist.",
    price: "R35",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700&q=85",
    alt: "Fresh lemonade",
  },
  {
    id: 17,
    name: "Iced Coffee",
    category: "Drinks",
    description: "Chilled coffee served over ice.",
    price: "R45",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=85",
    alt: "Iced coffee",
  },
  {
    id: 18,
    name: "Fruit Smoothie",
    category: "Drinks",
    description: "A refreshing blended fruit drink.",
    price: "R49",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700&q=85",
    alt: "Fresh fruit smoothie",
  },
];
