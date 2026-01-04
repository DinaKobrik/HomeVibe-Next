import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "./heart";
import { Button } from "@/components/ui/";
import { CartIcon } from "@/components/icons/cart";
import styles from "./product-card.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  reviews: { rating: number }[];
  thumbnail: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasDiscount = !!product.discountPercentage;
  const discountLabel = hasDiscount
    ? `-${Math.round(product.discountPercentage!)}%`
    : null;

  const originalPrice = hasDiscount
    ? Math.round((product.price * 100) / (100 - product.discountPercentage!))
    : null;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className={styles.image}
          unoptimized
          priority={product.id <= 10}
        />

        {hasDiscount && (
          <div className={styles.discountBadge}>{discountLabel}</div>
        )}

        <div className={styles.favoriteWrapper}>
          <HeartIcon />
        </div>
      </div>

      <Link href="/catalog" className={styles.link}>
        <div className={styles.content}>
          <span className={styles.category}>
            {product.category.replace("-", " ")}
          </span>
          <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.priceGroup}>
            <span className={styles.price}>$ {product.price}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>$ {originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
      <Button variant="secondary" className={styles.addButton}>
        <CartIcon />
      </Button>
    </div>
  );
};
