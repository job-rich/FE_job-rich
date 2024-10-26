"use client";

import { DropIcon } from "@/constants/icon";
import React, { useState } from "react";

import ImageView from "../ImageView/ImageView";
import styles from "./FileDropView.module.scss";
import { userImage } from "./dummyData";

export default function FileDropView() {
  const [isOpen, setIsOpen] = useState(false);
  const handleHeaderTitle = () => {
    console.log("파일 드랍");
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.label} onClick={handleHeaderTitle}>
        <span>{userImage.length}개 파일</span>
        <div className={styles.dropIcon}>
          <DropIcon
            style={
              isOpen
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(180deg)" }
            }
          />
        </div>
      </div>
      <div className={styles.image}>
        {isOpen ? "" : <ImageView items={userImage} />}{" "}
      </div>
    </div>
  );
}
