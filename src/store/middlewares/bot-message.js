import { SEND_MESSAGE, sendMessage } from "../messages";

export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author !== "Bot Robot"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.chatId, {
          author: "Bot Robot",
          message: "Hello from Bot Robot middleware!",
        })
      );
    }, 500);
  }
  return next(action);
};
