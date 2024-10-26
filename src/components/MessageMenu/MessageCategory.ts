import { NewMemberIcon } from "@/constants/icon";
import { AllAlarmIcon } from "@/constants/icon";
import { NoAlarmIcon } from "@/constants/icon";
import { Setting } from "@/constants/icon";
import { ReactNode, ComponentType } from "react";

export interface ListItem {
  id: string;
  title: string;
  icon: ComponentType;
}

export const ListData: ListItem[] = [
  {
    id: "0",
    title: "새 멤버 초대",
    icon: NewMemberIcon,
  },
  {
    id: "1",
    title: "모든 알림 받기",
    icon: AllAlarmIcon,
  },
  {
    id: "2",
    title: "멘션 알림만 받기",
    icon: AllAlarmIcon,
  },
  {
    id: "3",
    title: "알림 받지 않기",
    icon: NoAlarmIcon,
  },
  {
    id: "4",
    title: "워크스페이스 설정",
    icon: Setting,
  },
];
