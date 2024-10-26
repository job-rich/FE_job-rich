import { CloseIcon } from "@/constants/icon";

import styles from "./SideLayerHeader.module.scss";

interface SideLayerHeaderProps {
  title: string;
}

export default function SideLayerHeader({ title }: SideLayerHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.span}>{title}</span>
      <button className={styles.button}>
        <div className={styles.icon}>
          <CloseIcon />
        </div>
      </button>
    </div>
  );
}
