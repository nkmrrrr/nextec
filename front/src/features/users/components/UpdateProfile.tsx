import { useAuth } from "@/hook/auth";
import { useUser } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Required"),
});

type ProfileValues = {
  name: string;
};

export default function UpdateProfile() {
  const { data } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileValues>({
    resolver: zodResolver(schema),
    // defaultValues で populate したいヨネ（ルー大柴ボイス）
  });

  const onSubmit: SubmitHandler<ProfileValues> = (data, event) => {
    console.log(data, event);
  };

  const onError: SubmitErrorHandler<ProfileValues> = (errors, event) => {
    console.log(errors, event);
  };

  // register で指定すると uncontrolled となるので useState と併用は不可
  // react-hook-form で使用した場合は useState と併用するパターンもある
  // register を利用する場合は useForm に defualtValue のプロパティを設定できる
  // ちなみに bullet-proof では Form 送信処理に必須となる部分のみを切り出して、再利用可能にしていた
  // 参考: Form.tsx
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">ユーザ名</label>
        <input {...register("name")} defaultValue={data?.name} />
      </form>
    </div>
  );
}
