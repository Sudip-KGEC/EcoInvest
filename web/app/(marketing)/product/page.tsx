import styles from "./product.module.scss";

export default function ProductPage() {
  return (
    <section className={styles.product}>
      
      <h1 className={styles.title}>Our Product</h1>
      <p className={styles.desc}>
        EcoInvest gives you powerful tools to track, analyze and grow your investments.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Real-time Tracking</h3>
          <p>Monitor your investments live with updated market data.</p>
        </div>

        <div className={styles.card}>
          <h3>Advanced Analytics</h3>
          <p>Analyze your portfolio with charts and insights.</p>
        </div>

        <div className={styles.card}>
          <h3>Secure Platform</h3>
          <p>Your data is protected with industry-grade security.</p>
        </div>
      </div>

    </section>
  );
}