import { CatalogClient } from "./catalog-client";
import { getAllProducts } from "@/lib/data/products";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  const products = await getAllProducts();

  return (
    <>
      <CatalogClient initialProducts={products} />
    </>
  );
}
