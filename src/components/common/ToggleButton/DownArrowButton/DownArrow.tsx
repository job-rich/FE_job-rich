import { DropIcon } from "@/constants/icon";

import styles from "./DownArrow.module.scss";

interface ButtonProps {
  label: string;
}

export default function DownArrow({ label }: ButtonProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.icon}>
        <DropIcon style={{ transform: "rotate(180deg)" }} />
      </div>

      <div className={styles.label}>{label}</div>
    </div>
  );
}
