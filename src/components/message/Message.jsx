import React from "react";
import "./message.module.styles.scss";

function Message({message, author}) {
  return (
    <div className="message">
      <div className="message-author">{author}</div>
      <div className="message-text">{message}</div>
    </div>
  );
}
export default Message;
