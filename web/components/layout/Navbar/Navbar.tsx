"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Eco<span>Invest</span>
      </div>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/support">Support</Link>
      </div>

      <div className={styles.actions}>
        <Link href="/signup" className={styles.signup}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}