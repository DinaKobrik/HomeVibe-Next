import Image from "next/image";
import styles from "./about-history.module.css";
import { Heading, P } from "@/components/ui";

export default function AboutHistory() {
  return (
    <section id="story" className={styles.history}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/story.jpg"
          alt="Our Story"
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textColumn}>
          <Heading level="h2" className={styles.title}>
            Our Story
          </Heading>

          <P className={styles.description}>
            It all started with a simple idea — to create a place where every
            item is not just a thing, but part of a cozy home. <br />
            <br />
            We believe beauty is born in the details: the warmth of wood, the
            softness of fabric, the harmony of color and shape. <br />
            <br />
            Over the years, we’ve turned this idea into reality — thousands of
            families have chosen us to make their home even warmer and more
            beautiful.
          </P>
        </div>
      </div>
    </section>
  );
}
