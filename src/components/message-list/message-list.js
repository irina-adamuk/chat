import React from 'react';
import { useState, useEffect} from "react";
import { Message } from "./message";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./message-list.scss";

const getBotMessage = ()  =>  ({
  author: "Bot Robot",
  id: nanoid(1),
  message: "Добро пожаловать!",
  date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
});

export const MessageList = () => {
  const [messages, setMessages] = useState([
    getBotMessage()
  ]);

  const [value, setValue] = useState("");
  const scrollableNodeRef = React.createRef();

  useEffect(() => {
    if(scrollableNodeRef.current) {
      scrollableNodeRef.current.scrollTo(0, scrollableNodeRef.current.scrollHeight);
    }
  }, [messages]);


  useEffect(() => {
    let lastMessage = messages[messages.length - 1];
    let timerId = null;
    if (messages.length && lastMessage?.author === "User User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          getBotMessage(),
        ]);
      }, 1500);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User User",
          id: nanoid(3),
          message: value,
          date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div>
        <SimpleBar 
          scrollableNodeProps={{ ref: scrollableNodeRef }}
          autoHide={false}
          className="messages-container">
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
                  onClick={sendMessage}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    </>
  );
};
