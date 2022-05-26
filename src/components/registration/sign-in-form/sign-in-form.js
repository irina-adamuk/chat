import { useState } from "react";
import validator from "validator";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from "react-router-dom";


import "./sign-in-form.scss";

export const SignInForm = () => {
  const [register, setRegister] = useState(() => {
    return {
      email: "",
      password: "",
    };
  });

  const changeInputRegister = (event) => {
    event.persist();
    setRegister((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitChackin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert("You did not enter email");
    } else {
      // axios.post(DOMEN_SERVER + "/auth/registration/", {
      //     username: register.username,
      //     email: register.email,
      //     password: register.password,
      // }).then(res => {
      //     if (res.data === true) {
      //         window.location.href = DOMEN_SITE + "/auth"
      //     } else {
      //         alert("There is already a user with this email")
      //     }
      // }).catch(() => {
      //     alert("An error occurred on the server")
      // })
    }
  };

  return (
    <div className="form-container">
      <h2 className="title">Log In</h2>
      <form className="form" onSubmit={submitChackin}>
        <div className="box">

          <Input
            autoComplete="true"
            fullWidth={true}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            formNoValidate
          />
          <Input
            autoComplete="true"
            fullWidth={true}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
          />

        </div>
        <NavLink to="/sign-up" className="button-link">
          <p className="notification">If you don`t have an accout SIGN UP</p>
        </NavLink>
        <Button variant="outlined" startIcon={<HowToRegIcon />}>Sign In</Button>
      </form>
    </div>
  );
}
