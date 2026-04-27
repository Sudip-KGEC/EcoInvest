"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Team.module.scss";

export default function Team() {
  return (
    <section className={styles.team}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>People</h2>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        
        {/* LEFT PROFILE */}
        <div className={styles.profile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.image}
            />
          </div>

          <h3>Nithin Kamath</h3>
          <p className={styles.role}>Founder, CEO</p>
        </div>

        {/* RIGHT BIO */}
        <div className={styles.bio}>
          <p>
            Nithin founded Zerodha in 2010 to solve the challenges he faced as a trader.
            Today, the platform has transformed the Indian broking landscape.
          </p>

          <p>
            He is a member of key advisory committees shaping market structure
            and financial ecosystems.
          </p>

          <p>Playing basketball is his zen.</p>

          <div className={styles.links}>
            <Link href="#">Homepage</Link>
            <Link href="#">TradingQnA</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>

      </div>

    </section>
  );
}