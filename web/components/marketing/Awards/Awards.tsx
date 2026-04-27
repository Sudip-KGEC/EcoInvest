import Image from "next/image";
import styles from "./Awards.module.scss";

export default function Awards() {
    return (
        <section className={styles.awards}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/largestBroker.svg"
                            alt="Largest Broker"
                            fill
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.right}>
                    <h2 className={styles.title}>
                        Largest stock broker in India
                    </h2>

                    <p className={styles.subtitle}>
                        2+ million clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </p>

                    <div className={styles.features}>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>

                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds & Govt. Securities</li>
                        </ul>
                    </div>

                    <div className={styles.logos}>
                        <Image
                            src="/images/pressLogos.png"
                            alt="Press Logos"
                            width={400}
                            height={80}
                            sizes="(max-width: 768px) 100vw, 400px"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}