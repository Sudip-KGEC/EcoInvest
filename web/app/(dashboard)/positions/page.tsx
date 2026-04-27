import styles from "./positionsPage.module.scss";

export default function PositionsPage() {
  return (
    <div className={styles.positions}>
      <h2>Positions</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Entry Price</th>
            <th>Current Price</th>
            <th>P&L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>INFY</td>
            <td>8</td>
            <td>₹1500</td>
            <td>₹1600</td>
            <td className={styles.profit}>+₹800</td>
          </tr>

          <tr>
            <td>HDFC</td>
            <td>12</td>
            <td>₹1700</td>
            <td>₹1650</td>
            <td className={styles.loss}>-₹600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}