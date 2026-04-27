import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About EcoInvest</h1>

      <p className={styles.desc}>
        EcoInvest is a modern investment platform designed to help users
        track, analyze, and grow their financial portfolio efficiently.
      </p>
    </div>
  );
}