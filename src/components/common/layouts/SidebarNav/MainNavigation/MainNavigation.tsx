// import GreenPlusButton from "@/components/GreenPlusButton/GreenPlusButton";
// import NavButton from "@/components/common/NavButtons/NavButton/NavButton";
import NavButtons from "@/components/common/NavButtons/NavButtons";
// import ProfileImage from "@/components/common/ProfileImage/ProfileImage";

import styles from "./MainNavigation.module.scss";

export default function MainNavigation({ currentTab }: { currentTab: string }) {
  return (
    <nav className={styles.container}>
      <div className={styles.top}>
        <NavButtons currentTab={currentTab} />
      </div>
      <div className={styles.spacer} />
    </nav>
  );
}
