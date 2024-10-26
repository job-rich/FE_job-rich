import { AvatarPlusIcon } from "@/constants/icon";
import React from "react";

import WorkSpaceName from "./WorkSapceAddName/WorkSpaceAddName";
import styles from "./WorkSpaceAdd.module.scss";

interface WorkSpaceAddProps {
  profileImage: string;
  username: string;
  onClick: () => void;
}

export default function WorkSpaceAdd({ onClick }: WorkSpaceAddProps) {
  return (
    <div className={styles.layout} onClick={onClick}>
      <AvatarPlusIcon />
      <div className={styles.text}>
        <WorkSpaceName name={"워크스페이스 추가"} />
      </div>
    </div>
  );
}
