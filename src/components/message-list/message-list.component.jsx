import Message from "../message/Message";
import './message-list.module.styles.scss';

const MessageList = ({messageList}) => {
	return (
		<div className="messages-container">
			{messageList.map((message) => (
				<Message key={message.id} message={message.text} author={message.author}></Message>
			))}
		</div>
	)
};

export default MessageList
