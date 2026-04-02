"use client";
import { Heading, P, Button } from "@/components/ui";
import styles from "./error500.module.css";

export default function Error500() {
  return (
    <section className={styles.errorSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>500</div>

          <Heading level="h2" className={styles.title}>
            Something went wrong
          </Heading>

          <P className={styles.description}>
            We’re sorry, but our server encountered an unexpected error. Our
            team has been notified and is working to fix it.
          </P>

          <div className={styles.actions}>
            <Button href="/" variant="primary">
              Go back Home
            </Button>

            <Button href="/" variant="outlined">
              Support
            </Button>
          </div>

          <P className={styles.supportText}>
            If the problem persists, please contact us at{" "}
            <a href="mailto:hello@furniture.com">hello@furniture.com</a>
          </P>
        </div>

        <div className={styles.decoration}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
}
