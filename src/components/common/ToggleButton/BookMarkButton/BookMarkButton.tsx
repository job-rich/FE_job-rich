"use client";

import { EmptyStarIcon, StarIcon } from "@/constants/icon";
import React, { useState } from "react";

import styles from "./BookmarkButton.module.scss";

export default function BookMarkButton() {
  const [star, setStar] = useState(false);
  const handleStarIcon = () => {
    setStar(!star);
  };
  return (
    <div className={styles.icon} onClick={handleStarIcon}>
      {star ? <StarIcon fill="#FDB022" /> : <EmptyStarIcon />}
    </div>
  );
}
