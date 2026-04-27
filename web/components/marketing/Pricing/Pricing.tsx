"use client";

import Link from "next/link";
import styles from "./Pricing.module.scss";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.title}>Unbeatable pricing</h2>

          <p className={styles.subtitle}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link href="/pricing" className={styles.link}>
            See Pricing →
          </Link>
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.price}>₹0</h3>
            <p>
              Free equity delivery <br />
              and direct mutual funds
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.price}>₹20</h3>
            <p>Intraday and F&O</p>
          </div>
        </div>

      </div>
    </section>
  );
}