import classNames from "classnames";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";

import "./message.scss";
import {BackgroundLetterAvatar} from "../../background-letter-avatar";


export const Message = ({ message, author, date, chatId, messageId }) => {
  const dispatch = useDispatch();

  return (
    <div 
      className={classNames('messageContainer', 
        author === "User User" && 'currentMessage'
      )}>
      <div className="message-wrapper">
        <BackgroundLetterAvatar name={author} />
        <div className="papper-wrapper">
          <Paper elevation={6} className="message">
            <div>
              <div className="message-author">{author}</div>
              <div className="message-text">{message}</div>
              <div className="message-date">{date}</div>
            </div>
            <IconButton aria-label="delete" onClick={()=> dispatch(deleteMessage(chatId, messageId))}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
};
