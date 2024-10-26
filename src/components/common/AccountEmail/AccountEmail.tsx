import styles from "./AccountEmail.module.scss";

interface AccountEmailProps {
  email: string;
}

export default function AccountEmail({ email }: AccountEmailProps) {
  return <span className={styles.span}>{email}</span>;
}
