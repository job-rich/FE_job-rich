"use client";

import { selectButton } from "@/redux/features/navButtonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";

import NavButton from "./NavButton/NavButton";
import styles from "./NavButtons.module.scss";

type ButtonType = "project" | "friends" | "thread" | "rooms"; // 타입 정의

const buttonTypes: { type: ButtonType; href: string }[] = [
  { type: "project", href: "/project" },
  { type: "friends", href: "/friends" },
  { type: "thread", href: "/thread" },
  { type: "rooms", href: "/rooms" },
];

export default function NavButtons({ currentTab }: { currentTab: string }) {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector(
    (state) => state.navButtonReducer.selectedType
  );

  const handleButtonClick = (type: ButtonType) => {
    // 타입 지정
    dispatch(selectButton(type));
  };

  return (
    <div className={styles.container}>
      {buttonTypes.map((button) => (
        <Link href={`/welcome/${currentTab}/${button.type}`} key={button.type}>
          <NavButton
            type={button.type}
            isSelected={selectedType === button.type}
            onClick={() => handleButtonClick(button.type)}
          />
        </Link>
      ))}
    </div>
  );
}
