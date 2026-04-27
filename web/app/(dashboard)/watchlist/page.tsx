"use client";

import { useState } from "react";
import styles from "./watchlistPage.module.scss";

export default function WatchlistPage() {
  const [stocks, setStocks] = useState(["RELIANCE", "TCS", "INFY"]);
  const [input, setInput] = useState("");

  const addStock = () => {
    if (input.trim() === "") return;
    setStocks([...stocks, input.toUpperCase()]);
    setInput("");
  };

  const removeStock = (index: number) => {
    const updated = stocks.filter((_, i) => i !== index);
    setStocks(updated);
  };

  return (
    <div className={styles.watchlist}>
      <h2>Watchlist</h2>

      {/* Add Stock */}
      <div className={styles.addBox}>
        <input
          type="text"
          placeholder="Enter stock name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addStock}>Add</button>
      </div>

      {/* Stock List */}
      <ul className={styles.list}>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock}
            <button onClick={() => removeStock(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}