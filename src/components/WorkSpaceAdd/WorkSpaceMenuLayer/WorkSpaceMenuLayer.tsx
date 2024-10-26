import { AvatarPlusIcon } from "@/constants/icon";
import React from "react";

import AccountInfo from "../../AccountInfo/AccountInfo";
import ProfileImage from "../../common/ProfileImage/ProfileImage";
import WorkSpaceAdd from "../WorkSpaceAdd";
import styles from "./WorkSpaceMenuLayer.module.scss";

interface ProfileLayoutProps {
  profileImage: string;
  username: string;
  userId: string;
  userEmail: string;
}

const handleAddSpaceWork = () => {
  console.log("워크스페이스 추가");
};

const handleSelectList = () => {
  console.log("워크스페이스 선택");
};

export default function WorkSpaceMenuLayer({
  profileImage,
  username,
  userEmail,
}: ProfileLayoutProps) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.workSpaceList} onClick={handleSelectList}>
          <ProfileImage src={profileImage} />
          <AccountInfo name={username} email={userEmail} />
        </div>

        <div className={styles.workSpaceAdd}>
          <WorkSpaceAdd
            profileImage={""}
            username={"워크스페이스 추가"}
            onClick={handleAddSpaceWork}
          />
        </div>
      </div>
    </>
  );
}
