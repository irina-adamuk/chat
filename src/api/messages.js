import { database } from "./firebase";
import { set, child, ref, get, push, remove } from "firebase/database";

export const createMessageApi = (chatId, message) => {
  return set(child(ref(database), `messages/${chatId}/${message.id}`), message);
};

export const getMessagesApi = () => {
	return get(child(ref(database), "messages"));
};

export const removeMessageApi = (chatId, messageId) => {
	return remove(
    child(ref(database), `messages/${chatId}/${messageId}`)
  );
};
