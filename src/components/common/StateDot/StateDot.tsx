import styles from "./StateDot.module.scss";

interface StateDotProps {
  state: "alarm" | "active" | "inactive" | "default";
  size: "group" | "user" | "mini";
}

export default function StateDot({ state, size }: StateDotProps) {
  if (state === "default") {
    return null;
  }

  return (
    <div
      className={`${styles.dot} ${state === "alarm" ? styles.alarm : state === "active" ? styles.active : styles.inactive} ${size === "group" ? styles.group : size === "user" ? styles.user : styles.mini}`}
    ></div>
  );
}
