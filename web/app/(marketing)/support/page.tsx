import styles from "./support.module.scss";

export default function SupportPage() {
  return (
    <section className={styles.support}>

      <h1 className={styles.title}>Support</h1>

      <p className={styles.desc}>
        Need help? Reach out to us anytime.
      </p>

      <div className={styles.box}>
        <p>Email: support@ecoinvest.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </section>
  );
}