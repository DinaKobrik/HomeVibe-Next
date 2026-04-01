import { Heading, P, Button } from "@/components/ui/";
import styles from "./not-found.module.css";
import { Icon404 } from "./icon404";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon404 />
      </div>

      <Heading level="h1" className={styles.title}>
        404
      </Heading>

      <Heading level="h2" className={styles.subtitle}>
        Page Not Found
      </Heading>

      <P className={styles.description}>
        {`
          Oops! The page you're looking for doesn't exist or has been moved.`}
        <br />
        {` 
          Let's get you back to something cozy.`}
      </P>

      <div className={styles.buttons}>
        <Button href="/" variant="primary">
          Back to Home
        </Button>

        <Button href="/catalog" variant="outlined">
          Browse Catalog
        </Button>
      </div>
    </div>
  );
}
