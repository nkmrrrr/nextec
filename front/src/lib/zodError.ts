import { z } from "zod";

// バリデーション失敗した際のエラーメッセージを自由にカスタマイズできる関数
// https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md#customizing-errors-with-zoderrormap
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  return { message: ctx.defaultError };
};

// 上記で定義した customeErrorMap を登録
z.setErrorMap(customErrorMap);
