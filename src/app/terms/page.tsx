import { Heading, P } from "@/components/ui/";
import styles from "./terms-of-use.module.css";

export default function TermsOfUse() {
  return (
    <section className={styles.termsSection}>
      <div className={styles.header}>
        <Heading level="h1" className={styles.mainTitle}>
          Terms of Use
        </Heading>
        <div className={styles.decorativeLine}></div>
      </div>

      <P className={styles.lastUpdated}>Last updated: December 02, 2025</P>

      <div className={styles.content}>
        <Heading level="h3" className={styles.heading}>
          1. Acceptance of Terms
        </Heading>
        <P className={styles.descr}>
          By accessing and using HomeVibe website and services, you accept and
          agree to be bound by the terms and provision of this agreement.
        </P>

        <Heading level="h3" className={styles.heading}>
          2. Use of the Service
        </Heading>
        <P className={styles.descr}>
          You may use our services only for lawful purposes and in accordance
          with these Terms. You agree not to use the service for any illegal or
          unauthorized purpose.
        </P>

        <Heading level="h3" className={styles.heading}>
          3. User Accounts
        </Heading>
        <P className={styles.descr}>
          When you create an account with us, you must provide accurate,
          complete, and current information at all times. You are responsible
          for safeguarding your password and for all activities that occur under
          your account.
        </P>

        <Heading level="h3" className={styles.heading}>
          4. Products and Pricing
        </Heading>
        <P className={styles.descr}>
          All prices are subject to change without notice. We reserve the right
          to refuse or cancel any order at any time. In the event that we make a
          change to or cancel an order, we may attempt to notify you by
          contacting the email and/or billing address provided at the time the
          order was made.
        </P>

        <Heading level="h3" className={styles.heading}>
          5. Shipping and Delivery
        </Heading>
        <P className={styles.descr}>
          Shipping times are estimates only. We are not responsible for any
          delays caused by shipping carriers or customs.
        </P>

        <Heading level="h3" className={styles.heading}>
          6. Returns and Refunds
        </Heading>
        <P className={styles.descr}>
          Returns are accepted within 30 days of delivery. Items must be in
          original condition and packaging. Custom or personalized items are
          non-returnable unless defective.
        </P>

        <Heading level="h3" className={styles.heading}>
          7. Intellectual Property
        </Heading>
        <P className={styles.descr}>
          All content on this site, including text, images, logos, and designs,
          is the property of HomeVibe and is protected by copyright and
          trademark laws.
        </P>

        <Heading level="h3" className={styles.heading}>
          8. Limitation of Liability
        </Heading>
        <P className={styles.descr}>
          In no event shall HomeVibe be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or relating
          to your use of our services.
        </P>

        <Heading level="h3" className={styles.heading}>
          9. Changes to Terms
        </Heading>
        <P className={styles.descr}>
          We reserve the right to update or modify these Terms at any time. Your
          continued use of the service after any changes constitutes acceptance
          of the new terms.
        </P>

        <div className={styles.contact}>
          <P className={styles.descr}>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:hello@furniture.com">hello@furniture.com</a>
          </P>
        </div>
      </div>
    </section>
  );
}
