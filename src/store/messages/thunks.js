import { sendMessage } from "./actions";

export const sendMessageWithBot = (chatId, message) => (dispatch, getState) => {
  dispatch(sendMessage(chatId, message));
	if( message.author === "User User" ) {
		setTimeout(()=> {
			dispatch(
				sendMessage(chatId, {
					author: "Bot Robot",
					message: "Hello from Bot Robot thunk",
				})
			);
		}, 500)
	}
};
