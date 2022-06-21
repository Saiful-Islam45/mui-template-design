import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Add() {
    return (
        <Tooltip title="Add Post" sx={{position:'fixed', bottom:30, left:{xs: "calc(50% - 25px)", sm: 30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}