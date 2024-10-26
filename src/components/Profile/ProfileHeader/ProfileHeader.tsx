import styles from "./ProfileHeader.module.scss"

export default function ProfileHeader () {
return (
  <div>
    <div className={styles.hello}>안녕하세요,</div>
    <div className={styles.title}>
      프론트엔드 개발자 <span className={styles.purpleText}>김현태</span>{" "}
      입니다.
    </div>
  </div>
);
}