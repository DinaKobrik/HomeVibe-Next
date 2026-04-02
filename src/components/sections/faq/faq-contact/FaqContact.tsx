import { Heading, P } from "@/components/ui/";
import styles from "./faq-contact.module.css";
import { ClockIcon } from "./clock";
import { MailIcon } from "./mail";
import { PhoneIcon } from "./phone";

export default function FAQContact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <Heading level="h3" className={styles.title}>
          {`Didn't find your answer?`}
        </Heading>

        <P className={styles.subtitle}>
          {`Feel free to contact us directly — we're happy to help!`}
        </P>

        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <a href="tel:+1234567890" className={styles.iconWrapper}>
              <PhoneIcon />
            </a>
            <div>
              <span className={styles.label}>Phone</span>

              <a href="tel:+1234567890" className={styles.value}>
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <a href="mailto:hello@furniture.com" className={styles.iconWrapper}>
              <MailIcon />
            </a>
            <div>
              <span className={styles.label}>Email</span>

              <a href="mailto:hello@furniture.com" className={styles.value}>
                hello@furniture.com
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <ClockIcon />
            </div>
            <div>
              <span className={styles.label}>Working Hours</span>
              <p className={styles.schedule}>
                Mon–Fri: 9:00 – 18:00 <br /> Sat–Sun: 10:00 – 16:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
