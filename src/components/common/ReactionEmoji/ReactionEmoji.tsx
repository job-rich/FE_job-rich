import React from "react";

import styles from "./ReactionEmoji.module.scss";

interface ReactionEmojiProps {
  emojiName: string;
  selectedCount: string;
}

export default function ({ emojiName, selectedCount }: ReactionEmojiProps) {
  return (
    <div className={styles.layout}>
      <div>{emojiName}</div>
      <div className={styles.label}>{selectedCount}</div>
    </div>
  );
}
