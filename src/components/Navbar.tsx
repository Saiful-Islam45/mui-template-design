import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import React from 'react';

const StyleToolbar= styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
})

const Search= styled("div")(({theme})=>({
    backgroundColor: 'white'
}))

const Icons= styled(Box)(({theme})=>({
    backgroundColor: 'white'
}))


const Navbar =() => {
    return (
        <AppBar position='sticky'>
           <StyleToolbar>
            <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>Social Connect</Typography>
            <CoPresentIcon sx={{display:{xs:'block', sm:'none'}}}/>
            <Search>Search</Search>
            <Icons></Icons>
           </StyleToolbar>
        </AppBar>
    )
}

export default Navbar;