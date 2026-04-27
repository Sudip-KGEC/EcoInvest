import styles from "./ordersPage.module.scss";

export default function OrdersPage() {
  return (
    <div className={styles.orders}>
      <h2>Orders</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>RELIANCE</td>
            <td className={styles.buy}>BUY</td>
            <td>10</td>
            <td>₹2400</td>
            <td className={styles.completed}>Completed</td>
          </tr>

          <tr>
            <td>TCS</td>
            <td className={styles.sell}>SELL</td>
            <td>5</td>
            <td>₹3200</td>
            <td className={styles.pending}>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}