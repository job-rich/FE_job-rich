"use client";

import ChevronDownButton from "@/components/common/ToggleButton/ChevronDownButton/ChevronDownButton";
import React from "react";

import styles from "./ChatDateLine.module.scss";

export default function ChatDateLine() {
  const handleChatLine = () => {
    console.log("요일별 채팅방 접기");
  };
  return (
    <div className={styles.layout}>
      <div className={styles.chatWeek}>
        <ChevronDownButton
          label={"6월 12일 수요일"}
          onClick={handleChatLine}
          styleType="dateLine"
        />
      </div>

      <div className={styles.chatLine}></div>
    </div>
  );
}
