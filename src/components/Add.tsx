import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Avatar, TextField, Typography } from '@mui/material';
const card2 = require("./../img/card2.jpg");

export default function Add() {
  const [open, setOpen] = React.useState(false);

  const handleClose= () => {
    setOpen(false)
  }
  const handleOpen= () => {
    setOpen(!open)
  }
  return (
    <>
      <Tooltip 
      title="Add Post"
      onClick={handleOpen}
       sx={{ position: 'fixed', bottom: 30, left: { xs: "calc(50% - 25px)", sm: 30 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        height={300}
        width={400}
        p={2}
        borderRadius={30}
        bgcolor='white'
        >
         <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
         <Box sx={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 2}}>
         <TextField
          id="outlined-multiline-static"
          rows={4}
          placeholder="Whats"
        />
            <Avatar
            src={card2}
              sx={{width:30, height: 30}}
            />
            <Typography variant='body2' fontWeight={500}>Saiful Islam</Typography>
         </Box>
        </Box>
      </Modal>
    </>
  );
}