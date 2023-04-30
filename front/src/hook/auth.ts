import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

declare type AuthMiddleware = "auth" | "guest";

// # I~~ 記法的なのがあるのか？
interface IUseAuth {
  middleware: AuthMiddleware;
  redirectIfAuthenticated?: string;
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<never[]>>;
  setStatus: React.Dispatch<React.SetStateAction<any | null>>;
  [key: string]: any;
}

export interface User {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: string;
  must_verify_email?: boolean; // this is custom attribute
  created_at?: string;
  updated_at?: string;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: IUseAuth) => {
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR<User>("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );
};
