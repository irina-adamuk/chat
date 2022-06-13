import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversations: [
    {
      chatName: "Иван Петров",
      author: "Иван Петров",
      date: "10.02.2020",
      id: "chat1",
      message: "Привет, нам нужно встретиться!",
    },
    {
      chatName: "Алена Богданова",
      author: "Алена Богданова",
      date: "11.02.2020",
      id: "chat2",
      message: "Привет, как дела!",
    },
    {
      chatName: "Маргарита Козлова",
      author: "Маргарита Козлова",
      date: "07.03.2020",
      id: "chat3",
      message: "Куда пропал!",
    },
    {
      chatName: "Семен Агеев",
      author: "Семен Агеев",
      date: "01.04.2022",
      id: "chat4",
      message: "Че , как?",
    },
    {
      chatName: "Павел Воля",
      author: "Павел Воля",
      date: "02.02.2022",
      id: "chat5",
      message: "Есть интересная тема =)",
    },
    {
      chatName: "Вася Пупкин",
      author: "Вася Пупкин",
      date: "15.04.2022",
      id: "chat6",
      message: "Не могу!",
    },
    {
      chatName: "Оксана Гвоздикова",
      author: "Оксана Гвоздикова",
      date: "11.08.2020",
      id: "chat7",
      message: "Пока!",
    },
    {
      chatName: "Катя Пушкарева",
      author: "Катя Пушкарева",
      date: "10.02.2020",
      id: "chat8",
      message: "Привет, нам нужно встретиться",
    },
    {
      chatName: "Кирилл Голубев",
      author: "Кирилл Голубев",
      date: "13.05.2022",
      id: "chat9",
      message: "Не знаю как это можно решить",
    },

    {
      chatName: "Мария Козлова",
      author: "Мария Козлова",
      date: "10.02.2020",
      id: "chat10",
      message: "Погоди!",
    },
    {
      chatName: "Анна Котикова",
      author: "Анна Котикова",
      date: "18.03.2021",
      id: "chat11",
      message: "Встреча завтра!",
    },
    {
      chatName: "Екатерина Андреева",
      author: "Екатерина Андреева",
      date: "10.04.2022",
      id: "chat12",
      message: "Главные новости на сегодня...",
    },
    {
      chatName: "Гарри Поттер",
      author: "Гарри Поттер",
      date: "22.02.2021",
      id: "chat13",
      message: "Вышел новый фильм, не пропусти!",
    },
  ],
};
export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    default:
      return state;
  }
};
