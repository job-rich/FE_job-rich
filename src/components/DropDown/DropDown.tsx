"use client";

import DropDownList from "@/components/DropDown/DropDownList/DropDownList";
import DownArrow from "@/components/common/ToggleButton/DownArrowButton/DownArrow";
import React, { useState } from "react";

import CloseArrow from "../common/ToggleButton/CloseArrowButton/CloseArrow";
import PlusButton from "../common/ToggleButton/PlusButton/PlusButton";
import styles from "./DropDown.module.scss";

interface DropDownProps {
  label: "프로젝트" | "대화방";
  currentTab: string;
  currentUserTab: string;
}

interface Item {
  id: string;
  label: string;
}

const test_items: Item[] = [
  { id: "1", label: "프로젝트 1" },
  { id: "2", label: "프로젝트 2" },
  { id: "3", label: "프로젝트 3" },
];

export default function DropDown({
  label,
  currentTab,
  currentUserTab,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSelect, setIsSelect] = useState<Item | null>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleItemClick = (item: Item) => {
    setIsSelect(item);
    console.log(`Selected item: ${item.label}`);
  };

  return (
    <div className={styles.layout}>
      <div>
        <div className={styles.dropDownHeader}>
          <div className={styles.arrowIcon} onClick={handleButtonClick}>
            {isOpen ? (
              <DownArrow label={label} />
            ) : (
              <CloseArrow label={label} />
            )}
          </div>
        </div>
        {isOpen ? (
          <DropDownList
            items={test_items}
            onItemClick={handleItemClick}
            roomType={"board"}
            currentTab={currentTab}
            currentUserTab={currentUserTab}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
