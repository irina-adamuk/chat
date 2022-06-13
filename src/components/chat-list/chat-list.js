import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ChatListItem } from "./chat";
import { useSelector, useDispatch } from "react-redux";
import CreateChatBtn from "../create-chat-dialog/create-chat-dialog";
import { deleteConversation } from "../../store/conversations";

import { Link, useParams, useNavigate } from "react-router-dom";

import "./chat-list.scss";
import { useCallback } from "react";

export const ChatList = () => {
  const conversations = useSelector(
    (state) => state.conversations.conversations
  );

  const { chatId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteConversationByName = useCallback(
    (chatId, e) => {
      console.log(chatId)
      console.log(e)
      e.preventDefault();
      dispatch(deleteConversation(chatId));
      navigate("/chat");
    },
    [dispatch, navigate]
  );


  return (
    <div className="aside-wrap">
      <SimpleBar className="chat-list-wrapper">
        <>
          {conversations.map((chat) => (
            <Link className="list-link" key={chat.id} to={`/chat/${chat.id}`}>
              <ChatListItem chat={chat} selected={chatId === chat.id} deleteConversationByName={deleteConversationByName}/>
            </Link>
          ))}
        </>
      </SimpleBar>
      <CreateChatBtn />
    </div>
  );
};
