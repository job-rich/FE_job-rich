"use client";

import {
  AtIcon,
  EmojiIcon,
  LetterCaseIcon,
  PlusIcon,
  SendIcon,
} from "@/constants/icon";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";

import styles from "./ChatInput.module.scss";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      ["bold", "underline", "italic", "strike"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["code"],
    ],
  },
};

export default function ChatInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 포커싱 해제
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleClickOutside]);

  // enter 이벤트
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const cleanValue = (html: string) => {
    let cleanedHtml = html.replace(/<p><br><\/p>$/g, "").trim();
    return cleanedHtml;
  };

  const onSubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      let cleanedValue = cleanValue(value);
      const textValue = stripHtml(cleanedValue).trim();
      if (textValue !== "") {
        submitEnter(cleanedValue);
        setValue("");
      }
    }
  };

  const submitEnter = (cleanValued: string) => {
    console.log("Message sent:", cleanValued);
    setValue("");
  };

  // submit 버튼 이벤트
  const submitClick = () => {
    const cleanedValue = cleanValue(value);
    const textValue = stripHtml(cleanedValue).trim();
    if (textValue !== "") {
      submitEnter(cleanedValue);
    }
  };

  return (
    <div
      className={`${styles.layout} ${isFocused ? "quill-focused" : ""}`}
      onClick={() => setIsFocused(true)}
      ref={inputRef}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          border: isFocused ? "1px solid #00C1A2" : "1px solid #cdd3dd",
        }}
        modules={modules}
        placeholder="메시지를 입력하세요..."
        onFocus={() => setIsFocused(true)}
        onKeyDown={onSubmit}
      />
      <div className={styles.bottomButtons}>
        <div className={styles.plusButtonLayout}>
          <PlusIcon />
        </div>
        <div className={styles.buttonLayout}>
          <div className={styles.letterCaseIcon}>
            <LetterCaseIcon />
          </div>
          <div className={styles.atIcon}>
            <AtIcon stroke="#414D5C" />
          </div>
          <div className={styles.emojiButton}>
            <EmojiIcon stroke="#414D5C" />
          </div>
          <div className={styles.sendButton} onClick={submitClick}>
            <SendIcon fill={isFocused ? "#00C1A2" : "#CDD3DD"} />
          </div>
        </div>
      </div>
    </div>
  );
}
