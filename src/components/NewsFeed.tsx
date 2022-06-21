import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const cardImg= require('./../img/profile.jpg');
const card1 = require("./../img/card1.jpg");
const card2 = require("./../img/card2.jpg");
const dataset = [{
    avatarIcon: 'S',
    title: 'Saiful Islam',
    subheader:"September 14, 2016",
    image: cardImg,
    cardContent:' This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},
{
    avatarIcon: 'R',
    title: 'Rajib Khanna',
    subheader:"January 21, 2016",
    image: card2,
    cardContent:' This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
},
{
    avatarIcon: 'M',
    title: 'Mahi Islam',
    subheader:"September 14, 2016",
    image: card1,
    cardContent:' This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
}
]

export const NewsFeed = () => {
  return (
    <Box flex={4} p={2}>
      {
        dataset?.map(post => (
            <Card sx={{marginBottom:2}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {post.avatarIcon}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title={post.title}
            subheader={post.subheader}
            />
            <CardMedia
            component="img"
            height="20%"
            image={post.image}
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                {post.cardContent + ' ' + post.cardContent}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error'/>} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
      </Card>
        ))
      }
    </Box>
  );
};
export default NewsFeed;
