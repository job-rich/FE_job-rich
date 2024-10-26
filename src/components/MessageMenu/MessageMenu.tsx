import React, { ElementType, useState } from "react";

import styles from "./MeassageMenu.module.scss";
import { ListItem } from "./MessageCategory";

interface MessageMenuItemProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  icon: ElementType; // 수정된 부분
}

interface MessageMenuProps {
  items: ListItem[];
  onItemClick: (item: ListItem) => void;
}

const MessageMenuItem = ({
  text,
  isSelected,
  onClick,
  icon: Icon,
}: MessageMenuItemProps) => {
  return (
    <div
      className={`${styles.noSelectedItem} ${isSelected ? styles.selectedItem : ""}`}
    >
      <dd onClick={onClick}>
        <div className={styles.MenuItem}>
          <Icon />
          <div className={styles.itemText}>{text}</div>
        </div>
      </dd>
    </div>
  );
};

export default function MessageMenu({ items, onItemClick }: MessageMenuProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: ListItem) => {
    setSelectedItem(item.id);
    onItemClick(item);
  };

  return (
    <div className={styles.layout}>
      {items.map((item) => (
        <div className={styles.listLayout} key={item.id}>
          <MessageMenuItem
            text={item.title}
            isSelected={item.id === selectedItem}
            onClick={() => handleItemClick(item)}
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  );
}
