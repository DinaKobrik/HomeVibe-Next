import ProductDetail from "@/components/sections/product/product-detail/product-detail";
import { getProductById } from "@/lib/data/products";
import styles from "./product.module.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const id = Number(params.id);

  const product = await getProductById(id);

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}
