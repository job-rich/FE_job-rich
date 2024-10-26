"use client";

import AccountName from "@/components/common/AccountName/AccountName";
import { getCurrentFormattedTime } from "@/utils/getTimestamp";
import React, { useEffect, useState } from "react";

import ChatBookMarkButton from "../../ChatBookmarkButton/ChatBookmarkButton";
import styles from "./MessageUserInfo.module.scss";

interface MessageUserInfoProps {
  name: string;
  userId: string;
}

export default function MessageUserInfo({ name }: MessageUserInfoProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    const formattedTime = getCurrentFormattedTime();
    setCurrentTime(formattedTime);
  }, []);

  return (
    <div className={styles.layout}>
      <AccountName name={name} />
      <div className={styles.messageInfo}>
        <div className={styles.messageTime}>
          {currentTime} • 읽음 {readCount}
          <ChatBookMarkButton />
        </div>
      </div>
    </div>
  );
}
