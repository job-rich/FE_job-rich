import styles from "./AccountName.module.scss";

interface AccountNameProps {
  name: string;
}
export default function AccountName({ name }: AccountNameProps) {
  return <span className={styles.span}>{name}</span>;
}
