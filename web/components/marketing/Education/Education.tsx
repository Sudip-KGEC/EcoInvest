"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section className={styles.education}>
      <div className={styles.container}>

        {/* LEFT IMAGE */}
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/education.svg"
              alt="Education"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>
          <h2 className={styles.title}>
            Free and open market education
          </h2>

          <p className={styles.subtitle}>
            Varsity, the largest online stock market education book in the world
            covering everything from basics to advanced trading.
          </p>

          <Link href="/varsity" className={styles.link}>
            Varsity →
          </Link>

          <p className={styles.subtitleAlt}>
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <Link href="/community" className={styles.link}>
            TradingQ&A →
          </Link>
        </div>

      </div>
    </section>
  );
}