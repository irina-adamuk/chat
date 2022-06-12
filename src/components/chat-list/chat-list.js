import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ChatListItem } from "./chat";

import { Link, useParams } from "react-router-dom";

import "./chat-list.scss";

export const ChatList = () => {
  const chats = [
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
  ];

  const { chatId } = useParams();

  return (
    <SimpleBar className="chat-list-wrapper">
      <>
        {chats.map((chat) => (
          <Link className="list-link" key={chat.id} to={`/chat/${chat.id}`}>
            <ChatListItem
              chat={chat}
              selected={chatId === chat.id}
            />
          </Link>
        ))}
      </>
    </SimpleBar>
  );
};
