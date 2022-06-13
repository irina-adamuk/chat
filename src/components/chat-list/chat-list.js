import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ChatListItem } from "./chat";
import { useSelector } from "react-redux";
import CreateChatBtn from "../create-chat-dialog/create-chat-dialog";

import { Link, useParams } from "react-router-dom";

import "./chat-list.scss";

export const ChatList = () => {
  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  console.log("conversations:", conversations);

  const { chatId } = useParams();

  const createConversation = () => {};

  return (
    <div className="aside-wrap">
      <SimpleBar className="chat-list-wrapper">
        <>
          {conversations.map((chat) => (
            <Link className="list-link" key={chat.id} to={`/chat/${chat.id}`}>
              <ChatListItem chat={chat} selected={chatId === chat.id} />
            </Link>
          ))}
        </>
      </SimpleBar>
      <CreateChatBtn />
    </div>
  );
};
