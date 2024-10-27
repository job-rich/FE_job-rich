import styles from "./layout.module.scss";

export default function SubTabLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { subtab: string; tab: string };
}) {
  return (
    <div>
      <div className={styles.chats}>{children}</div>
    </div>
  );
}
