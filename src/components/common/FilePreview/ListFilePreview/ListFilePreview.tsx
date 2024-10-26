import { EtcIcon, LinkIcon } from "@/constants/icon";
import { FileIconMap } from "@/constants/map/fileIcon";

import FileHoverButton from "../FileHoverButton/FileHoverButton";
import styles from "./ListFilePreview.module.scss";

interface ListFilePreviewProps {
  fileName: string;
  author: string;
  date: string;
  extension: string;
  isLink?: boolean;
}

export default function ListFilePreview({
  fileName,
  author,
  date,
  extension,
  isLink = false,
}: ListFilePreviewProps) {
  const IconComponent =
    FileIconMap[extension.toLowerCase()]?.default || EtcIcon;

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        {isLink ? <LinkIcon /> : <IconComponent />}
      </div>
      <div className={styles.content}>
        <div className={styles.fileInfoWrapper}>
          <div className={styles.fileName}>{fileName}</div>
          <span className={styles.description}>{extension.toUpperCase()}</span>
          <span className={styles.description}>{`${author} • ${date}`}</span>
        </div>
        <div className={styles.fileHoverButtonWrapper}>
          <FileHoverButton
            fileType={isLink ? "link" : "download"}
            size="default"
          />
        </div>
      </div>
    </div>
  );
}
