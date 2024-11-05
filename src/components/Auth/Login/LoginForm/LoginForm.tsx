// components/LoginButton.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  // 로그인 후 동적 라우팅
  useEffect(() => {
    if (session && session.user) {
      // session.user.id로 동적 경로로 이동
      router.push(`/welcome/${session.user?.name}/project`);
    }
  }, [session, router]);

  return <button onClick={() => signIn("google")}>Login with Google</button>;
}
