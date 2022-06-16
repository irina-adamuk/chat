import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

const initialState = {
  messages: {
    chat2: [
      {
        author: "user user",
        id: nanoid(8),
        message: "how are you?",
        date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      },
      {
        author: "user user",
        id: nanoid(2),
        message: "hello",
        date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      },
    ],
    chat5: [
      {
        author: "user user",
        id: nanoid(4),
        message: "Все хорошо?",
        date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      },
      {
        author: "user user",
        id: nanoid(3),
        message: "Не знаю, что нового рассказать",
        date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      },
    ],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] ?? []),
            {
              ...action.payload.message,
              id: nanoid(5),
              date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
            },
          ],
        },
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          [action.payload.chatId]: state.messages[action.payload.chatId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    case DELETE_CONVERSATION: {
      delete state.messages[action.payload];
      return {
        state,
      };
    }
    default:
      return state;
  }
};
