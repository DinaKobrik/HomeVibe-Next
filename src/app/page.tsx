import {
  HeroBanner,
  SeasonalDiscounts,
  Partners,
  PromoBanner,
  Advantages,
  QuickAddCart,
} from "@/components/sections/homepage";

export default async function HomePage() {
  return (
    <>
      <HeroBanner />
      <SeasonalDiscounts />
      <Partners />
      <PromoBanner />
      <Advantages />
      <QuickAddCart />
    </>
  );
}
