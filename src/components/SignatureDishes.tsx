
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const signatureDishes = [
  {
    number: "01",
    name: "The District Burger",
    category: "THE BURGER COLLECTION",
    description:
      "A juicy beef patty, melted cheese, crisp lettuce, tomato and our signature sauce.",
    price: "R89",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90",
    alt: "The District Burger",
  },
  {
    number: "02",
    name: "Classic Pepperoni",
    category: "FROM THE PIZZA OVEN",
    description:
      "A golden base layered with tomato sauce, mozzarella and generous pepperoni.",
    price: "R119",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=1200&q=90",
    alt: "Classic pepperoni pizza",
  },
  {
    number: "03",
    name: "Steamed Dumplings",
    category: "THE DUMPLING COLLECTION",
    description:
      "Soft, flavourful dumplings served with a savoury dipping sauce.",
    price: "R75",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=90",
    alt: "Steamed dumplings",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="signature-dishes"
      className="overflow-hidden bg-[#eee7de] px-4 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b7472a]">
              A few favourites
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-6xl">
              Meet the
              <span className="block text-[#b7472a]">standouts.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#77716a]">
            A closer look at some of the dishes that make this food
            destination worth exploring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {signatureDishes.map((dish) => (
            <article
              key={dish.number}
              className="group min-w-0"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#ded3c7]">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold tracking-[0.2em] text-[#8c4834] backdrop-blur-md">
                  SIGNATURE {dish.number}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div className="min-w-0">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#a44830]">
                    {dish.category}
                  </span>

                  <h3 className="mt-2 text-xl font-black tracking-tight text-[#24221f] sm:text-2xl">
                    {dish.name}
                  </h3>
                </div>

                <span className="shrink-0 pt-5 text-lg font-black text-[#b7472a]">
                  {dish.price}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#77716a]">
                {dish.description}
              </p>

              <Link
  href="/menu"
  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#b7472a] transition-all hover:gap-3"
>
  Explore the menu
  <ArrowUpRight size={15} />
</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
