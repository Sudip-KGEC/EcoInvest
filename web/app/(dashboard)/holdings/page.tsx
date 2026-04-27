import styles from "./holdingsPage.module.scss";

export default function HoldingsPage() {
  return (
    <div className={styles.holdings}>
      
      {/* FIX HERE */}
      <h2 className={styles.title}>Holdings</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>Price</th>
            <th>P&L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>RELIANCE</td>
            <td>10</td>
            <td>2400</td>
            <td>2600</td>
            <td className={styles.profit}>+2000</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}