import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Avatar, TextField, Typography, Stack, ButtonGroup, Button } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { DateRange, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
const card2 = require("./../img/card2.jpg");

export default function Add() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
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
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={280}
          width={400}
          p={2}
          borderRadius={30}
          bgcolor='white'
        >
          <Typography variant='h6' color='gray' textAlign='center' mb={2}>Create post</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 2 }}>

            <Avatar
              src={card2}
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant='body2' fontWeight={500}>Saiful Islam</Typography>

          </Box>
          <TextField
            id="outlined-multiline-static"
            rows={3}
            multiline
            variant='standard'
            sx={{ width: '100%' }}
            placeholder="Whats on your mind?"
          />
          <Stack direction={'row'} gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width: '100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}