import { ArrowMaximize, ArrowMinimize } from "@/constants/icon";
import {
  maximizeModal,
  maximinToggleModal,
} from "@/redux/features/searchButtonSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MaximizeButton.module.scss";

export default function MaximizeButton() {
  const dispatch = useDispatch();
  const isMaximize = useSelector(
    (state: RootState) => state.searchReducer.isMaximize
  );
  return (
    <div>
      <div
        className={styles.arrowMaximize}
        onClick={() => dispatch(maximinToggleModal())}
      >
        {isMaximize ? <ArrowMinimize stroke="#414D5C" /> : <ArrowMaximize />}
      </div>
    </div>
  );
}
