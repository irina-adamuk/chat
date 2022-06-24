import { AsideHeader, ChatList, StartChatPage, DefaultChatPage } from "../../components";

import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../../store/conversations";

export const ChatPage = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations.conversations )
  useEffect(() => {
    if(!conversations.length) {
      dispatch(getConversations());
    }
  }, [dispatch]);

  return (
    <>
      <aside className="aside-bar">
        <AsideHeader />
        <ChatList />
      </aside>
      <div className="content-box">
        <Routes>
          <Route path="/" element={<StartChatPage/>}></Route>
          <Route path=":chatId" element={<DefaultChatPage/>}></Route>
        </Routes>
      </div>
    </>
  );
};
