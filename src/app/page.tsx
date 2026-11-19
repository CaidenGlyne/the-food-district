
import { FloatingFoodHero } from "@/components/ui/hero-section-7";
import MenuSection from "@/components/MenuSection";
import CategorySection from "@/components/CategorySection";
import SignatureDishes from "@/components/SignatureDishes";

const heroImages = [
  {
    src: "https://cdn.21st.dev/assets/mirror/cc/cc7d7fbb538d93322e189b55ae4c6eed95aab7da267a9a095b39216070ef65b0.png",
    alt: "Delicious cheeseburger",
    className:
      "left-1 top-7 w-28 sm:left-6 sm:top-16 sm:w-44 md:left-12 md:top-20 md:w-56 lg:left-20 lg:w-72",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/95/95bc0d9d69e76d3729ca42f9525bafd449fd27fa41c9393d1deccb85d79b0639.png",
    alt: "Asian dumplings in a bamboo steamer",
    className:
      "right-1 top-7 w-28 sm:right-6 sm:top-12 sm:w-44 md:right-12 md:top-16 md:w-52 lg:right-20 lg:w-64",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/6e/6e4600ac05444d9dc0396906da4174dcfe42a64c14082d939f0f57cb2ed8113d.png",
    alt: "Fresh pizza slice",
    className:
      "bottom-28 right-1 w-32 sm:bottom-16 sm:right-8 sm:w-44 md:bottom-16 md:right-16 md:w-52 lg:bottom-16 lg:right-28 lg:w-64",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/8e/8ec4fbab8445c1769d3200d674cd3731a0550b21c87bb8bc6938cb3a05932e5b.png",
    alt: "Fresh basil leaf",
    className:
      "left-[25%] top-[18%] w-7 sm:left-[32%] sm:top-[18%] sm:w-12 md:w-14",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/e7/e758e9c35a8360f201c40d0bf3e3433c2b6ff3f759763eb697cbc3803af80e18.png",
    alt: "Fresh tomato slice",
    className:
      "right-[20%] top-[23%] w-6 sm:right-[25%] sm:top-[26%] sm:w-10 md:w-12",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/e7/e758e9c35a8360f201c40d0bf3e3433c2b6ff3f759763eb697cbc3803af80e18.png",
    alt: "Fresh tomato slice",
    className:
      "bottom-[25%] left-[16%] hidden w-10 sm:block md:left-[22%] md:w-12",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingFoodHero
        title="A world of flavour. One destination."
        description="From juicy burgers and handcrafted pizzas to delicious dumplings and everything in between. Discover your next favourite at The Food District."
        images={heroImages}
      />

      <CategorySection />

      <SignatureDishes />

      <MenuSection />
    </main>
  );
}