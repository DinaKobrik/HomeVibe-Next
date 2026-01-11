"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./product-detail.module.css";
import { Product } from "@/types/product";
import { ProductInfo } from "../info/product-info";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.images.length > 0 ? product.images[0] : ""
  );

  const thumbnails = product.images;

  return (
    <section className={styles.productDetail}>
      <div className={styles.grid}>
        <div className={styles.imagesColumn}>
          {selectedImage ? (
            <div className={styles.mainImageWrapper}>
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className={styles.mainImage}
                unoptimized
              />
            </div>
          ) : (
            <div className={styles.noImage}>product for a photo shoot</div>
          )}

          {thumbnails.length > 0 && (
            <div className={styles.thumbnailsGrid}>
              {thumbnails.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`${styles.thumbnail} ${
                    selectedImage === img ? styles.thumbnailActive : ""
                  }`}>
                  <Image
                    src={img}
                    alt={`${product.title} - photo ${index + 1}`}
                    fill
                    className={styles.thumbnailImage}
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <ProductInfo product={product} />
      </div>
    </section>
  );
}
