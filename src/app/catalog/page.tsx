import { Suspense } from "react";
import CatalogClient from "../../components/sections/catalog/catalog-client/CatalogClient";
import { getAllProducts } from "@/lib/data/products";

export default async function CatalogPage() {
  const products = await getAllProducts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogClient initialProducts={products} />
    </Suspense>
  );
}
