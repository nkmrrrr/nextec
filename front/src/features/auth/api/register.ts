import axios from "@/lib/axios";

import { AuthUser } from "@/features/auth/types";

export type RegisterCredentialsDTO = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<AuthUser> => {
  return axios.post("/register", data);
};
