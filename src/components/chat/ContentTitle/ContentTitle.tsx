import BookMarkButton from "@/components/common/ToggleButton/BookMarkButton/BookMarkButton";
import DropDownButton from "@/components/common/ToggleButton/DropDownButton/DropDownButton";
import { CrownIcon } from "@/constants/icon";
import { useState } from "react";

import styles from "./ContentTitle.module.scss";

interface ButtonProps {
  label: string;
}

export default function RoomTitleHeader({ label }: ButtonProps) {
  return (
    <div className={styles.layout}>
      <div>
        <BookMarkButton />
      </div>
      <div>
        <DropDownButton label={label} />
      </div>
    </div>
  );
}
