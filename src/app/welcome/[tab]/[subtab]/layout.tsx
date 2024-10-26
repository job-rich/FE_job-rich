import ContentHeader from "@/components/chat/ContentHeader/ContentHeader";

import styles from "./layout.module.scss";
import SubNavigation from "@/components/common/layouts/SidebarNav/SubNavigation/SubNavigation";

export default function SubTabLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceID: string; subtab: string; tab: string };
}) {
  return (
    <div style={{ display: "flex" }}>
      <SubNavigation
        currentTab={params.subtab}
        currentUserTab={params.tab}
        workspace={params.workspaceID}
      />

      <div className={styles.chats}>{children}</div>
    </div>
  );
}
