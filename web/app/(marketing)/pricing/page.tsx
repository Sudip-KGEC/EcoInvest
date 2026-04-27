import styles from "./pricing.module.scss";

export default function PricingPage() {
  return (
    <section className={styles.pricing}>

      <h1 className={styles.title}>Pricing Plans</h1>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h3>Basic</h3>
          <p className={styles.price}>Free</p>
          <ul>
            <li>Basic tracking</li>
            <li>Limited features</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Pro</h3>
          <p className={styles.price}>₹499/month</p>
          <ul>
            <li>Advanced analytics</li>
            <li>Priority support</li>
          </ul>
        </div>

      </div>

    </section>
  );
}