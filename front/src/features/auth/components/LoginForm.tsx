import link from "next/link";
import * as z from "zod";
// import { useLogin } from "@/features/auth/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(schema) });
  return (
    <div>
      <form>
        <input {...register("email")} />
        <input {...register("password")} />
      </form>
    </div>
  );
}
