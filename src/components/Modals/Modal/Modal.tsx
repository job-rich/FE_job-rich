import { CloseIcon } from "@/constants/icon";
import React from "react";

import Portal from "../Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <Portal>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.closeIconWrapper} onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </Portal>
  );
}
