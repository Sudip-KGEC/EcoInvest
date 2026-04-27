"use client";

import Image from "next/image";
import styles from "./pricing.module.scss";
import OpenAccount from "@/components/ui/OpenAccount/OpenAccount";
import Brokerage from "@/components/marketing/Brokerage/Brokerage";

export default function Pricing() {
  return (
  <>
      <section className={styles.pricingHero}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>Pricing</h1>

        <p className={styles.subtitle}>
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      {/* FEATURES */}
      <div className={styles.container}>

        {/* CARD 1 */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/pricingEquity.svg"
              alt="Equity"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className={styles.image}
            />
          </div>

          <h3>Free equity delivery</h3>

          <p>
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        {/* CARD 2 */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/intradayTrades.svg"
              alt="Intraday"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className={styles.image}
            />
          </div>

          <h3>Intraday & F&O trades</h3>

          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity.
          </p>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/pricingEquity.svg"
              alt="Mutual Funds"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className={styles.image}
            />
          </div>

          <h3>Free direct mutual funds</h3>

          <p>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>

      </div>

    </section>

    <OpenAccount/>
    <Brokerage/>  
  </>
  );
}