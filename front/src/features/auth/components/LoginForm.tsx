import link from "next/link";
import * as z from "zod";
// import { useLogin } from "@/features/auth/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/lib/auth";

const schema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

// zod の infer 使えば良さそう
type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(schema) });

  const {isLoading, isError, mutate, error} = useLogin();
  const onSubmit: SubmitHandler<LoginValues> = (data, event) => {
    event?.preventDefault();
    console.log()
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        <label htmlFor="password">Password</label>
        <input {...register("password")} />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
