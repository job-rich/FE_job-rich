"use client";

import { GreenPlusIcon } from "@/constants/icon";

import styles from "./GreenPlusButton.module.scss";

export default function GreenPlusButton() {
  const handleButtonClick = () => {
    console.log("clicked green button");
  };
  return (
    <div className={styles.container} onClick={handleButtonClick}>
      <GreenPlusIcon />
    </div>
  );
}
