import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Message } from "./message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./message-list.scss";


// const getBotMessage = () => ({
//   author: "Bot Robot",
//   id: nanoid(1),
//   message: "Добро пожаловать!",
//   date: format(new Date(),  "dd-MM-yyyy HH:mm:ss"),
// });

// const getBotAnswer = (message) => {
//   const answers = {
//     привет: "Привет",
//     пока: "До скорой встречи",
//   };

//   return answers[message] || "ответ не найден";
// };

export const MessageList = () => {
  const { chatId } = useParams();
  const messages = useSelector((state)=> state.messages.messages[chatId] ?? []);

  
  // const [messageList, setMessageList] = useState({
  //   chat1: [getBotMessage()],
  //   chat3: [getBotMessage()],
  //   chat5: [getBotMessage()],
  //   chat10: [getBotMessage()],
  // });

  const [value, setValue] = useState("");
  const scrollableNodeRef = React.createRef();

  const sendMessage = useCallback(
    (message, author = "User User") => {
      if (message) {
        setValue("");
      }
    },
    []
  );
  useEffect(() => {
    if (scrollableNodeRef.current) {
      scrollableNodeRef.current.scrollTo(
        0,
        scrollableNodeRef.current.scrollHeight
      );
    }
  }, [messages]);

  // useEffect(() => {
  //   let lastMessage = messages[messages.length - 1];
  //   let timerId = null;

  //   if (messages.length && lastMessage?.author === "User User") {
  //     timerId = setTimeout(() => {
  //       sendMessage(getBotAnswer(lastMessage.message), "Bot Robot");
  //       console.log("last message", lastMessage);
  //     }, 1500);
  //   }

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [sendMessage, messages, chatId]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  return (
    <>
      <div>
        <SimpleBar
          scrollableNodeProps={{ ref: scrollableNodeRef }}
          autoHide={false}
          className="messages-container"
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message.message}
              author={message.author}
              date={message.date}
            ></Message>
          ))}
        </SimpleBar>
      </div>

      <div className="send-form">
        <Input
          onChange={handleChange}
          placeholder="Введите сообщение"
          value={value}
          onKeyDown={handlePressInput}
          fullWidth={true}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className="send-form-btn"
                  color="primary"
                  onClick={() => sendMessage(value)}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    </>
  );
};
