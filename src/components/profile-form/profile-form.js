import * as React from "react";
import { useState } from "react";
import { updateProfile} from "../../store/profile";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import "./profile-form.scss";

export const ProfileForm = ({
  firstName,
  lastName,
  dateOfBirth,
  userName,
  city,
  description,
}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    userName: "",
    city: "",
    description: "",
    avatarUrl: "https://place-hold.it/300x500/666/fff.png/000",
  });

  const dispatch = useDispatch();

  const handleChangeform = (event) => {
    const field = event.target.getAttribute("data-name");

    if (!!field) {
      setForm({
        ...form,
        [field]: event.target.value,
      });
    }
  };

  return (
    <form className="profile-form">
      <div className="profile-inputs">
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Name"
          value={form.firstName}
          inputProps={{
            "data-name": "firstName",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Last name"
          value={form.lastName}
          inputProps={{
            "data-name": "lastName",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Username"
          value={form.userName}
          inputProps={{
            "data-name": "userName",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="City"
          value={form.city}
          inputProps={{
            "data-name": "city",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Avatar-url"
          value={form.avatarUrl}
          inputProps={{
            "data-name": "avatarUrl",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="date"
          label="Birthday"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={form.dateOfBirth}
          inputProps={{
            "data-name": "dateOfBirth",
          }}
          onChange={handleChangeform}
        />
        <TextField
          fullWidth={true}
          id="outlined-multiline-static"
          label="A few words about yourself"
          multiline
          rows={2}
          value={form.description}
          inputProps={{
            "data-name": "description",
          }}
          onChange={handleChangeform}
        />
      </div>

      <Button
        variant="contained"
        size="large"
        endIcon={<SaveIcon />}
        onClick={()=> dispatch(updateProfile(form))}
      >
        Save
      </Button>
    </form>
  );
};
