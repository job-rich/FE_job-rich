import putUser from "@/api/users/putUser";
import { REGISTER } from "@/constants/message/user";
import { PATH } from "@/constants/path";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";

const usePutUserMutation = () => {
  const { mutate: registerUser } = useMutation({
    mutationFn: putUser,
    onSuccess: () => {
      alert(REGISTER.ALERT.DONE);
    },
    onError: () => {
      alert("error");
    },
  });

  return { registerUser };
};

export default usePutUserMutation;
