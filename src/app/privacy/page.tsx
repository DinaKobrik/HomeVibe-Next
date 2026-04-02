import { Heading, P } from "@/components/ui/";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacySection}>
      <div className={styles.header}>
        <Heading level="h1" className={styles.mainTitle}>
          Privacy Policy
        </Heading>
        <div className={styles.decorativeLine}></div>
      </div>

      <P className={styles.lastUpdated}>Last updated: December 02, 2025</P>

      <div className={styles.content}>
        <Heading level="h3" className={styles.heading}>
          1. Introduction
        </Heading>
        <P className={styles.descr}>
          At HomeVibe, we respect your privacy and are committed to protecting
          your personal data. This Privacy Policy explains how we collect, use,
          and safeguard your information when you visit our website and use our
          services.
        </P>

        <Heading level="h3" className={styles.heading}>
          2. Information We Collect
        </Heading>
        <P className={styles.descr}>
          We may collect personal information that you provide to us, such as
          your name, email address, shipping address, and payment information
          when you make a purchase or create an account.
        </P>

        <Heading level="h3" className={styles.heading}>
          3. How We Use Your Information
        </Heading>
        <P className={styles.descr}>
          We use the information we collect to process your orders, communicate
          with you, improve our services, and send you marketing communications
          if you have opted in.
        </P>

        <Heading level="h3" className={styles.heading}>
          4. Sharing Your Information
        </Heading>
        <P className={styles.descr}>
          We do not sell your personal information. We may share your data with
          trusted third-party service providers who assist us in operating our
          website and fulfilling orders (such as payment processors and shipping
          companies).
        </P>

        <Heading level="h3" className={styles.heading}>
          5. Cookies and Tracking Technologies
        </Heading>
        <P className={styles.descr}>
          We use cookies and similar tracking technologies to enhance your
          browsing experience, analyze website traffic, and personalize content.
          You can manage your cookie preferences through your browser settings.
        </P>

        <Heading level="h3" className={styles.heading}>
          6. Data Security
        </Heading>
        <P className={styles.descr}>
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the internet is
          100% secure, and we cannot guarantee absolute security.
        </P>

        <Heading level="h3" className={styles.heading}>
          7. Your Rights
        </Heading>
        <P className={styles.descr}>
          You have the right to access, update, or delete your personal
          information. You may also withdraw your consent for certain data
          processing activities at any time.
        </P>

        <Heading level="h3" className={styles.heading}>
          8. Changes to This Policy
        </Heading>
        <P className={styles.descr}>
          {` We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.`}
        </P>

        <div className={styles.contact}>
          <P className={styles.descr}>
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:hello@furniture.com">hello@furniture.com</a>
          </P>
        </div>
      </div>
    </section>
  );
}
