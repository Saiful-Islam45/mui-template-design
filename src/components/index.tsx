import { Stack } from '@mui/material';
import React from 'react';
import MenuBar from './MenuBar';
import Navbar from './Navbar'
import NewsFeed from './NewsFeed';
import RightSide from './RightSide';

export const HomePage =() => {
    return (
        <React.Fragment>
            <Navbar/>
            <Stack direction='row'  justifyContent='space-between' spacing={2}>
                <MenuBar/>
                <NewsFeed/>
                <RightSide/>
            </Stack>
        </React.Fragment>
    )
}