// ChevronDownButton.tsx
import { ChevronDownIcon } from "@/constants/icon";

import styles from "./ChevronDownButton.module.scss";

interface ButtonProps {
  onClick: () => void;
  label: String;
}
export default function ChevronDownButton({ onClick, label }: ButtonProps) {
  return (
    <div className={styles.layout} onClick={onClick}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <ChevronDownIcon with="20px" height="20px" />
      </div>
    </div>
  );
}
