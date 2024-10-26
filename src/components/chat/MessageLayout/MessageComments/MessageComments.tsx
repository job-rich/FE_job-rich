import ProfileImage from "@/components/common/ProfileImage/ProfileImage";
import React from "react";

import styles from "./MessageComments.module.scss";

interface MessageComments {
  commentCount: number;
}

export default function MessageComments({ commentCount }: MessageComments) {
  return (
    <div className={styles.layout}>
      <div>
        <ProfileImage src={null} size={"mini"} />
      </div>
      <div className={styles.comments}>{commentCount}개의 댓글</div>
      <div className={styles.timeAgo}>오후 5:03</div>
    </div>
  );
}
