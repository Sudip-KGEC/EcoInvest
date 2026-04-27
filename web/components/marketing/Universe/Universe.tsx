"use client";

import Image from "next/image";
import styles from "./Universe.module.scss";

const platforms = [
  {
    img: "/images/smallcaseLogo.png",
    text: "Thematic investment platform",
  },
  {
    img: "/images/streakLogo.png",
    text: "Algo & strategy trading",
  },
  {
    img: "/images/sensibullLogo.png",
    text: "Options trading simplified",
  },
  {
    img: "/images/zerodhaFundhouse.png",
    text: "Asset management",
  },
  {
    img: "/images/goldenpiLogo.png",
    text: "Bond investments",
  },
  {
    img: "/images/dittoLogo.png",
    text: "Insurance simplified",
  },
];

export default function Universe() {
  return (
    <section className={styles.universe}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>The EcoInvest Universe</h2>
          <p>
            Extend your trading and investment experience with our partner platforms
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {platforms.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.img}
                  alt="Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className={styles.image}
                />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <button className={styles.button}>Signup Now</button>
        </div>

      </div>
    </section>
  );
}