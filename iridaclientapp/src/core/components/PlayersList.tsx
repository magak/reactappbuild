import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListSubheader, Paper, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import PlayerCard from './PlayerCard';
import SearchTextBox from './SearchTextBox';

import { Tournament } from './../../models';
import { PlayersListDroppableId } from './../../consts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      height: 28,
      margin: 4,
      width: '2px'
    },
  }),
);

interface PlayersListProps {
    Tournament: Tournament;
};

export default function PlayersList(props: PlayersListProps) {
    const classes = useStyles();

    return (
        <List>
            <ListSubheader>
                <Paper elevation={3}>
                    <Toolbar>
                        <Tooltip title="Add" aria-label="menu">
                            <IconButton size="small">
                                <AddBoxIcon />
                            </IconButton>
                        </Tooltip>
                        <Divider className={classes.divider} orientation="vertical" />
                        <SearchTextBox/>
                    </Toolbar>
                </Paper>
            </ListSubheader>

            {/* { props.Players.map((value) => (
                    <ListItem>
                        <PlayerCard Player={value}/>
                    </ListItem>
                ))} */}

            <Droppable droppableId={PlayersListDroppableId}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {props.Tournament.players.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id.toString()}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    >
                                    <ListItem>
                                        <PlayerCard Player={item}/>
                                    </ListItem>
                                </div>                                
                            )}
                        </Draggable>
                    ))}
                    <ListItem>
                        {provided.placeholder}
                    </ListItem>                    
                </div>
                )}
            </Droppable>
        </List>
    );
}