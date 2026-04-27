"use client";

import Link from "next/link";
import styles from "./OpenAccount.module.scss";

export default function OpenAccount() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Open your <span>EcoInvest</span> account
        </h2>

        <p className={styles.subtitle}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
          and F&O trades.
        </p>

        <Link href="/signup" className={styles.button}>
          Sign up Now
        </Link>
      </div>
    </section>
  );
}