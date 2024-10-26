import ProfileImage from "@/components/common/ProfileImage/ProfileImage";
import React from "react";

import styles from "./UserProfileList.module.scss";
import { ListData } from "./dummyData";

export default function AvatarDummy() {
  return (
    <div className={styles.layout}>
      <div className={styles.avatar}>
        {ListData.map((item, index) => (
          <div key={index}>
            <ProfileImage
              src="https://picsum.photos/200"
              size="mini"
              state="default"
            />
          </div>
        ))}
      </div>
      <div className={styles.userCount}>{ListData.length}</div>
    </div>
  );
}
