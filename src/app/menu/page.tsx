
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Utensils, Search } from "lucide-react";

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
  {
    id: 1,
    name: "The District Burger",
    category: "Burgers",
    description: "Beef patty, melted cheese, lettuce, tomato and house sauce.",
    price: "R89",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85",
  },
  {
    id: 2,
    name: "Double Smash",
    category: "Burgers",
    description: "Two smashed patties, double cheese and pickles.",
    price: "R109",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700&q=85",
  },
  {
    id: 3,
    name: "BBQ Bacon Burger",
    category: "Burgers",
    description: "Beef, crispy bacon, cheddar and smoky BBQ sauce.",
    price: "R115",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&q=85",
  },
  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken, fresh lettuce and creamy mayo.",
    price: "R95",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700&q=85",
  },
  {
    id: 5,
    name: "Classic Pepperoni",
    category: "Pizza",
    description: "Tomato sauce, mozzarella and generous pepperoni.",
    price: "R119",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=85",
  },
  {
    id: 6,
    name: "Garden Pizza",
    category: "Pizza",
    description: "Fresh vegetables, mozzarella and tomato sauce.",
    price: "R115",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85",
  },
  {
    id: 7,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    description: "Chicken, mozzarella, red onion and BBQ drizzle.",
    price: "R135",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=700&q=85",
  },
  {
    id: 8,
    name: "Margherita",
    category: "Pizza",
    description: "Classic mozzarella, tomato and fresh basil.",
    price: "R99",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=85",
  },
  {
    id: 9,
    name: "Steamed Dumplings",
    category: "Dumplings",
    description: "Soft steamed dumplings with a savoury dipping sauce.",
    price: "R75",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=85",
  },
  {
    id: 10,
    name: "Crispy Dumplings",
    category: "Dumplings",
    description: "Golden pan-fried dumplings with a crisp finish.",
    price: "R79",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=700&q=85",
  },
  {
    id: 11,
    name: "Chilli Dumplings",
    category: "Dumplings",
    description: "Dumplings finished with a spicy chilli dressing.",
    price: "R85",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=85",
  },
  {
    id: 12,
    name: "Loaded Fries",
    category: "Sides",
    description: "Golden fries topped with cheese and savoury extras.",
    price: "R55",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85",
  },
  {
    id: 13,
    name: "Onion Rings",
    category: "Sides",
    description: "Crunchy golden onion rings.",
    price: "R45",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=700&q=85",
  },
  {
    id: 14,
    name: "Chicken Wings",
    category: "Sides",
    description: "Juicy wings coated in a flavourful sauce.",
    price: "R79",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&q=85",
  },
  {
    id: 15,
    name: "Classic Milkshake",
    category: "Drinks",
    description: "A thick, creamy milkshake. Choose your favourite flavour.",
    price: "R49",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700&q=85",
  },
  {
    id: 16,
    name: "Fresh Lemonade",
    category: "Drinks",
    description: "Refreshing lemonade with a citrus twist.",
    price: "R35",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700&q=85",
  },
  {
    id: 17,
    name: "Iced Coffee",
    category: "Drinks",
    description: "Chilled coffee served over ice.",
    price: "R45",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=85",
  },
  {
    id: 18,
    name: "Fruit Smoothie",
    category: "Drinks",
    description: "A refreshing blended fruit drink.",
    price: "R49",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700&q=85",
  },
];

export default function DigitalMenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#24221f]">
      <header className="border-b border-[#e8dfd5] bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-[#77716a] transition hover:text-[#b7472a]"
          >
            <ArrowLeft size={16} />
            Home
          </Link>

          <Link href="/" className="text-lg font-black tracking-tight">
            THE FOOD <span className="text-[#b7472a]">DISTRICT.</span>
          </Link>

          <Utensils size={19} className="text-[#b7472a]" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b7472a]">
            The Food District
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Our <span className="font-serif italic text-[#b7472a]">Menu.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#77716a]">
            Different cravings. One destination. Explore our selection of
            favourites and find something you'll love.
          </p>
        </div>

        <div className="mx-auto mt-9 flex max-w-md items-center gap-3 rounded-full border border-[#e2d7ca] bg-white px-5 py-3">
          <Search size={17} className="shrink-0 text-[#a69a8d]" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search the menu..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a69a8d]"
          />
        </div>

        <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:justify-center sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition ${
                activeCategory === category
                  ? "border-[#b7472a] bg-[#b7472a] text-white"
                  : "border-[#d9cfc4] bg-white text-[#514a43] hover:border-[#b7472a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {activeCategory === "All" ? "Everything" : activeCategory}
          </h2>
          <span className="text-xs text-[#92877c]">
            {filteredItems.length} items
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 rounded-2xl border border-[#e8dfd5] bg-white p-3 shadow-sm transition hover:shadow-md"
            >
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#eee7de] sm:h-32 sm:w-32">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#a44830]">
                  {item.category}
                </span>

                <h3 className="mt-1 text-sm font-bold leading-snug">
                  {item.name}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#77716a]">
                  {item.description}
                </p>

                <span className="mt-auto pt-2 text-sm font-black text-[#b7472a]">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-semibold">No dishes found.</p>
            <p className="mt-2 text-sm text-[#77716a]">
              Try another search or category.
            </p>
          </div>
        )}

        <footer className="mt-20 border-t border-[#e5dbd0] pt-8 text-center">
          <p className="text-sm font-black tracking-tight">
            THE FOOD <span className="text-[#b7472a]">DISTRICT.</span>
          </p>
          <p className="mt-2 text-xs text-[#92877c]">
            Different cravings. One destination.
          </p>
          <p className="mt-5 text-[10px] text-[#a69a8d]">
            Menu items and prices are currently sample content and should be
            confirmed before publishing.
          </p>
        </footer>
      </section>
    </main>
  );
}
