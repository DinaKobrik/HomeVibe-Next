import Image from "next/image";
import { Heading, P, Button } from "@/components/ui/";
import styles from "./about-hero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/hero-banner.jpg"
          alt="About - HomeVibe"
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <Heading level="h1" color="white" className={styles.title}>
            About HomeVibe
          </Heading>

          <P color="white" className={styles.description}>
            Crafting comfortable spaces sinse 2015
          </P>

          <Button
            variant="primary"
            href="#story"
            scroll={true}
            className={styles.button}>
            Explore our story
          </Button>
        </div>
      </div>
    </section>
  );
}
