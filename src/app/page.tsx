import { PATH } from "@/constants/path";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
      <Link href={PATH.LOGIN}>로그인</Link>
      <Link href={PATH.REGISTER}>회원가입</Link>
    </div>
  );
}
