import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
	createMessageStart,
	createMessageSuccess,
	createMessageError,
	removeMessageStart,
	removeMessageSuccess,
	removeMessageError
} from "./actions";
import { nanoid } from "nanoid";
import { format } from "date-fns";

export const sendMessageWithBot = (chatId, message) => (dispatch, getState) => {
  dispatch(createMessage(chatId, message));
  if (message.author === "User User") {
    setTimeout(() => {
      dispatch(
        createMessage(chatId, {
          author: "Bot Robot",
          message: "Hello from Bot Robot thunk",
		  id: nanoid(5),
          date: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
        })
      );
    }, 500);
  }
};

export const getMessages = () => async (dispatch, _, api) => {
	const messages = {};
	try {
		dispatch(getMessagesStart());
		const snapshot = await api.getMessagesApi();
		snapshot.forEach(snap => {
			messages[snap.key] = Object.values(snap.val());
			console.log("snap", messages[snap.key] = Object.values(snap.val()))
		});

		dispatch(getMessagesSuccess(messages));

	} catch(e) {
		dispatch(getMessagesError(e));
	}
};

export const createMessage = (chatId, message) => async (dispatch, _, api) => {
	try {
		dispatch(createMessageStart());
		await api.createMessageApi(chatId, message);
		dispatch(createMessageSuccess(chatId, message));
	}catch (e) {
		dispatch(createMessageError(e));
	}
}

export const deleteMessage = (chatId, messageId) => async (dispatch, _, api) => {
	try {
		dispatch(removeMessageStart());
		await api.removeMessageApi(chatId, messageId);
		dispatch(removeMessageSuccess(chatId, messageId));
	}catch (e) {
		dispatch(removeMessageError(e));
	}
}