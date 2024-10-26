import { NoticeIcon } from "@/constants/icon";

import styles from "./Notice.module.scss";

interface NoticeProps {
  notice: string;
  author: string;
  date: string;
}

export default function Notice({ notice, author, date }: NoticeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <NoticeIcon />
      </div>
      <div className={styles.content}>
        <span className={styles.notice}>{notice}</span>
        <span className={styles.info}>
          {author} • {date}
        </span>
      </div>
    </div>
  );
}
