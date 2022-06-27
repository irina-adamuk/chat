import { database } from "./firebase";
import { set, child, ref, get, remove } from "firebase/database";

export const createConversationApi = (conversation) => {
  return set(
    child(ref(database), `conversations/${conversation.id}`),
    conversation
  );
};

export const getConversationsApi = () => {
  return get(child(ref(database), "conversations"));
};


export const removeConversationApi = (chatId) => {
  return remove(
    child(ref(database), `conversations/${chatId}`)
  );
};
