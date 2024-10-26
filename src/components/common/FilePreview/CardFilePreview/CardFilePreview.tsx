import { EtcIcon2, LinkIcon } from "@/constants/icon";
import { FileIconMap } from "@/constants/map/fileIcon";

import FileHoverButton from "../FileHoverButton/FileHoverButton";
import styles from "./CardFilePreview.module.scss";

interface CardFilePreviewProps {
  fileName: string;
  author: string;
  date: string;
  extension: string;
  isLink?: boolean;
}

export default function CardFilePreview({
  fileName,
  author,
  date,
  extension,
  isLink = false,
}: CardFilePreviewProps) {
  const IconComponent = FileIconMap[extension.toLowerCase()]?.card || EtcIcon2;

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        {isLink ? <LinkIcon /> : <IconComponent />}
      </div>
      <div className={styles.content}>
        <div className={styles.fileInfoWrapper}>
          <div className={styles.fileName}>{fileName}</div>
          <span className={styles.description}>{`${author} • ${date}`}</span>
        </div>
        <div className={styles.fileHoverButtonWrapper}>
          <FileHoverButton
            fileType={isLink ? "link" : "download"}
            size="mini"
          />
        </div>
      </div>
    </div>
  );
}
