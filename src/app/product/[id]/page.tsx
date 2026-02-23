import { ProductDetail, ReviewsBlock } from "@/components/sections/product";
import { getProductById, getAllProducts } from "@/lib/data/products";
import styles from "./product.module.css";

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    const validProducts = products.filter(
      (p) => p.id && p.thumbnail && p.title,
    );
    return validProducts.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("generateStaticParams error:", error);
    return [];
  }
}
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

  return (
    <>
      <ProductDetail product={product} />
      <ReviewsBlock reviews={product.reviews} />
    </>
  );
}
