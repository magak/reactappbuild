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

import PlayerMaster from './dialogs/PlayerMaster';

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

    const [addDialogOpen, setAddDialogOpen] = React.useState(false);
    const handleAddClick = () => {
        setAddDialogOpen(true);
    }

    const handleAddClosedOk = (result: any) => {
        const res = result;
        setAddDialogOpen(false);
        return result;
    }

    return (
        <List>
            <ListSubheader>
                <Paper elevation={1}>
                    <Toolbar>
                        <PlayerMaster dialogOpened={addDialogOpen} closeDialogSave={handleAddClosedOk} />
                        <Tooltip title="Add" aria-label="menu">
                            <IconButton size="small" onClick={handleAddClick}>
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