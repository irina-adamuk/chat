import { database } from "./firebase";
import { set, child, ref, get, push, remove } from "firebase/database";

export const createMessageApi = (chatId, message) => {
  return push(child(ref(database), `messages/${chatId}`), message);
};

export const getMessagesApi = () => {
	return get(child(ref(database), "messages"));
};
