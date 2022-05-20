import classNames from "classnames";
import Paper from "@mui/material/Paper";

import "./message.scss";
import BackgroundLetterAvatars from "../../background-letter-avatar/bg-letter-avatar";


export const Message = ({ message, author, date }) => {
  return (
    <div 
      className={classNames('messageContainer', 
        author === "User User" && 'currentMessage'
      )}>
      <div className="message-wrapper">
        <BackgroundLetterAvatars name={author} />
        <div className="papper-wrapper">
          <Paper elevation={6} className="message">
            <div className="message-author">{author}</div>
            <div className="message-text">{message}</div>
            <div className="message-date">{date}</div>
          </Paper>
        </div>
      </div>
    </div>
  );
};
