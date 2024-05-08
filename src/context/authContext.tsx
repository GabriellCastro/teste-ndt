"use client";

import { createContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { publicRoutes } from "@/utils/routes";
import { Loading } from "@/components/Loading";

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export type AuthContextData = {};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsAuthenticated(true);
    try {
      const { name, email, password } = parseCookies();
      const isPublicRoute = publicRoutes.includes(pathname);
      if (!isPublicRoute) {
        if (!name || !email || !password) {
          router.push("/login");
        } else if (name && email && password) {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthenticated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {isAuthenticated ? (
        <div className="w-full h-full">
          <Loading large />
        </div>
      ) : (
        <>{children}</>
      )}
    </AuthContext.Provider>
  );
}
