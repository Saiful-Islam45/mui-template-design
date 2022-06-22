import { Stack, Box } from '@mui/material';
import React from 'react';
import MenuBar from './MenuBar';
import Navbar from './Navbar'
import NewsFeed from './NewsFeed';
import RightSide from './RightSide';
import Add from './Add';
import { PaletteMode } from '../App';
export interface ITheme {
  mode: PaletteMode;
  setMode: (value: PaletteMode) => void;
}
export const HomePage = (props: ITheme) => {
  const {mode, setMode} = props;
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction='row' justifyContent='space-between' spacing={2}>
        <MenuBar mode={mode} setMode={setMode} />
        <NewsFeed />
        <RightSide />
      </Stack>
      <Add />
    </Box>
  )
}