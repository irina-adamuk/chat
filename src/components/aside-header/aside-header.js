import {useState} from 'react';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import  Drawer  from "@mui/material/Drawer";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { LeftMenu } from './menu';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const AsideHeader = () => {

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
					<>
						<IconButton
            	size="large"
            	edge="start"
            	color="inherit"
            	aria-label="open drawer"
            	sx={{ mr: 2 }}
							onClick={()=>setIsDrawerOpen(true)}
          	>
            	<MenuIcon />
          	</IconButton>
						<Drawer 
							anchor="left"
							open={isDrawerOpen}
							onClose={() => setIsDrawerOpen(false)}
						>
							<Box 
								p={2}
								width='250px'
								textAlign='center'
      					role="presentation"
							>
								<div>
									<Avatar
        						alt="Андрей Козлов"
        						src="/static/images/avatar/1.jpg"
        						sx={{ width: 56, height: 56 }}
      						/>
									<Typography
										variant='h5' component='div'>
										Андрей Козлов
									</Typography>
									<Typography
										variant='h6' component='div'>
										+7 953 586 5669
									</Typography>
								</div>
								<Divider   />
								<LeftMenu/>
							</Box>
						</Drawer>
					</>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Super Chat
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
