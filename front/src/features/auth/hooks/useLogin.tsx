// import { useCallback, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { isAxiosError } from "axios";

// import { useAuth } from "@/lib/auth";
// import { z, zodResolver } from "@/lib/zodError";
// import { MessageStatus } from "@/lib/types";
// import { LoginDTO } from "../api";

// import React from "react";

// type CredentialsDTO = z.z;

// const Schema: z.ZodType<CredentialsDTO> = z.object({
//   email: z.string().min(1), // 正規表現でのバリデーション必要？
//   password: z.string().min(1),
// });

// export default function useLogin() {
//   const { login, isLogginIn } = useAuth();
//   const [flashMessage, setFlashMessage] = useState<{
//     status: MessageStatus;
//     message: string;
//   } | null>(null);
//   const router = useRouter();
//   const methods = useForm<CredentialsDTO>({ resolver: zodResolver(Schema) });

//   const onSubmit = useCallback(
//     methods.handleSubmit(async (data) => {
//       try {
//         await login({ params: data });
//         router.replace("/");
//       } catch (error) {
//         setFlashMessage({
//           status: "danger",
//           message: "エラーが発生したおww",
//         });
//       }
//     }),
//     [login]
//   );
//   return {
//     methods,
//     onSubmit,
//     flashMessage,
//     isLogginIn,
//   };
// }
