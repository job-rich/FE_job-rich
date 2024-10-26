"use client";

import { SearchIcon } from "@/constants/icon";
import { openModal } from "@/redux/features/searchButtonSlice";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";

import styles from "./Header.module.scss";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className={styles.container}>
      <div className={styles.spacer}></div>
    </header>
  );
}
