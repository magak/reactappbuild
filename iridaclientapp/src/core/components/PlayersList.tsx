import React from 'react';
import { List, ListItem, ListSubheader, Paper, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PlayerCard from './PlayerCard';
import SearchTextBox from './SearchTextBox';

export default function PlayersList() {
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
                        <SearchTextBox/>
                        <Tooltip title="Menu" aria-label="menu">
                            <IconButton size="small">
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Paper>
            </ListSubheader>
            <ListItem>
                <PlayerCard/>
            </ListItem>
            <ListItem>
                <PlayerCard/>
            </ListItem>
            <ListItem>
                <PlayerCard/>
            </ListItem>
            <ListItem>
                <PlayerCard/>
            </ListItem>
            <ListItem>
                <PlayerCard/>
            </ListItem>
            <ListItem>
                <PlayerCard/>
            </ListItem>
        </List>
    );
}