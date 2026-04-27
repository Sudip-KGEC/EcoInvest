"use client";

import Link from "next/link";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>
        Eco<span>Invest</span>
      </h2>

      <nav className={styles.nav}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/holdings">Holdings</Link>
        <Link href="/positions">Positions</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/watchlist">Watchlist</Link>
        <Link href="/funds">Funds</Link>
      </nav>
    </div>
  );
}