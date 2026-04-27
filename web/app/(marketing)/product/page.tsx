"use client";

import Link from "next/link";
import styles from "./product.module.scss";
import LeftSection from "@/components/marketing/Sections/LeftSection";
import RightSection from "@/components/marketing/Sections/RightSection";
import Universe from "@/components/marketing/Universe/Universe";

export default function Product() {
  return (
    <>
      {/* HERO */}
      <section className={styles.productHero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Technology</h1>

          <p className={styles.subtitle}>
            Sleek, modern and intuitive trading platforms
          </p>

          <Link href="/products" className={styles.link}>
            Check out our investment offerings →
          </Link>
        </div>
      </section>

      {/* 🔥 WRAPPER FIX */}
      <div className={styles.sectionsWrapper}>

        <LeftSection
          imageURL="/images/kite.png"
          productName="Kite"
          productDescription="Ultra-fast trading platform."
          priority
        />

        <LeftSection
          imageURL="/images/console.png"
          productName="Console"
          productDescription="Track investments."
        />

        <LeftSection
          imageURL="/images/coin.png"
          productName="Coin"
          productDescription="Mutual funds."
        />

        <LeftSection
          imageURL="/images/kiteconnect.png"
          productName="Kite Connect API"
          productDescription="Build trading apps."
        />

      </div>


      <Universe/>
    </>
  );
}