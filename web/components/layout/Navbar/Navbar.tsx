"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Run only on client
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);

    if (saved) {
      document.documentElement.classList.add("dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Eco<span>Invest</span>
      </Link>

      <div className={styles.right}>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/support">Support</Link>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {dark ? "🌙" : "☀️"}
          </button>

          <Link href="/signup" className={styles.signup}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}