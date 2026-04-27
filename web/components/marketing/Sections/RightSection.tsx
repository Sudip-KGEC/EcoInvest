"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Section.module.scss";

type Props = {
  imageURL: string;
  productName: string;
  productDescription: string;
  learnMore?: string;
};

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{productName}</h2>

          <p className={styles.description}>
            {productDescription}
          </p>

          {learnMore && (
            <div className={styles.actions}>
              <Link href={learnMore} className={styles.link}>
                Learn More →
              </Link>
            </div>
          )}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={imageURL}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}