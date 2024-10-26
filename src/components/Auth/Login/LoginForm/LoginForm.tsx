"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (response.ok) {
      const { id } = await response.json();
      router.push(`/welcome/${id}`);
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div style={{ flexDirection: "column" }}>
      <div className={styles.layout}>
        <form onSubmit={handleLogin} className={styles.formLayout}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="사용자 이름"
            required
            className={styles.loginForm}
          />
          <button type="submit" className={styles.submitBtn}>
            <div className={styles.login}>로그인</div>
          </button>
        </form>
      </div>
    </div>
  );
}
