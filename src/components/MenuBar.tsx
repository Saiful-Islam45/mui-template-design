import { Box } from '@mui/material';
import React from 'react';

export const MenuBar =() => {
    return (
        <Box 
            flex={1}
            bgcolor='skyblue'
            p={2}
            sx={{display:{xs:'none', sm:'block'}}}
        >
            <div>Menubar</div>
        </Box>
    )
}
export default MenuBar;