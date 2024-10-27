"use client";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";
import React from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SubTapPage({
  params,
}: {
  params: { subtab: string; tab: string };
}) {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className={styles.logOut}>
          <p>{session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
        <div className={styles.layout}>
          {params.subtab === "project" ? <ProjectGrid /> : ""}
        </div>
      </div>
    );
  }

  return router.push(`/login`);
}
