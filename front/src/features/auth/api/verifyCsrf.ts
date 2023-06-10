import axios from "@/lib/axios";

export const verifyCsrf = (): Promise<string> => {
  return axios.get("sanctum/csrf-cookie");
};
