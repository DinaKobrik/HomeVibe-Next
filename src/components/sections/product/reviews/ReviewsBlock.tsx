"use client";
import { Product } from "@/types/product";
import styles from "./reviews-block.module.css";
import { Heading, P } from "@/components/ui";
import { useState } from "react";

interface ReviewsBlockProps {
  reviews: Product["reviews"];
}

export default function ReviewsBlock({ reviews }: ReviewsBlockProps) {
  const [showAll, setShowAll] = useState(false);

  const totalReviews = reviews.length;

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  if (totalReviews === 0) {
    return null;
  }

  return (
    <section id="productReview" className={styles.reviewsSection}>
      <div className={styles.titleWrapper}>
        <Heading level="h2" className={styles.title}>
          Customer Reviews
        </Heading>
        <span
          className={styles.reviewsCount}
          onClick={() => setShowAll(!showAll)}
          role="button"
          tabIndex={0}>
          {showAll ? "Hide reviews" : `See all ${totalReviews} reviews`}
        </span>
      </div>

      <div className={styles.reviewsGrid}>
        {displayedReviews.map((review, index) => {
          const initials = review.reviewerName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerAvatar}>
                  <div className={styles.avatarInitials}>{initials}</div>
                </div>

                <span className={styles.reviewerName}>
                  {review.reviewerName}
                </span>

                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(review.rating)
                          ? styles.starFilled
                          : i < review.rating
                            ? styles.starHalf
                            : styles.starEmpty
                      }>
                      ★
                    </span>
                  ))}
                  <span className={styles.ratingValue}>
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              <P>
                {`"`}
                {review.comment}
                {`"`}
              </P>

              <span className={styles.reviewDate}>
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
