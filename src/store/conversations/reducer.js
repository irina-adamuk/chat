import { CREATE_CONVERSATION } from "./types";
import { DELETE_CONVERSATION } from "../types";
import { nanoid } from "nanoid";
import { format } from "date-fns";

const initialState = {
  conversations: [
    {
      chatName: "Иван Петров",
      // author: "Иван Петров",
      // date: "10.02.2020",
      id: "chat1",
      // message: "Привет, нам нужно встретиться!",
    },
    {
      chatName: "Алена Богданова",
      // author: "Алена Богданова",
      // date: "11.02.2020",
      id: "chat2",
      // message: "Привет, как дела!",
    },
    {
      chatName: "Маргарита Козлова",
      // author: "Маргарита Козлова",
      // date: "07.03.2020",
      id: "chat3",
      // message: "Куда пропал!",
    },
    {
      chatName: "Семен Агеев",
      // author: "Семен Агеев",
      // date: "01.04.2022",
      id: "chat4",
      // message: "Че , как?",
    },
    {
      chatName: "Павел Воля",
      // author: "Павел Воля",
      // date: "02.02.2022",
      id: "chat5",
      // message: "Есть интересная тема =)",
    },
    {
      chatName: "Вася Пупкин",
      // author: "Вася Пупкин",
      // date: "15.04.2022",
      id: "chat6",
      // message: "Не могу!",
    },
    {
      chatName: "Оксана Гвоздикова",
      // author: "Оксана Гвоздикова",
      // date: "11.08.2020",
      id: "chat7",
      // message: "Пока!",
    },
  ],
	// conversations:['room1', 'room2', 'room3']
};
export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, {
          chatName: action.payload,
          // author: action.payload,
          // date: format(new Date(),  "dd-MM-yyyy HH:mm:ss"),
          id: nanoid(1),
          // message: "",
        }],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.id !== action.payload
        ),
      };
    default:
      return state;
  }
};