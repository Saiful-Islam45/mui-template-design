import React from 'react';
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Mail, Notifications } from '@mui/icons-material';
const profileImg = require('../img/profile.jpg')

const StyleToolbar= styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
})

const Search= styled("div")(({theme})=>({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: "0 20px",
    width: '40%'
}))

const Icons= styled(Box)(({theme})=>({
    // backgroundColor: 'white',
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")] :{
        display: 'flex'
    }
}))


const UserBox= styled(Box)(({theme})=>({
    // backgroundColor: 'white',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")] :{
        display: 'none',
    }
}))


const Navbar =() => {
    return (
        <AppBar position='sticky'>
           <StyleToolbar>
            <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>Social Connect</Typography>
            <CoPresentIcon sx={{display:{xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons>
                <Badge badgeContent={9} color='error'>
                    <Mail/>
                </Badge>
                <Badge badgeContent={3} color='error'>
                    <Notifications/>
                </Badge>
                <Avatar sx={{width:30, height:30}} src={profileImg}/>
            </Icons>
            <UserBox>
                <Avatar sx={{width:30, height:30}} src={profileImg}/>
                <Typography variant='h6'>Saiful</Typography>
            </UserBox>
           </StyleToolbar>
        </AppBar>
    )
}

export default Navbar;