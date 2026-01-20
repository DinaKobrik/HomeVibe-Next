import { Suspense } from "react";
import { CatalogClient } from "./catalog-client";
import { getAllProducts } from "@/lib/data/products";

export default async function CatalogPage() {
  const products = await getAllProducts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogClient initialProducts={products} />
    </Suspense>
  );
}
