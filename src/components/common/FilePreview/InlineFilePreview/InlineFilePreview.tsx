import { EtcIcon, LinkIcon } from "@/constants/icon";
import { FileIconMap } from "@/constants/map/fileIcon";

import FileHoverButton from "../FileHoverButton/FileHoverButton";
import styles from "./inlineFilePreview.module.scss";

interface InlineFilePreviewProps {
  fileName: string;
  extension: string;
  isLink?: boolean;
}

export default function InlineFilePreview({
  fileName,
  extension,
  isLink = false,
}: InlineFilePreviewProps) {
  const IconComponent =
    FileIconMap[extension.toLowerCase()]?.default || EtcIcon;

  return (
    <>
      <div className={styles.container}>
        <div>{isLink ? <LinkIcon /> : <IconComponent />}</div>
        <div className={styles.content}>
          <div className={styles.fileInfoWrapper}>
            <div className={styles.fileName}>{fileName}</div>
            <span className={styles.description}>
              {extension.toUpperCase()}
            </span>
          </div>
          <div className={styles.fileHoverButtonWrapper}>
            <FileHoverButton
              fileType={isLink ? "link" : "download"}
              size="default"
            />
          </div>
        </div>
      </div>
    </>
  );
}
