"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../signup/signup.module.scss"; 

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "user123");
    router.push("/dashboard");
  };

  return (
    <div className={styles.auth}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>

        <form onSubmit={handleLogin} className={styles.form}>
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>

        <p className={styles.switch}>
          Don’t have an account? <Link href="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}