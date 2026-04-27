import styles from "./dashboardPage.module.scss";

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      
      {/* Title */}
      <h2 className={styles.title}>Dashboard</h2>

      {/* Cards */}
      <div className={styles.cards}>
        
        <div className="card">
          <h4 className="card-title">Total Investment</h4>
          <p className="card-value">₹1,20,000</p>
        </div>

        <div className="card">
          <h4 className="card-title">Current Value</h4>
          <p className="card-value">₹1,45,000</p>
        </div>

        <div className="card">
          <h4 className="card-title">Profit / Loss</h4>
          <p className={`card-value ${styles.profit}`}>+₹25,000</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className={styles.chart}>
        <h3 className={styles.chartTitle}>Portfolio Overview</h3>

        <div className={styles.chartBox}>
          Chart coming soon...
        </div>
      </div>

    </div>
  );
}