"use client";

import Link from "next/link";
import styles from "./home.module.scss";
import Awards from "@/components/marketing/Awards/Awards";
import Stats from "@/components/marketing/Stats/Stats";
import Pricing from "@/components/marketing/Pricing/Pricing";
import Education from "@/components/marketing/Education/Education";
import OpenAccount from "@/components/ui/OpenAccount/OpenAccount";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <main className={styles.hero}>
        
        <div className={styles.globe}></div>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Smart Investing <br />
            Starts with <span>EcoInvest</span>
          </h1>

          <p className={styles.subtitle}>
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

      {/* AWARDS SECTION */}
      <Awards />
      <Stats />
      <Pricing />
      <Education/>
      <OpenAccount />
    </>
  );
}