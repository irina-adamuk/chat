import {
  // CREATE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_ERROR,
  REMOVE_CONVERSATION_START,
  REMOVE_CONVERSATION_SUCCESS,
  REMOVE_CONVERSATION_ERROR,
} from "./types";

import { DELETE_CONVERSATION } from "../types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

const initialState = {
  // conversations: [
  //   {
  //     chatName: "Иван Петров",
  //     id: "chat1",
  //   },
  //   {
  //     chatName: "Алена Богданова",
  //     id: "chat2",
  //   },
  //   {
  //     chatName: "Маргарита Козлова",
  //     id: "chat3",
  //   },
  //   {
  //     chatName: "Семен Агеев",
  //     id: "chat4",
  //   },
  //   {
  //     chatName: "Павел Воля",
  //     id: "chat5",
  //   },
  //   {
  //     chatName: "Вася Пупкин",
  //     id: "chat6",
  //   },
  //   {
  //     chatName: "Оксана Гвоздикова",
  //     id: "chat7",
  //   },
  // ],
  conversations: [],
  pending: false,
  error: null,
  pendingCreate: false,
  errorCreate: null,
  pendingRemove: false,
  errorRemove: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: [
    //       ...state.conversations,
    //       {
    //         chatName: action.payload,
    //         id: nanoid(1),
    //       },
    //     ],
    //   };

    // case DELETE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: state.conversations.filter(
    //       (conversation) => conversation.id !== action.payload
    //     ),
    //   };

    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };

    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversations: action.payload };

    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_CONVERSATION_START:
      return { ...state, pendingCreate: true, errorCreate: null };

    case CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingCreate: false,
        conversations: [...state.conversations, action.payload],
      };

    case CREATE_CONVERSATION_ERROR:
      return { ...state, pendingRemove: false, errorRemove: action.payload };

      
    case REMOVE_CONVERSATION_START:
      return { ...state, pendingRemove: true, errorRemove: null };

    case REMOVE_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.id !== action.payload
        ),
      };

    case REMOVE_CONVERSATION_ERROR:
      return { ...state, pendingRemove: false, errorRemove: action.payload };

    default:
      return state;
  }
};
