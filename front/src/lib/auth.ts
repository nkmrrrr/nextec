import {
  getUser,
  verifyCsrf,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  type RegisterCredentialsDTO,
  type LoginCredentialsDTO,
} from "@/features/auth/api";
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
  await loginWithEmailAndPassword(credentials);
  const user = await getUser();
  return user;
}

async function registerFn(creadentials: RegisterCredentialsDTO) {
  await verifyCsrf();
  await registerWithEmailAndPassword(creadentials);
  const user = await getUser();
  return user;
}

async function logoutFn() {
  //
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({ userFn, loginFn, registerFn, logoutFn });
