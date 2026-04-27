import Link from "next/link";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.content}>
        
        <h1>
          Smart Investing <br />
          Starts with <span>EcoInvest</span>
        </h1>

        <p>
          Track, analyze, and grow your investments with a modern
          and powerful trading platform.
        </p>

        <div className={styles.actions}>
          <Link href="/signup" className={styles.primaryBtn}>
            Get Started
          </Link>

          <Link href="/product" className={styles.secondaryBtn}>
            Explore Features
          </Link>
        </div>

      </div>
    </main>
  );
}