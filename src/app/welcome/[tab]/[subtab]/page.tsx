import FileDropView from "@/components/common/FileDropView/FileDropView";
import React from "react";

export default function SubTapPage({ params }: { params: { subtab: string } }) {
  return <div style={{ padding: "10px" }}>{params.subtab}</div>;
}
