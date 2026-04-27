import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <h2>EcoInvest</h2>
          <p>Smart investing for everyone.</p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Support</Link>
          </div>

          <div>
            <h4>Product</h4>
            <Link href="/product">Features</Link>
            <Link href="/signup">Get Started</Link>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} EcoInvest. All rights reserved.
      </div>
    </footer>
  );
}