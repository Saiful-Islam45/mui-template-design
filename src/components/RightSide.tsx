import { Box } from '@mui/material';
import React from 'react';

const RightSide= () =>{
    return ( 
    <Box 
        flex={2} 
        bgcolor='lightgreen'
        p={2}
        sx={{display:{xs:'none', sm:'block'}}}   
    >
        RightBar
    </Box>
    )
}
export default RightSide;