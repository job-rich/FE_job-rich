import {
  CopyIcon,
  DirectLinkIcon,
  FileDownloadIcon,
  FileReadIcon,
} from "@/constants/icon";

import styles from "./FileHoverButton.module.scss";

interface FileHoverButtonProps {
  size?: "default" | "mini";
  fileType: "download" | "link";
}

export default function FileHoverButton({
  size = "default",
  fileType,
}: FileHoverButtonProps) {
  return (
    <div
      className={`${styles.container} ${size === "mini" ? styles.mini : ""}`}
    >
      <div
        className={`${styles.iconWrapper} ${size === "mini" ? styles.mini : ""}`}
      >
        {fileType === "download" ? <FileReadIcon /> : <CopyIcon />}
      </div>
      <div
        className={`${styles.iconWrapper} ${size === "mini" ? styles.mini : ""}`}
      >
        {fileType === "download" ? <FileDownloadIcon /> : <DirectLinkIcon />}
      </div>
    </div>
  );
}
