import { useState } from "react";
// import validator from "validator";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


import "./sign-in-form.scss";
const defaultFormFields = {
  email: "",
  password: "",
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const field = event.target.getAttribute("data-name");

    if(!!field) {
      setFormFields({
        ...formFields, [field]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    resetFormFields();
    navigate("/chat");
  };

  return (
    <div className="form-container">
      <h2 className="title">Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="box">

          <Input
            autoComplete="true"
            fullWidth={true}
            placeholder="Email"
            type="email"
            inputProps={{"data-name":"email"}}
            value={email}
            onChange={handleChange}
          />
          <Input
            autoComplete="true"
            fullWidth={true}
            placeholder="Password"
            type="password"
            inputProps={{"data-name":"password"}}
            value={password}
            onChange={handleChange}
          />

        </div>
        <NavLink to="/sign-up" className="button-link">
          <p className="notification">If you don`t have an accout SIGN UP</p>
        </NavLink>
        <Button type="submit" variant="outlined" startIcon={<HowToRegIcon />}>Sign In</Button>
      </form>
    </div>
  );
}
