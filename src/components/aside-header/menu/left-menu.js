import * as React from "react";


import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SummarizeIcon from '@mui/icons-material/Summarize';


export const LeftMenu = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <HomeIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <TableChartIcon color="primary" />
        </ListItemIcon>
        <ListItemText>Posts</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <MailOutlineIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Messages</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PeopleIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Friends</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <EventIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Events</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <VideoCameraBackIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Videos</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PhotoSizeSelectActualIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Photos</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SummarizeIcon color="primary"/>
        </ListItemIcon>
        <ListItemText>Files</ListItemText>
      </MenuItem>
    </MenuList>
  );
}