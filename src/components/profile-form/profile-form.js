import * as React from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import "./profile-form.scss";

export const ProfileForm = () => {
  return (
    <form className="profile-form">
      <div className="profile-inputs">
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Name"
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Last name"
        />
        <TextField
          fullWidth={true}
          id="demo-helper-text-aligned"
          label="Username"
        />
        <TextField
          fullWidth={true}
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth={true}
          id="outlined-multiline-static"
          label="A few words about yourself"
          multiline
          rows={2}
        />
      </div>

      <Button variant="contained" size="large" type="submit" endIcon={<SaveIcon />}>
        Save
      </Button>
    </form>
  );
};
