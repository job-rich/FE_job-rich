import Login from "@/components/Auth/Login/Login";
import styles from "./login.module.scss";
export default function LoginPage() {
  return (
    <div className={styles.layout}>
      <Login />
    </div>
  );
}
