"use client";

import Link from "next/link";
import styles from "./about.module.scss";
import Team from "@/components/marketing/Team/Team";

export default function AboutHero() {
  return (
    <>
    <section className={styles.about}>
      
      {/* TOP HEADING */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          We pioneered the discount broking model in India
          <br />
          <span>Now, we are building the future with technology.</span>
        </h1>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.column}>
          <p>
            We started operations on 15th August 2010 with a mission to break
            barriers that traders and investors face in India — cost, support,
            and technology.
          </p>

          <p>
            Our disruptive pricing and in-house technology have made us one of
            the largest stock brokers in India.
          </p>

          <p>
            Millions of users trust our ecosystem every day, contributing a
            significant share of retail trading volumes.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.column}>
          <p>
            We also run multiple educational and community initiatives to
            empower investors.
          </p>

          <p>
            <Link href="#" className={styles.link}>
              Rainmatter
            </Link>{" "}
            supports fintech startups to grow capital markets in India.
          </p>

          <p>
            We continue to innovate every day — explore our latest updates and
            insights.
          </p>
        </div>

      </div>

    </section>

    <Team/>
    </>
    
  );
}