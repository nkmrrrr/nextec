import { useAuth } from "@/hook/auth";
import { useUser } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Required"),
});

type ProfileValues = {
  name: string;
};

export default function UpdateProfile() {
  const { data } = useUser();

  const { register } = useForm<ProfileValues>({
    resolver: zodResolver(schema),
    // defaultValues で populate したいヨネ（ルー大柴ボイス）
  });

  // register で指定すると uncontrolled となるので useState と併用は不可
  // react-hook-form で使用した場合は useState と併用するパターンもある
  // register を利用する場合は useForm に defualtValue のプロパティを設定できる
  return (
    <div>
      <label htmlFor="name">ユーザ名</label>
      <input {...register("name")} defaultValue={data?.name} />
    </div>
  );
}
