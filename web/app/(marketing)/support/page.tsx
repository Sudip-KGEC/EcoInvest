"use client";

import CreateTicket from "@/components/marketing/CreateTicket/CreateTicket";
import styles from "./support.module.scss";
import Link from "next/link";

export default function Support() {
  return (
   <>
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* TOP BAR */}
        <div className={styles.top}>
          <h4>Support Portal</h4>
          <Link href="#" className={styles.track}>
            Track Tickets →
          </Link>
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.grid}>

          {/* LEFT */}
          <div className={styles.left}>
            <h1>
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className={styles.search}
            />

            <div className={styles.quickLinks}>
              <Link href="#">Track account opening</Link>
              <Link href="#">Track segment activation</Link>
              <Link href="#">Intraday margins</Link>
              <Link href="#">Kite user manual</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <h2>Featured</h2>

            <ol>
              <li>
                <Link href="#">
                  Current Takeovers and Delisting - January 2024
                </Link>
              </li>
              <li>
                <Link href="#">
                  Latest Intraday leverages - MIS & CO
                </Link>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>

    <CreateTicket/>
   </>
  );
}