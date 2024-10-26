import styles from "./ProfileMain.module.scss";
export default function ProfileMain() {
  return (
    <div>
      <div className={`${styles.flexCol} ${styles.gap}`}>
        <div className={styles.profile}>
          <img src="img/user.jpg" className={styles.profileImg} />
        </div>

        <div className={styles.profile}>
          <div className={styles.infoContent}>
            <div>
              <div className={styles.text}>Blog.</div>
              <div>
                <a>https://velog.io/@htkim97/posts</a>
              </div>
            </div>
            <div>
              <div className={styles.text}>Channel.</div>
              <div >
                <a >https://github.com/htkim97</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
