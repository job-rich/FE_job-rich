import FileDropView from "@/components/common/FileDropView/FileDropView";
import React from "react";

export default function SubTapPage({
  params,
}: {
  params: { subsubtab: string; subtab: string };
}) {
  return (
    <div>
      <div style={{ padding: "10px" }}>
        {params.subtab} 페이지에 {params.subsubtab}번째 리스트 화면
      </div>
    </div>
  );
}
