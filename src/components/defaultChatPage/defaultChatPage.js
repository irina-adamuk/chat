import { PersistentDrawerRight } from "./persistent-drawer";
import { MessageList } from "../message-list";

export const DefaultChatPage = () => {
  return (
    <>
      <PersistentDrawerRight />
      <MessageList />
    </>
  );
};
