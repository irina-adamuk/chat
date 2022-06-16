import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {chatId, message },
});

export const deleteMessage = (chatId, messageId) => ({
  type: DELETE_MESSAGE,
  payload: {chatId, messageId },
});