"use client";

import { useRouter } from "next/navigation";
import styles from "./login.module.scss";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e : React.FormEvent ) => {
    e.preventDefault();

    // fake auth (later API)
    localStorage.setItem("token", "user123");

    router.push("/dashboard");
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleLogin} className={styles.form}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}