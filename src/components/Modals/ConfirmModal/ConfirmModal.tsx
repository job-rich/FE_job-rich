"use client";

import {
  AlertModalGreenIcon,
  AlertModalRedIcon,
  CloseIcon,
} from "@/constants/icon";

import Portal from "../Portal";
import styles from "./ConfirmModal.module.scss";

interface ConfirmModalProps {
  title: string;
  color: "green" | "red";
  content?: string;
  confirmLabel?: string;
  onClose?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export default function ConfirmModal({
  title,
  color,
  content,
  confirmLabel = "확인",
  onClose,
  onConfirm,
  children,
}: ConfirmModalProps) {
  return (
    <Portal>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
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
            className={`${styles.button} ${styles.cancel}`}
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.confirm} ${color === "red" ? styles.red : ""}`}
            onClick={() => {
              onConfirm && onConfirm();
              onClose && onClose();
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </Portal>
  );
}
