import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { Mail, Notifications } from "@mui/icons-material";
const profileImg = require("../img/profile.jpg");

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "0 20px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Connect
        </Typography>
        <CoPresentIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={9} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick= {() => setIsOpen(!isOpen)} sx={{ width: 30, height: 30, cursor: 'pointer' }} src={profileImg} />
        </Icons>
        <UserBox>
          <Avatar onClick= {() => setIsOpen(!isOpen)} sx={{ width: 30, height: 30, cursor: 'pointer' }} src={profileImg} />
          <Typography variant="h6">Saiful</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
        //   anchorEl={anchorEl}
          open={isOpen}
          onClose={() => setIsOpen(false)}  
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyleToolbar>
    </AppBar>
  );
};

export default Navbar;
