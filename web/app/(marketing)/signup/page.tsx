"use client";

import { useRouter } from "next/navigation";
import styles from "./signup.module.scss";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("token", "user123");
    router.push("/dashboard");
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        
        <h1 className={styles.title}>Create Account</h1>

        <form onSubmit={handleSignup} className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />

          <button className={styles.button} type="submit">
            Signup
          </button>
        </form>

      </div>
    </div>
  );
}