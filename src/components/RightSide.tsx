import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const card1 = require("./../img/card1.jpg");
const card2 = require("./../img/card2.jpg");
const card3 = require("./../img/profile.jpg");

const RightSide = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant={"h6"} fontWeight={400} color="gray">
          Active Friends
        </Typography>
        <AvatarGroup max={7} sx={{ padding: "0 10px" }}>
          <Avatar alt="Remy Sharp" src={card1} />
          <Avatar alt="Travis Howard" src={card2} />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src={card1} />
          <Avatar alt="Rindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Trevor Henderson" src={card2} />
          <Avatar alt="Dindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Mindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Typography variant={"h6"} fontWeight={400} color="gray" mt={3} mb={3}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card1}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card2}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card1}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card3}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card1}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              height={"100px"}
              width="33%"
              src={card2}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant={"h6"} fontWeight={400} color="gray" mt={3} mb={3}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={card3} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={card2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this after that time…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={card1} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui2"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Andre
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever been there"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default RightSide;
