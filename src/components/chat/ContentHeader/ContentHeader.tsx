import React from "react";

import ChatRoomButtons from "../ChatRoomButtons/ChatRoomButton";
import ContentTitle from "../ContentTitle/ContentTitle";
import styles from "./ContentHeader.module.scss";

export default function ContentHeader() {
  return (
    <div className={styles.layout}>
      <ContentTitle label={"프로젝트"} />
      {/* <ChatRoomButtons /> */}
    </div>
  );
}
