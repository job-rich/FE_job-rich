import { BoardIcon, PlusIcon, SpeechBubble } from "@/constants/icon";
import Link from "next/link";
import { useState } from "react";

import styles from "./DropDownList.module.scss";

interface Item {
  id: string;
  label: string;
}

interface DropDownMenuProps {
  items: Item[];
  onItemClick: (item: Item) => void;
  roomType: "board" | "normal";
  currentTab: string;
  workspace: string;
  currentUserTab: string;
}

interface DropDownItemProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  roomType: "board" | "normal" | string;
}

function DropDownItem({
  id,
  label,
  isSelected,
  onClick,
  roomType,
}: DropDownItemProps) {
  return (
    <div
      className={`${styles.listItem} ${isSelected ? styles.selectedItem : ""}`}
      onClick={onClick}
    >
      <dd className={styles.itemLayout}>
        <div className={styles.listIcon}>
          {roomType === "normal" ? null : <BoardIcon />}
        </div>
        <div className={styles.textLayout}>
          <div className={styles.itemText}>{label}</div>
        </div>
      </dd>
    </div>
  );
}

export default function DropDownList({
  items,
  onItemClick,
  roomType,
  currentTab,
  currentUserTab,
  workspace,
}: DropDownMenuProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item.id);
    onItemClick(item);
  };

  return (
    <dl>
      {items.map((item) => (
        <Link href={`/welcome/${currentUserTab}/${currentTab}/${item.id}`}>
          <div key={item.id}>
            <DropDownItem
              id={item.id}
              label={item.label}
              isSelected={item.id === selectedItem}
              onClick={() => handleItemClick(item)}
              roomType={roomType}
            />
          </div>
        </Link>
      ))}
    </dl>
  );
}
