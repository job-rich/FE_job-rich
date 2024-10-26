import {
  NewMemberIcon,
  AllAlarmIcon,
  Setting,
  LogoutIcon,
} from "@/constants/icon";
import React, { useState } from "react";

import styles from "./DotDropMenu.module.scss";

export default function DotDropMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleContentClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.contentGroup}>
        <div
          className={styles.content}
          style={{
            backgroundColor: activeIndex === 0 ? "#F8F9FB" : "transparent",
          }}
          onClick={() => handleContentClick(0)}
        >
          <div>
            <AllAlarmIcon />
          </div>
          <div className={styles.text}>알림 설정</div>
        </div>
        <div
          className={styles.content}
          style={{
            backgroundColor: activeIndex === 1 ? "#F8F9FB" : "transparent",
          }}
          onClick={() => handleContentClick(1)}
        >
          <div>
            <Setting />
          </div>
          <div className={styles.text}>대화방 정보 수정</div>
        </div>
        <div
          className={styles.content}
          style={{
            backgroundColor: activeIndex === 2 ? "#F8F9FB" : "transparent",
          }}
          onClick={() => handleContentClick(2)}
        >
          <div>
            <div>
              <NewMemberIcon />
            </div>
          </div>
          <div className={styles.text}>멤버 추가</div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.logout}>
        <div>
          <LogoutIcon stroke="#F63D68" />
        </div>
        <div className={styles.logoutText}>대화방 나가기</div>
      </div>
    </div>
  );
}
