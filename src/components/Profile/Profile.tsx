import styles from './Profile.module.scss'; // Import the SCSS module
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileMain from './ProfileMain/ProfileMain';

export default function Profile() {
  return (
    <div className={styles.layout}>
      <div>
        <ProfileHeader/>
      </div>
      <div className={styles.main}>
        <ProfileMain/>
      </div>
    </div>
  );
}
