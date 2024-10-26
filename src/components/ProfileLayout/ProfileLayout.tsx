import React from "react";

import AccountInfo from "../AccountInfo/AccountInfo";
import ProfileImage from "../common/ProfileImage/ProfileImage";
import styles from "./ProfileLayout.module.css";

interface ProfileLayoutProps {
  profileImage: string;
  username: string;
  userId?: string;
  userEmail: string;
}

export default function ProfileLayout({
  profileImage,
  username,
  userId,
  userEmail,
}: ProfileLayoutProps) {
  return (
    <div className={styles.profileContainer}>
      <ProfileImage src={profileImage} />
      <AccountInfo name={username} email={userEmail} />
    </div>
  );
}
