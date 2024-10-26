"use client";

import MessageUserInfo from "@/components/chat/MessageLayout/MessageUserInfo/MessageUserInfo";
import MessageChatContent from "@/components/common/MessageChatContent/MessageChatContent";
import ProfileImage from "@/components/common/ProfileImage/ProfileImage";
import EmojiButton from "@/components/common/ToggleButton/EmojiButton/EmojiButton";
import React from "react";

import MessageComments from "./MessageComments/MessageComments";
import styles from "./MessageLayout.module.scss";

interface MessageLayoutProps {
  profileImage: string;
  username: string;
  userId: string;
  chatContent: string;
}

export default function MessageLayout({
  username,
  userId,
  chatContent,
}: MessageLayoutProps) {
  return (
    <div>
      <div className={styles.messageBox}>
        <div>
          <ProfileImage
            src="https://picsum.photos/200"
            size="user"
            state="active"
          />
        </div>
        <div>
          <div className={styles.messageContent}>
            <MessageUserInfo name={username} userId={userId} />
            <MessageChatContent chatContent={chatContent} />
          </div>
          <div>
            <div className={styles.emoji}>
              <EmojiButton />
            </div>
            <div className={styles.messageComments}>
              <MessageComments commentCount={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
