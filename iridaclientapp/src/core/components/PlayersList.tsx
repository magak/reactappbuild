import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListSubheader, Paper, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PlayerCard from './PlayerCard';
import SearchTextBox from './SearchTextBox';

import { Player } from './../../models';

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
    Players: Player[];
};

export default function PlayersList(props: PlayersListProps) {
    const classes = useStyles();

    return (
        <List>
            {/* <ListSubheader>
                <Paper elevation={3}>
                    <Toolbar>
                        <Tooltip title="Add" aria-label="add">
                            <IconButton color="primary" size="small">
                                <AddBoxIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <SearchTextBox/>
                    </Toolbar>
                </Paper>
            </ListSubheader> */}
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
            { props.Players.map((value) => (
                <ListItem>
                    <PlayerCard Player={value}/>
                </ListItem>
            ))}
        </List>
    );
}