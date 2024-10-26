import { DropIcon } from "@/constants/icon";

import styles from "./CloseArrow.module.scss";

interface ButtonProps {
  label: string;
}

export default function CloseArrow({ label }: ButtonProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.icon}>
        <DropIcon style={{ transform: "rotate(90deg)" }} />
      </div>

      <div className={styles.label}>{label}</div>
    </div>
  );
}
