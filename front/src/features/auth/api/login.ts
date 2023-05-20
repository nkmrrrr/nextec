import axios from "@/lib/axios";

import { AuthUser } from "../types";

export type LoginCredentialsDTO = Pick<AuthUser, "email" | "password">;

export const loginWithEmailAndPassword = (
  params: LoginCredentialsDTO
): Promise<AuthUser> => {
  return axios.post("login", params);
};
