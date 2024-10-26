"use client";

import { DropIcon } from "@/constants/icon";
import React, { useState } from "react";

import styles from "./DropDownButton.module.scss";

interface DropDownButtonProps {
  onClick?: () => void;
  label: string;
}

export default function DropDownButton({ label }: DropDownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBackground, setIsBackground] = useState(true);
  const handleTitleDropMenu = () => {
    setIsOpen(!isOpen);
    setIsBackground(!isBackground);
  };

  return (
    <div
      className={isBackground ? `${styles.dropUp}` : `${styles.dropDown}`}
      onClick={handleTitleDropMenu}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <DropIcon
          style={
            isOpen
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" }
          }
        />
      </div>
    </div>
  );
}
