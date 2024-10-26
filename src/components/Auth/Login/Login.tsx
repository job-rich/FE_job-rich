import styles from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <div className={styles.layout}>
      <LoginForm />
    </div>
  );
}
