import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

import { BackgroundLetterAvatar } from "../../background-letter-avatar";
import styles from "./chat.scss";

const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: rgba(66, 233, 245, 0.9);
  }
  &.Mui-selected:hover {
    background-color: #2k52AE;
  }
`;

export const ChatListItem = ({chatId, chat, selected, deleteConversationByName}) => {

  const message = useSelector((state) => {
    const messages = state.messages.messages[chatId] ?? [];
    console.log("messages:", messages);
    return messages[messages.length - 1];
  });

  return (
    <ListItemStyles
      className={styles.item}
      alignItems="flex-start"
      button={true}
      selected={selected}
    >
      <ListItemAvatar>
        <BackgroundLetterAvatar name={chat.chatName} />
      </ListItemAvatar>
      <ListItemText
        primary={chat.chatName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="primary"
            >
              {message && (<>{message.author}: "</>)}
            </Typography>
              {message && (<>{message.message} "</>)}
          </React.Fragment>
        }
      />
      <div>
        <ListItemText secondary={chat.date} />
      </div>
      <IconButton
        aria-label="delete"
        onClick={(e) => deleteConversationByName(chat.id, e)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemStyles>
  );
};
