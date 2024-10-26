import { ChevronDownIcon } from "@/constants/icon";
import { NotificationContent } from "@/constants/message/notificationContent";
import React from "react";

import styles from "./Notification.module.scss";

interface NotificationProps {
  label:
    | "lastYear"
    | "oldDate"
    | "today"
    | "read"
    | "in"
    | "out"
    | "invite"
    | "admin"
    | "noAdmin"
    | "addNotice";
}

export default function Notification({ label }: NotificationProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.line}></div>
      <div className={styles.label}>
        <div className={styles.text}>{NotificationContent[label]}</div>
        {["lastYear", "oldDate", "today"].includes(label) && (
          <div className={styles.icon}>
            <ChevronDownIcon />
          </div>
        )}
      </div>
    </div>
  );
}
