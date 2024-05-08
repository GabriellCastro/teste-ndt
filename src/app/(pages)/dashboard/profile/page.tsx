"use client";

import { Input } from "@/components/Input";
import { FC } from "react";
import { destroyCookie, setCookie } from "nookies";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ProfilePage: FC = () => {
  const methods = useForm();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  const changeNameUser: SubmitHandler<any> = (data) => {
    try {
      destroyCookie(null, "name");
      setCookie(null, "name", data.name);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(changeNameUser)}>
        <div className="flex flex-col items-center mt-16 w-9/12 ">
          <h1 className="text-4xl font-bold mb-2 ">Perfil</h1>
          <p className="w-full text-center text-[#475569] font-light text-base">
            Lorem ipsum ad Lorem ipsum ad Lorem ipsum ad Lorem ipsum ad
          </p>
          <Input placeholder="Nome" name="name" description="Digite seu nome" />
          <button
            className="h-12 w-full rounded-md bg-[#7C3AED] text-white mt-6 font-bold hover:bg-[#9F67FF]"
            type="submit"
          >
            {isSubmitSuccessful ? "Mudando..." : "Mudar"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfilePage;
