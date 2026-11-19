
"use client";

import { useEffect, useState } from "react";
import {
  categories,
  menuItems,
  type Category,
} from "@/data/menu";

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

                 <span className="flex items-center gap-1 text-[9px] font-semibold text-[#b7472a] sm:text-[10px]">
  On the menu
  <span aria-hidden="true">→</span>
</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center sm:mt-16">
          <p className="text-xs leading-6 text-[#92877c]">
            A little something for every kind of craving.
          </p>
        </div>
      </div>
    </section>
  );
}
