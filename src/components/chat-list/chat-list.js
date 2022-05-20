import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ChatListItem } from "./chat/chat";
import { useState } from "react";


import "./chat-list.scss";

export const ChartList = () => {
  const chats = [
    {
      chatName: "Иван Петров",
      author: "Иван Петров",
      date: "10.02.2020",
      id: 1,
      message: "Привет, нам нужно встретиться!",
    },
    {
      chatName: "Алена Богданова",
      author: "Алена Богданова",
      date: "11.02.2020",
      id: 2,
      message: "Привет, как дела!",
    },
    {
      chatName: "Маргарита Козлова",
      author: "Маргарита Козлова",
      date: "07.03.2020",
      id: 3,
      message: "Куда пропал!",
    },
    {
      chatName: "Семен Агеев",
      author: "Семен Агеев",
      date: "01.04.2022",
      id: 4,
      message: "Че , как?",
    },
    {
      chatName: "Павел Воля",
      author: "Павел Воля",
      date: "02.02.2022",
      id: 5,
      message: "Есть интересная тема =)",
    },
    {
      chatName: "Вася Пупкин",
      author: "Вася Пупкин",
      date: "15.04.2022",
      id: 6,
      message: "Не могу!",
    },
    {
      chatName: "Оксана Гвоздикова",
      author: "Оксана Гвоздикова",
      date: "11.08.2020",
      id: 7,
      message: "Пока!",
    },
    {
      chatName: "Катя Пушкарева",
      author: "Катя Пушкарева",
      date: "10.02.2020",
      id: 8,
      message: "Привет, нам нужно встретиться",
    },
    {
      chatName: "Кирилл Голубев",
      author: "Кирилл Голубев",
      date: "13.05.2022",
      id: 9,
      message: "Не знаю как это можно решить",
    },

    {
      chatName: "Мария Козлова",
      author: "Мария Козлова",
      date: "10.02.2020",
      id: 10,
      message: "Погоди!",
    },
    {
      chatName: "Анна Котикова",
      author: "Анна Котикова",
      date: "18.03.2021",
      id: 11,
      message: "Встреча завтра!",
    },
    {
      chatName: "Екатерина Андреева",
      author: "Екатерина Андреева",
      date: "10.04.2022",
      id: 12,
      message: "Главные новости на сегодня...",
    },
    {
      chatName: "Гарри Поттер",
      author: "Гарри Поттер",
      date: "22.02.2021",
      id: 13,
      message: "Вышел новый фильм, не пропусти!",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SimpleBar className="chart-list-wrapper">
      <>
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            selected={selectedIndex === chat.id}
            handleListItemClick={() => setSelectedIndex(chat.id)}
          />
        ))}
      </>
    </SimpleBar>
  );
};
