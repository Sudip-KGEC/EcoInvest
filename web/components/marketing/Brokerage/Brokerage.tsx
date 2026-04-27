"use client";

import Link from "next/link";
import styles from "./Brokerage.module.scss";

export default function Brokerage() {
  return (
    <section className={styles.brokerage}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <Link href="/calculator" className={styles.headingLink}>
            <h3>Brokerage calculator →</h3>
          </Link>

          <ul className={styles.list}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per note. Courier charges apply.
            </li>
            <li>
              For NRI (non-PIS), 0.5% or ₹100 per executed order (whichever is lower).
            </li>
            <li>
              For NRI (PIS), 0.5% or ₹200 per executed order (whichever is lower).
            </li>
            <li>
              Debit balance accounts: ₹40 per order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <Link href="/charges" className={styles.card}>
            <h4>List of charges</h4>
            <p>Detailed breakdown of all fees and commissions</p>
          </Link>
        </div>

      </div>
    </section>
  );
}