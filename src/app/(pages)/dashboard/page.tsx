"use client";

import { FC } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";

const DashboardPage: FC = () => {
  const { name } = parseCookies();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-4xl font-bold mb-2 ">Seja Bem Vindo {name}</h1>
      <p className="w-9/12 text-center text-[#475569] font-light text-base">
        Lorem ipsum ad Lorem ipsum ad Lorem ipsum ad Lorem ipsum ad
      </p>
      <button
        className="h-12 w-9/12 rounded-md bg-[#7C3AED] text-white mt-6 font-bold hover:bg-[#9F67FF]"
        type="button"
        onClick={() => router.push("/dashboard/profile")}
      >
        Perfil
      </button>
    </div>
  );
};

export default DashboardPage;
