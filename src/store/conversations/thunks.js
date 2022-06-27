import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  createConversationStart,
  createConversationSuccess,
  createConversationError,
	removeConversationStart,
	removeConversationSuccess,
	removeConversationError
} from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
  const conversations = [];

  try {
    dispatch(getConversationsStart);
    const snapshot = await api.getConversationsApi();
		console.log("snapshot>>>",snapshot);
    snapshot.forEach((snap) => {
      conversations.push(snap.val());
			console.log("snapVal>>>>", snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const createConversation = (conversation) => async (dispatch, _, api) => {
  try {
    dispatch(createConversationStart);
    await api.createConversationApi(conversation);
    dispatch(createConversationSuccess(conversation));
  } catch (e) {
    dispatch(createConversationError(e));
  }
};


export const deleteConversation = (chatId) => async (dispatch, _, api) => {
  try {
    dispatch(removeConversationStart);
    await api.removeConversationApi(chatId);
    dispatch(removeConversationSuccess(chatId));
  } catch (e) {
    dispatch(removeConversationError(e));
  }
};
