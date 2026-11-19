
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Utensils,
  Search,
  Flame,
  Leaf,
  Info,
  X,
} from "lucide-react";

import {
  categories,
  menuItems,
  type Category,
} from "@/data/menu";

export default function DigitalMenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#24221f]">
      <header className="sticky top-0 z-40 border-b border-[#e8dfd5] bg-[#f8f5ef]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-[#77716a] transition hover:text-[#b7472a]"
          >
            <ArrowLeft size={16} />
            <span>Home</span>
          </Link>

          <Link
            href="/"
            className="text-base font-black tracking-tight sm:text-lg"
          >
            THE FOOD <span className="text-[#b7472a]">DISTRICT.</span>
          </Link>

          <Utensils size={19} className="text-[#b7472a]" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b7472a]">
            The Food District
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:mt-4 sm:text-6xl">
            Our <span className="font-serif italic text-[#b7472a]">Menu.</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[#77716a] sm:mt-4 sm:text-sm sm:leading-7">
            Different cravings. One destination. Explore our selection of
            favourites and find something you&apos;ll love.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-7 flex max-w-lg items-center gap-3 rounded-full border border-[#e2d7ca] bg-white px-4 py-3 shadow-sm transition focus-within:border-[#b7472a] sm:mt-9 sm:px-5">
          <Search size={17} className="shrink-0 text-[#a69a8d]" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search dishes and drinks..."
            aria-label="Search menu"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a69a8d]"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="rounded-full p-1 text-[#92877c] transition hover:bg-[#f3eee7] hover:text-[#b7472a]"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="-mx-4 mt-7 flex snap-x gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:mt-8 sm:justify-center sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:py-3 ${
                activeCategory === category
                  ? "border-[#b7472a] bg-[#b7472a] text-white shadow-sm"
                  : "border-[#d9cfc4] bg-white text-[#514a43] hover:border-[#b7472a] hover:text-[#b7472a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results heading */}
        <div className="mt-5 flex items-center justify-between border-b border-[#e5dbd0] pb-3 sm:mt-8">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a44830]">
              Explore
            </p>

            <h2 className="mt-1 text-lg font-bold sm:text-xl">
              {activeCategory === "All" ? "Everything" : activeCategory}
            </h2>
          </div>

          <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#92877c]">
            {filteredItems.length} items
          </span>
        </div>

        {/* Menu items */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex min-w-0 gap-3 rounded-2xl border border-[#e8dfd5] bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:gap-4 sm:p-3.5"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#eee7de] sm:h-32 sm:w-32">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#a44830]">
                    {item.category}
                  </span>

                  {item.spicy && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff0e9] px-2 py-1 text-[9px] font-bold text-[#b7472a]">
                      <Flame size={10} />
                      Spicy
                    </span>
                  )}

                  {item.dietaryTags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-[#edf4e9] px-2 py-1 text-[9px] font-bold text-[#557447]"
                    >
                      <Leaf size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-1.5 text-sm font-bold leading-snug sm:text-base">
                  {item.name}
                </h3>

                <p className="mt-1.5 line-clamp-3 text-[11px] leading-[1.55] text-[#77716a] sm:text-xs sm:leading-5">
                  {item.description}
                </p>

                <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                  <span className="text-sm font-black text-[#b7472a] sm:text-base">
                    {item.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty search results */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <Search size={25} className="mx-auto text-[#b7aa9c]" />

            <p className="mt-4 font-semibold">No dishes found.</p>

            <p className="mt-2 text-sm text-[#77716a]">
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-[#b7472a] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#963b24]"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Dietary information */}
        <section className="mt-12 rounded-2xl border border-[#e8dfd5] bg-[#eee7de] p-5 sm:mt-16 sm:p-7">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-white p-2.5 text-[#b7472a]">
              <Info size={19} />
            </div>

            <div>
              <h2 className="text-sm font-bold sm:text-base">
                Dietary & allergen information
              </h2>

              <p className="mt-2 text-xs leading-6 text-[#6f665e] sm:text-sm">
                Have a food allergy or dietary requirement? Please speak to
                our team before ordering. We&apos;ll be able to help you
                understand the ingredients and preparation of our dishes.
              </p>

              <p className="mt-2 text-[10px] leading-5 text-[#92877c]">
                Ingredients and allergen information must be confirmed with
                the restaurant. Please do not rely on unverified dietary labels.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-[#e5dbd0] pt-8 text-center sm:mt-20">
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
