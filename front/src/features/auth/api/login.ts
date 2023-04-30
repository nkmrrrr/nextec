import axios from "@/lib/axios";

import { AuthUser } from "../types";

export type LoginCredentialsDTO = Pick<AuthUser, "email" | "password">;

// sunctum での認証方式のため、認証成功したユーザがjsonで返却される
export const loginWithEmailAndPassword = ({
  params,
}: LoginCredentialsDTO): Promise<AuthUser> => {
  return axios.post("api/login", params);
};
