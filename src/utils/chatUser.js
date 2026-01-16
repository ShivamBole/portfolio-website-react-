import { v4 as uuidv4 } from "uuid";

export const getChatUserId = () => {
  let userId = localStorage.getItem("portfolio_chat_uid");

  if (!userId) {
    userId = uuidv4();
    localStorage.setItem("portfolio_chat_uid", userId);
  }

  return userId;
};
