import crypto from "crypto";

export const hashCreator = (text: string) => {
  return crypto.createHash("sha256").update(text).digest("hex");
};
