import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR
} from "./types";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: { chatId, message },
});

export const deleteMessage = (chatId, messageId) => ({
  type: DELETE_MESSAGE,
  payload: { chatId, messageId },
});

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});

export const createMessageStart = () => ({
  type: CREATE_MESSAGE_START,
});

export const createMessageSuccess = (chatId, message) => ({
  type: CREATE_MESSAGE_SUCCESS,
  payload: { chatId, message }
});

export const createMessageError = (error) => ({
  type: CREATE_MESSAGE_ERROR,
  payload: error,
});