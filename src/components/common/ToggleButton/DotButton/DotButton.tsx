import { DotButtonIcon } from "@/constants/icon";

import styles from "./DotButton.module.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function DotButton({ label, onClick }: ButtonProps) {
  return (
    <div className={styles.layout}>
      <DotButtonIcon onClick={onClick} />
      {label}
    </div>
  );
}
