import { type LoginCredentialsDTO } from "@/features/auth/api/login";
import { configureAuth } from "react-query-auth";

async function userFn() {
  //    try {
  //     const user = await getUser();
  //     return user && user.id ? user: null;
  //    } catch (error) {
  //     console.error(error);
  //     return null;
  //    }
}

async function loginFn(credentials: LoginCredentialsDTO) {
  //
}

async function registerFn() {
  //
}

async function logoutFn() {
  //
}

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});
