"use client";

import MessageMenu from "@/components/MessageMenu/MessageMenu";
import {
  AllAlarmIcon,
  ClipIcon,
  DotRowButtonIcon,
  ImageButtonIcon,
  LogoutIcon,
  NewMemberIcon,
  NoticeIcon,
} from "@/constants/icon";
import { selectButton } from "@/redux/features/chatRoomHeaderButtonSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AvatarDummy from "../AvatarDummy/UserProfileList";
import styles from "./ChatRoomButtons.module.scss";
import DotDropMenu from "./DotDropMenu/DotDropMenu";

export default function ChatRoomButtons() {
  const dispatch = useDispatch();
  const selectedButton = useSelector(
    (state: RootState) => state.chatRoomHeaderButtonReducer.selectedButton
  );

  const handleButtonClick = (
    button: "avatar" | "image" | "clip" | "notice" | "dotMenu"
  ) => {
    dispatch(selectButton(button));

    if (button == "dotMenu") {
      SetIsOpen(!isOpen);
    } else {
      SetIsOpen(false);
    }
  };

  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.layout}>
        <div
          className={`${styles.avatar} ${
            selectedButton === "avatar" ? styles.selected : ""
          }`}
          onClick={() => handleButtonClick("avatar")}
        >
          <AvatarDummy />
        </div>

        <div className={styles.buttons}>
          <div
            className={`${styles.icon} ${
              selectedButton === "notice" ? styles.selected : ""
            }`}
            onClick={() => handleButtonClick("notice")}
          >
            <div className={styles.noticeIcon}>
              <NoticeIcon />
            </div>
          </div>
          <div
            className={`${styles.icon} ${
              selectedButton === "image" ? styles.selected : ""
            }`}
            onClick={() => handleButtonClick("image")}
          >
            <ImageButtonIcon />
          </div>
          <div
            className={`${styles.icon} ${
              selectedButton === "clip" ? styles.selected : ""
            }`}
            onClick={() => handleButtonClick("clip")}
          >
            <ClipIcon />
          </div>

          <div
            className={`${styles.icon} ${
              selectedButton === "dotMenu" && isOpen ? styles.selected : ""
            }`}
            onClick={() => handleButtonClick("dotMenu")}
          >
            <DotRowButtonIcon />
          </div>
        </div>
      </div>
      <div className={styles.dropMenu}>{isOpen ? <DotDropMenu /> : ""}</div>
    </div>
  );
}
