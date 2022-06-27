import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import HomeIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../api/firebase";

export const LeftMenu = () => {
  return (
    <MenuList>
      <NavLink to="/">
        <MenuItem>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>
      </NavLink>

      <NavLink to="/gists">
        <MenuItem>
          <ListItemIcon>
            <TableChartIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Gists</ListItemText>
        </MenuItem>
      </NavLink >

      <NavLink to="/chat">
        <MenuItem>
          <ListItemIcon>
            <MailOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
      </NavLink>

      <MenuItem>
        <ListItemIcon>
          <PeopleIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Friends</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <EventIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Events</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <VideoCameraBackIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Videos</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PhotoSizeSelectActualIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Photos</ListItemText>
      </MenuItem>
      <NavLink to="/profile">
      <MenuItem>
        <ListItemIcon>
          <SummarizeIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      </NavLink>

      {/* <NavLink to="/sign-in"> */}
        <MenuItem onClick={() => signOut(auth)}>
          <ListItemIcon>
            <LogoutIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      {/* </NavLink> */}
    </MenuList>
  );
};
