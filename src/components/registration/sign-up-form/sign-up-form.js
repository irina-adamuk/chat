import { useState } from "react";
import validator from "validator";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { NavLink } from "react-router-dom";


import "./sign-up-form.scss";

export const SignUpForm = () => {
  const [register, setRegister] = useState(() => {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
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
    } else if (register.password !== register.password2) {
      alert("Repeated password incorrectly");
    } else if (
      !validator.isStrongPassword(register.password, { minSymbols: 0 })
    ) {
      alert(
        "Password must consist of one lowercase, uppercase letter and number, at least 8 characters"
      );
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
      <h2 className="title">Registration form</h2>
      <form className="form" onSubmit={submitChackin}>
				<div className="inputs-box">
          <Input
					  autoComplete='true'
            fullWidth={true}
            placeholder="Name"
            type="username"
            id="username"
            name="username"
            value={register.usernamr}
            onChange={changeInputRegister}
					  color="primary"
          />
          <Input
					  autoComplete='true'
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
					  autoComplete='true'
					  fullWidth={true}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
          />
          <Input
					  autoComplete='true'
					  fullWidth={true}
            placeholder="Confirm Password"
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={changeInputRegister}
          />
				</div>
        <Button variant="contained" startIcon={<AppRegistrationIcon />}>Sign Up</Button>
        <NavLink to="/sign-in" className='button-link'>
          <p className="notification">If you have an accout SIGN IN</p>
        </NavLink>
      </form>
    </div>
  );
}
