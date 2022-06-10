import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

import BackgroundLetterAvatars from '../../background-letter-avatar/bg-letter-avatar';
import styles from './chat.scss';

const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: rgba(66, 233, 245, 0.9);
  }
  &.Mui-selected:hover {
    background-color: #2k52AE;
  }
`;


export const ChatListItem = ({chat, selected, handleListItemClick}) => {

  return (
    <ListItemStyles
      className={styles.item}
      alignItems="flex-start"
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemAvatar>
        <BackgroundLetterAvatars name={chat.chatName}/>
      </ListItemAvatar>
      <ListItemText
          primary={chat.chatName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="primary"
              >
               {chat.author}: "
              </Typography>  
              {chat.message} "
            </React.Fragment>
          }
        />
      <div>      
        <ListItemText
          secondary={chat.date}
        />
      </div>
    </ListItemStyles>
  );
};
