"use client";

import { EmojiIcon } from "@/constants/icon";
import { useEffect, useRef, useState } from "react";

import { ListData, ListItem } from "../../../../constants/EmojiData";
import ReactionEmoji from "../../ReactionEmoji/ReactionEmoji";
import styles from "./EmojiButton.module.scss";

interface EmojiCount {
  [emoji: string]: number;
}

export default function EmojiButton() {
  const [emojis, setEmojis] = useState<EmojiCount>({});
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const handleClickEmoji = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  const onEmojiClick = (emoji: string) => {
    if (!emojis[emoji]) {
      setEmojis((prevEmojis) => ({
        ...prevEmojis,
        [emoji]: 1,
      }));
    }
    setIsPickerOpen(false);
  };

  const handleReactionDelete = (emojiToDelete: string) => {
    setEmojis((prevEmojis) => {
      const updatedEmojis = { ...prevEmojis };
      delete updatedEmojis[emojiToDelete];
      return updatedEmojis;
    });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiPickerRef]);

  return (
    <div>
      <div className={styles.emojisContainer}>
        {Object.entries(emojis).map(([emoji, count]) => (
          <div key={emoji} onClick={() => handleReactionDelete(emoji)}>
            <ReactionEmoji emojiName={emoji} selectedCount={`${count}`} />
          </div>
        ))}
        <div>
          <div
            className={`${styles.emojiSelectButton} ${isPickerOpen ? styles.emojiSelectButtonOpen : ""}`}
            onClick={handleClickEmoji}
          >
            <EmojiIcon stroke={isPickerOpen ? "white" : "black"} />
          </div>
          {isPickerOpen ? (
            <div ref={emojiPickerRef} className={styles.emojiPicker}>
              {ListData.map((item) => (
                <div
                  key={item.id}
                  className={styles.emojiItem}
                  onClick={() => onEmojiClick(item.icon)}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
