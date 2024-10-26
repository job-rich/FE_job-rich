"use client";

import {
  AlertModalGreenIcon,
  AlertModalRedIcon,
  CloseIcon,
} from "@/constants/icon";

import Portal from "../Portal";
import styles from "./AlertModal.module.scss";

interface AlertModalProps {
  title: string;
  color: "green" | "red";
  content?: string;
  confirmLabel?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function AlertModal({
  title,
  color,
  content,
  confirmLabel = "확인",
  onClose,
  children,
}: AlertModalProps) {
  return (
    <Portal>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <div className={styles.spacer} />
            {color === "green" ? (
              <AlertModalGreenIcon />
            ) : (
              <AlertModalRedIcon />
            )}
            <div className={styles.closeIcon} onClick={onClose}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.detailWrapper}>
            <span className={styles.title}>{title}</span>
            {(content || children) && (
              <div className={styles.detail}>
                {children}
                <span className={styles.span}>{content}</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={`${styles.button} ${color === "red" ? styles.red : ""}`}
            onClick={onClose}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </Portal>
  );
}
