"use client";

import { useState } from "react";
import styles from "./fundsPage.module.scss";

export default function FundsPage() {
  const [balance, setBalance] = useState(50000);

  const addFunds = () => {
    setBalance(balance + 1000);
  };

  const withdrawFunds = () => {
    if (balance >= 1000) {
      setBalance(balance - 1000);
    }
  };

  return (
    <div className={styles.funds}>
      <h2>Funds</h2>

      {/* Balance Card */}
      <div className={styles.card}>
        <h3>Available Balance</h3>
        <p>₹{balance}</p>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button onClick={addFunds}>Add ₹1000</button>
        <button onClick={withdrawFunds}>Withdraw ₹1000</button>
      </div>
    </div>
  );
}