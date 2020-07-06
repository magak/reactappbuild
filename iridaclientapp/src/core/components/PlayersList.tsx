import React from 'react';
import { List, ListItem } from '@material-ui/core';

import PlayerCard from './PlayerCard';
import SearchTextBox from './SearchTextBox';

export default function PlayersList() {
    return (
        <List>
            {/* <ListItem>
                    <Box>
                      <TextField color="secondary"
                          // className={classes.textField}
                          id="outlined-multiline-static"
                          label="JSON"
                          defaultValue="Default Value"
                          variant="outlined"
                          fullWidth={true}
                      />
                    </Box>
                  </ListItem> */}
            <ListItem>
                <SearchTextBox/>
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
            <ListItem>
                <PlayerCard/>
            </ListItem>
        </List>
    );
}