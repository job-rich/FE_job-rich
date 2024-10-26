"use client";

import AccountInfo from "@/components/AccountInfo/AccountInfo";
import DropDown from "@/components/DropDown/DropDown";
import { ListData, ListItem } from "@/components/MessageMenu/MessageCategory";
import MessageMenu from "@/components/MessageMenu/MessageMenu";
import { useState } from "react";

import styles from "./SubNavigation.module.scss";

export default function SubNavigation({
  currentTab,
  workspace,
  currentUserTab,
}: {
  currentTab: string;
  workspace: string;
  currentUserTab: string;
}) {
  const [isOpen, SetIsOpen] = useState(false);

  const handleItemSelect = (item: ListItem) => {
    console.log(`선택항목: ${item}`);
  };

  const handleWorkSpaceOpen = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.menus}>
        <div className={styles.MessageMenuLayer}>
          {isOpen ? (
            <MessageMenu items={ListData} onItemClick={handleItemSelect} />
          ) : (
            ""
          )}
        </div>
        <DropDown
          label={"프로젝트"}
          currentTab={currentTab}
          currentUserTab={currentUserTab}
          workspace={workspace}
        />
      </div>
    </nav>
  );
}
