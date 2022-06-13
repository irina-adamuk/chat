import * as React from "react";
import {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


import { useSelector, useDispatch } from "react-redux";
import {createConversation} from "../../store/conversations";



export default function CreateChatBtn() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const conversations = useSelector((state) => state.conversations.conversations);
  const dispatch = useDispatch();

  const createConversationByName = () => {
    const isValidName =!conversations.includes(inputValue);
    if (!!inputValue && isValidName) {
        dispatch(createConversation(inputValue));
    } else {
        alert("Не валидное название чата!")
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    createConversationByName();

  };
  const handleChangeInput = (event) => {
    const value = event.target.value;

    if (!!value) {
        setInputValue(value);
  }

}

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Создать чат
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Создание чата</DialogTitle>
        <DialogContent>
          <DialogContentText>
            пожалуйста введите название чата
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название чата"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleClose}>Создать</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
