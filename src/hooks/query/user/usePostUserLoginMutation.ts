"use client";

import postUserLogin from "@/api/users/postUserLogin";
import { LOGIN } from "@/constants/message/user";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";

const usePostUserLoginMutation = () => {
  const router = useRouter();

  const { mutate: loginUser } = useMutation({
    mutationFn: postUserLogin,
    onSuccess: () => {
      alert("로그인 완료");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return { loginUser };
};

export default usePostUserLoginMutation;
