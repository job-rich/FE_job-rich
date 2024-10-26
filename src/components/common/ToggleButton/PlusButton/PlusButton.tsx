import { PlusIcon } from "@/constants/icon";

interface ButtonProps {
  onClick: () => void;
}

export default function PlusButton({ onClick }: ButtonProps) {
  return (
    <div>
      <PlusIcon onClick={onClick} />
    </div>
  );
}
