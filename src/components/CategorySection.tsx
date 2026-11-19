
"use client";

import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Burgers",
    description: "Juicy, stacked and full of flavour.",
    count: "04 items",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pizza",
    description: "Freshly made. Perfectly baked.",
    count: "04 items",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dumplings",
    description: "Little bites with big personality.",
    count: "03 items",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sides",
    description: "The perfect addition to every meal.",
    count: "03 items",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Drinks",
    description: "Something refreshing for every craving.",
    count: "04 items",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function CategorySection() {
  function selectCategory(category: string) {
    window.dispatchEvent(
      new CustomEvent("food-category-select", {
        detail: category,
      })
    );

    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
  id="categories"
  className="bg-[#f8f5ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#b7472a]">
              Find your favourite
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[#24221f] sm:text-4xl lg:text-5xl">
              What are you{" "}
              <span className="font-serif italic text-[#b7472a]">
                craving?
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#77716a]">
            From familiar favourites to something a little different, there is
            always something worth discovering.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {categories.map((category, index) => (
            <button
              key={category.name}
              type="button"
              onClick={() => selectCategory(category.name)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#24221f] text-left"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5" />

              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-xs font-medium text-white backdrop-blur-sm">
                0{index + 1}
              </div>

              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                  {category.count}
                </p>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
