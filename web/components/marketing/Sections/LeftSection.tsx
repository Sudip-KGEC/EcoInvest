"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Section.module.scss";

type Props = {
  imageURL: string;
  productName: string;
  productDescription: string;
  tryDemo?: string;
  learnMore?: string;
  googlePlay?: string;
  appStore?: string;
  priority?: boolean; // ✅ optional for first section only
};

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  priority = false,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src={imageURL}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority={priority} // ✅ only true for first section
          />
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>{productName}</h2>

          <p className={styles.description}>
            {productDescription}
          </p>

          {/* LINKS */}
          {(tryDemo || learnMore) && (
            <div className={styles.actions}>
              {tryDemo && <Link href={tryDemo}>Try Demo</Link>}
              {learnMore && <Link href={learnMore}>Learn More</Link>}
            </div>
          )}

          {/* STORE BADGES */}
          {(googlePlay || appStore) && (
            <div className={styles.badges}>
              {googlePlay && (
                <a href={googlePlay}>
                  <Image
                    src="/images/googlePlayBadge.svg"
                    alt="Google Play"
                    width={140}
                    height={40}
                  />
                </a>
              )}

              {appStore && (
                <a href={appStore}>
                  <Image
                    src="/images/appstoreBadge.svg"
                    alt="App Store"
                    width={140}
                    height={40}
                  />
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}