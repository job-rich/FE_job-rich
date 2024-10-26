"use client";

import { InputResetIcon, SearchIcon } from "@/constants/icon";
import { PLACEHOLDER } from "@/constants/message/inputs";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  placeholder?: string;
  shape?: "rectangle" | "round";
}

export default function SearchInput({
  placeholder = PLACEHOLDER.SEARCH,
  shape = "round",
}: SearchInputProps) {
  const inputRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={`${styles.container} ${shape === "rectangle" ? styles.rectangle : ""} ${isFocused ? styles.focused : ""}`}
      ref={inputRef}
      onClick={() => setIsFocused(true)}
    >
      <input
        className={`${styles.input} ${isFocused ? styles.focused : ""}`}
        placeholder={placeholder}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      {keyword.length > 0 && (
        <InputResetIcon
          className={styles.inputResetIcon}
          onClick={() => setKeyword("")}
        />
      )}
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
}
