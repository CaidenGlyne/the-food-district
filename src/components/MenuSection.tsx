
"use client";

import { useEffect, useState } from "react";

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Dumplings",
  "Sides",
  "Drinks",
] as const;

type Category = (typeof categories)[number];

const menuItems = [
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

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
  function handleCategorySelect(event: Event) {
    const selected = (event as CustomEvent<string>).detail;

    if (categories.includes(selected as Category)) {
      setActiveCategory(selected as Category);
    }
  }

  window.addEventListener("food-category-select", handleCategorySelect);

  return () => {
    window.removeEventListener("food-category-select", handleCategorySelect);
  };
}, []);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#f8f5ef] px-4 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9c8b7] bg-white/70 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a44830]">
            <span className="h-2 w-2 rounded-full bg-[#b7472a]" />
            Explore the menu
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-6xl">
            Something for
            <span className="block text-[#b7472a]">every craving.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#77716a] sm:text-base sm:leading-8">
            From stacked burgers to handcrafted pizzas, delicious dumplings
            and refreshing drinks. Find your next favourite.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 -mx-4 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#b7472a] bg-[#b7472a] text-white shadow-md"
                  : "border-[#d9cfc4] bg-white/60 text-[#514a43] hover:border-[#b7472a] hover:text-[#b7472a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu cards */}
        <div
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          aria-live="polite"
        >
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="menu-card-reveal group min-w-0 overflow-hidden rounded-xl border border-[#e8dfd5] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4b3020]/10 sm:rounded-2xl"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eee7de]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <span className="absolute left-2 top-2 rounded-full border border-white/50 bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#8c4834] backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[9px]">
                  {item.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-3 sm:p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <h3 className="text-sm font-bold leading-snug tracking-tight text-[#24221f] sm:text-lg">
                    {item.name}
                  </h3>

                  <span className="text-sm font-black text-[#b7472a] sm:shrink-0 sm:text-base">
                    {item.price}
                  </span>
                </div>

                <p className="mt-2 min-h-[60px] text-[10px] leading-[1.6] text-[#77716a] sm:mt-3 sm:min-h-[60px] sm:text-sm sm:leading-6">
                  {item.description}
                </p>

                <div className="mt-3 h-px w-full bg-[#eee7de] sm:mt-5" />

                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#a69a8d] sm:text-[9px] sm:tracking-[0.2em]">
                    Food District
                  </span>

                  <span className="text-[9px] font-semibold text-[#b7472a] sm:text-[10px]">
                    Explore
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="text-xs leading-6 text-[#92877c]">
            A little something for every kind of craving.
          </p>
        </div>
      </div>
    </section>
  );
}
