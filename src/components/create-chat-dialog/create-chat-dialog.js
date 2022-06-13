import * as React from "react";
import {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CreateChatBtn() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeInput = (event) => {
    const value = event.target.value;

    if (!!value) {
        setInputValue(value);
  }
  console.log(value);
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
            onChange={handleChangeInput()}
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
