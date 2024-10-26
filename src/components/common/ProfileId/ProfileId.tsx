import React from "react";

import styles from "./ProfileId.module.css";

interface ProfileIdProps {
  userId: string;
}

export default function ProfileId({ userId }: ProfileIdProps) {
  return <span className={styles.profileId}>@{userId}</span>;
}
