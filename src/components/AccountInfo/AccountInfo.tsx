import { LogoutIcon } from "@/constants/icon";
import React from "react";

import AccountEmail from "../common/AccountEmail/AccountEmail";
import AccountName from "../common/AccountName/AccountName";
import styles from "./AccountInfo.module.scss";

interface AccountInfoProps {
  name: string;
  email: string;
}

export default function AccountInfo({ name, email }: AccountInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoWrapper}>
          <AccountName name={name} />
          <AccountEmail email={email} />
        </div>
        <LogoutIcon className={styles.icon} />
      </div>
    </div>
  );
}
