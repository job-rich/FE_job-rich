import Notice from "./Notice/Notice";
import styles from "./NoticeList.module.scss";

const DUMMY = [
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
  {
    notice: "UI/UX팀 대화방에 참여했습니다. 또한 김인정님이 참여했습니다.",
    author: "이채연",
    date: "2024-05-21",
  },
];

export default function NoticeList() {
  return (
    <div className={styles.container}>
      {DUMMY.map((notice) => (
        <Notice
          notice={notice.notice}
          author={notice.author}
          date={notice.date}
        />
      ))}
    </div>
  );
}
