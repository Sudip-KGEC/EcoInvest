"use client";

import styles from "./CreateTicket.module.scss";
import Link from "next/link";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Charges",
      "3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Funds",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "Fund Limits",
      "Payment Issues",
    ],
  },
  {
    title: "Trading",
    links: [
      "Intraday",
      "F&O Activation",
      "Margins",
      "Order Types",
    ],
  },
  {
    title: "Kite",
    links: [
      "Login Issues",
      "Charts",
      "Settings",
      "Mobile App",
    ],
  },
  {
    title: "Profile",
    links: [
      "Update Email",
      "Change Phone",
      "Bank Update",
    ],
  },
  {
    title: "Reports",
    links: [
      "P&L Report",
      "Tax Report",
      "Holdings",
    ],
  },
];

export default function CreateTicket() {
  return (
    <section className={styles.ticket}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>
          To create a ticket, select a relevant topic
        </h2>

        <div className={styles.grid}>
          {topics.map((topic, index) => (
            <div key={index} className={styles.card}>
              
              <h4>
                <span className={styles.icon}>＋</span> {topic.title}
              </h4>

              <div className={styles.links}>
                {topic.links.map((item, i) => (
                  <Link key={i} href="#">
                    {item}
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}