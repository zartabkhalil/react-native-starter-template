export const DebugLog = (Error: Error | string | unknown, filename: string) => {
  // 🔐
  // ❌
  // ✅
  console.log(
    `🔥❌🔥 Error inside the Filename start with ****${filename}**** \n "Erro is:",${JSON.stringify(
      Error,
    )}`,
  );
};
