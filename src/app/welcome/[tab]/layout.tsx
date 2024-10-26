import Header from "@/components/common/layouts/Header/Header";
import MainArea from "@/components/common/layouts/MainArea/MainArea";
import SubNavigation from "@/components/common/layouts/SidebarNav/SubNavigation/SubNavigation";
import { ReactNode } from "react";

import styles from "./layout.module.scss";
import MainNavigation from "@/components/common/layouts/SidebarNav/MainNavigation/MainNavigation";

export default function TabLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { workspaceID: string; tab: string };
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.navLayout}>
        <MainNavigation currentTab={params.tab} />
      </div>
      <div className={styles.mainContainer}>
        <MainArea>{children}</MainArea>
      </div>
    </div>
  );
}
