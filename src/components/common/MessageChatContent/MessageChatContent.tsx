import styles from "./MessageChatContent.module.scss";

interface MessageChatContentProps {
  chatContent: string;
}

export default function MessageChatContent({
  chatContent,
}: MessageChatContentProps) {
  return <span className={styles.chatContent}>{chatContent}</span>;
}
