import styles from "./SideLayer.module.scss";
import SideLayerHeader from "./SideLayerHeader/SideLayerHeader";

interface SideLayerProps {
  children: React.ReactNode;
  title: string;
}

export default function SideLayer({ children, title }: SideLayerProps) {
  return (
    <div
      className={`${styles.container} ${title === "댓글" ? styles.wide : ""}`}
    >
      <SideLayerHeader title={title} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
