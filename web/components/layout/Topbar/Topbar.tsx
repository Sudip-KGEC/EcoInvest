"use client";

import styles from "./Topbar.module.scss";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <h3>Dashboard</h3>
      </div>

      <div className={styles.right}>
        <span className={styles.user}>Sudip</span>
      </div>
    </div>
  );
}