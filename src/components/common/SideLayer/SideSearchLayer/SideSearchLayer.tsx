import { CloseIcon } from "@/constants/icon";
import { closeModal } from "@/redux/features/searchButtonSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../../SearchInput/SearchInput";
import MaximizeButton from "../../ToggleButton/MaximizeButton/MaximizeButton";
import styles from "./sideSearchLayer.module.scss";

export default function SideSearchLayer() {
  const dispatch = useDispatch();
  const isMaximize = useSelector(
    (state: RootState) => state.searchReducer.isMaximize
  );

  return (
    <div
      className={`${isMaximize ? styles.searchComponentMaximizeLayout : styles.searchComponentLayout}`}
    >
      <div className={styles.searchHeader}>
        <div className={styles.searchTitle}>검색</div>
        <div className={styles.buttonWrapper}>
          <MaximizeButton />
          <div
            className={styles.closeButton}
            onClick={() => dispatch(closeModal())}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInput}>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
