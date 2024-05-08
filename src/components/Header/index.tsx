import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <Image src={"/logo.svg"} width={180} height={50} alt="logo" />
    </div>
  );
};
