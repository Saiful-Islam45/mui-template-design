import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';

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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          jdhfjh
        </Box>
      </Modal>
    </>
  );
}