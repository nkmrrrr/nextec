import { getUser } from "@/features/auth/api/getUser";
import {
  loginWithEmailAndPassword,
  type LoginCredentialsDTO,
} from "@/features/auth/api/login";
import {
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
} from "@/features/auth/api/register";
import { configureAuth } from "react-query-auth";

async function userFn() {
  try {
    const user = await getUser();
    return user && user.id ? user : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loginFn(credentials: LoginCredentialsDTO) {
  // ここに csrf 入れるお
  await loginWithEmailAndPassword(credentials);
  const user = await getUser();
  return user;
}

async function registerFn(creadentials: RegisterCredentialsDTO) {
  await registerWithEmailAndPassword(creadentials);
  const user = await getUser();
  return user;
}

async function logoutFn() {
  //
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({ userFn, loginFn, registerFn, logoutFn });
