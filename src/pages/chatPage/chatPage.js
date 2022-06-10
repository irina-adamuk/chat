import { AsideHeader, ChartList, StartChatPage, DefaultChatPage } from "../../components";
import {
  Routes,
  Route,
} from "react-router-dom";

export const ChatPage = () => {
  return (
    <>
      <aside className="aside-bar">
        <AsideHeader />
        <ChartList />
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