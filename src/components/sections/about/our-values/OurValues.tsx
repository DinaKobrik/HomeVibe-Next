import styles from "./our-values.module.css";
import { Heading, P } from "@/components/ui";
import { ComfortIcon } from "./comfort";
import { SustainabilityIcon } from "./sustainability";
import { DesignIcon } from "./design";

export default function OurValues() {
  const values = [
    {
      icon: SustainabilityIcon,
      title: "Sustainability",
      description:
        "We choose materials and production methods that care for the planet, so your home is beautiful and environmentally responsible.",
    },
    {
      icon: ComfortIcon,
      title: "Comfort First",
      description:
        "Every piece is designed with real people in mind — soft textures, ergonomic shapes, and thoughtful details for ultimate relaxation.",
    },
    {
      icon: DesignIcon,
      title: "Timeless Design",
      description:
        "We create furniture that never goes out of style — classic forms combined with modern touches to fit any interior for years to come.",
    },
  ];

  return (
    <section className={styles.values}>
      <Heading level="h2" className={styles.title}>
        Our Values
      </Heading>
      <P className={styles.intro}>
        Three principles that guide everything we do — from design to delivery.
      </P>

      <div className={styles.grid}>
        {values.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <value.icon />
            </div>
            <Heading level="h3" className={styles.cardTitle}>
              {value.title}
            </Heading>
            <P className={styles.cardDescription}>{value.description}</P>
          </div>
        ))}
      </div>
    </section>
  );
}
