import { useState } from "react";
// import validator from "validator";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../api/firebase";



import "./sign-up-form.scss";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState( defaultFormFields);
  const { userName, email, password, confirmPassword} = formFields;
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

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password);
    resetFormFields();
    navigate('/sign-in');
  };


  return (
    <div className="form-container">
      <h2 className="title">Registration form</h2>
      <form className="form" onSubmit={handleSubmit}>
				<div className="inputs-box">
          <Input
					  autoComplete='true'
            fullWidth={true}
            placeholder="User name"
            type="text"
            inputProps={{"data-name":"userName"}}
            value={userName}
            onChange={handleChange}
					  color="primary"
          />
          <Input
					  autoComplete='true'
					  fullWidth={true}
            placeholder="Email"
            type="email"
            inputProps={{"data-name":"email"}}
            value={email}
            onChange={handleChange}
          />
          <Input
					  autoComplete='true'
					  fullWidth={true}
            placeholder="Password"
            type="password"
            inputProps={{"data-name":"password"}}
            value={password}
            onChange={handleChange}
          />
          <Input
					  autoComplete='true'
					  fullWidth={true}
            placeholder="Confirm Password"
            type="password"
            inputProps={{"data-name":"confirmPassword"}}
            value={confirmPassword}
            onChange={handleChange}
          />
				</div>
        <Button variant="contained" type="submit" startIcon={<AppRegistrationIcon />}>Sign Up</Button>
        <NavLink to="/sign-in" className='button-link'>
          <p className="notification">If you have an accout SIGN IN</p>
        </NavLink>
      </form>
    </div>
  );
}
