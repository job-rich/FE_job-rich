import styles from "./WorkSapceAddName.module.scss";

interface AccountNameProps {
  name: string;
}
export default function WorkSpaceName({ name }: AccountNameProps) {
  return <span className={styles.WorkSpaceAddName}>{name}</span>;
}
