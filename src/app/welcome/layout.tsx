import MainNavigation from "@/components/common/layouts/SidebarNav/MainNavigation/MainNavigation";

import React from "react";

import styles from "./layout.module.scss";

export default function TabsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceID: string };
}) {
  return <div className={styles.layoutContainer}>{children}</div>;
}
