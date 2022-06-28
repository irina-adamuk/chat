import {
  SEND_MESSAGE,
  // DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
  REMOVE_MESSAGE_START,
  REMOVE_MESSAGE_SUCCESS,
  REMOVE_MESSAGE_ERROR
} from "./types";
import { DELETE_CONVERSATION } from "../types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

const initialState = {
  messages: {
    chat1: [
      //   {
      //     author: "user user",
      //     id: nanoid(8),
      //     message: "how are you?",
      //     date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      //   },
      //   {
      //     author: "user user",
      //     id: nanoid(2),
      //     message: "hello",
      //     date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      //   },
      // ],
      // chat5: [
      //   {
      //     author: "user user",
      //     id: nanoid(4),
      //     message: "Все хорошо?",
      //     date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      //   },
      //   {
      //     author: "user user",
      //     id: nanoid(3),
      //     message: "Не знаю, что нового рассказать",
      //     date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
      //   },
    ],
  },
  pending: false,
  error: null,
  pandingCreate: false,
  errorCreate: null,
  pendingRemove: false,
  errorRemove: null,
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
    // case DELETE_MESSAGE:
    //   return {
    //     ...state,
    //     messages: {
    //       ...state.messages,
    //       [action.payload.chatId]: state.messages[action.payload.chatId].filter(
    //         (message) => message.id !== action.payload.messageId
    //       ),
    //     },
    //   };
    case DELETE_CONVERSATION: {
      delete state.messages[action.payload];
      return state;
    }

    case GET_MESSAGES_START:
      return { ...state, pending: true, error: null };

    case GET_MESSAGES_SUCCESS:
    console.log(action.payload)
      return { ...state, pending: false, messages: action.payload };

    case GET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_MESSAGE_START:
      return { ...state, pendingCreate: true, errorCreate: null };

    case CREATE_MESSAGE_SUCCESS:
      const messages = {
        ...state.messages,
        [action.payload.chatId]: [
          ...(state.messages[action.payload.chatId] ?? []),
          action.payload.message,
        ],
      };
      return { ...state, pendingCreate: false, messages: messages };

    case CREATE_MESSAGE_ERROR:
      return { ...state, pendingCreate: false, errorCreate: action.payload };

    case REMOVE_MESSAGE_START:
      return { ...state, pendingRemove: true, errorRemove: null };

    case REMOVE_MESSAGE_SUCCESS:
      return {
        ...state, pendingRemove: false,
        messages: {
          [action.payload.chatId]: state.messages[action.payload.chatId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case REMOVE_MESSAGE_ERROR:
      return { ...state, pendingRemove: false, errorRemove: action.payload };

    default:
      return state;
  }
};
