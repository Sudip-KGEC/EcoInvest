"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Stats.module.scss";

export default function Stats() {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.left}>
                    <h2 className={styles.title}>Trust with confidence</h2>

                    <div className={styles.block}>
                        <h3>Customer-first always</h3>
                        <p>
                            That is why 1.3+ crore customers trust us with ₹3.5+ lakh crores
                            worth of equity investments.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>No spam or gimmicks</h3>
                        <p>
                            No gimmicks, spam, or annoying notifications. High quality apps
                            that you use at your pace.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>The EcoInvest universe</h3>
                        <p>
                            A complete ecosystem with multiple fintech tools tailored for
                            your needs.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Do better with money</h3>
                        <p>
                            Smart tools and insights to help you make better financial
                            decisions.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/ecosystem.png"
                            alt="Ecosystem"
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.links}>
                        <Link href="/products">Explore our products →</Link>
                        <Link href="/demo">Try demo →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}