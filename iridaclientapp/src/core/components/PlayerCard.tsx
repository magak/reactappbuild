import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Player } from './../../models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 285,
    },
    // media: {
    //   height: 0,
    //   paddingTop: '56.25%', // 16:9
    // },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface PlayerProps {
  Player: Player;
};

export default function PlayerCard(props: PlayerProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P{props.Player.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.Player.name}
        // subheader="September 14, 2016"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Edit />
        </IconButton>
        <IconButton aria-label="share">
          <Delete />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>John Albert Smith:</Typography>
          <Typography paragraph>
            Rating: 7.5
          </Typography>
          <Typography paragraph>
            Total Matches count: 15
          </Typography>
          <Typography paragraph>
            Win: 10
          </Typography>
          <Typography>
            Lost: 5
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
