import ContentHeader from "@/components/chat/ContentHeader/ContentHeader";

import styles from "./layout.module.scss";
import SubNavigation from "@/components/common/layouts/SidebarNav/SubNavigation/SubNavigation";

export default function SubsubTabLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceID: string; subtab: string; tab: string };
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.chats}>{children}</div>
        </div>
      </div>
    </>
  );
}
