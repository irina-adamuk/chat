import Img from "../../assets/img/chat.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { NavLink } from "react-router-dom";
import "./home-page.scss";

export const HomePage = () => {
  return (
    <div className="home-container">
      <div className="title-wrap">
        <h1 className="title">Welcome to Super Chat!</h1>
      </div>

      <img className="home-image" src={Img} alt="chat" />
      <Stack spacing={3} direction="row">
        <NavLink className="button-link" to="sign-in">
          <Button variant="outlined" startIcon={<HowToRegIcon />}>Sign In</Button>
        </NavLink>
        
        <NavLink className="button-link" to="sign-up">
          <Button variant="contained" endIcon={<AppRegistrationIcon />}>Sign Up</Button>
        </NavLink>
        
      </Stack>
    </div>
  );
};
