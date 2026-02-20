import Image from "next/image";
import { Heading, Button } from "@/components/ui/";
import styles from "./about-closing.module.css";

export default function AboutClosing() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/closing-banner.jpg"
          alt="HomeVibe - Start Shopping"
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <Heading level="h1" color="white" className={styles.title}>
            Ready to make your home cozier?
          </Heading>

          <Button variant="primary" href="/catalog">
            Start Shopping
          </Button>
        </div>
      </div>
    </section>
  );
}
