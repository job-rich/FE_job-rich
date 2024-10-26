import styles from "./MainArea.module.scss";

interface MainAreaProps {
  children?: React.ReactNode;
}

export default function MainArea({ children }: MainAreaProps) {
  return (
    <div className={styles.container}>
      <main className={styles.mainArea}>{children}</main>
    </div>
  );
}
