import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListSubheader, Toolbar, Tooltip } from '@material-ui/core';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

import TeamCard from './TeamCard';
import SearchTextBox from './SearchTextBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    gridItem: {
      margin: '20px 4px',
    },
    divider: {
      height: 28,
      margin: 4,
      width: '2px'
    },
  }),
);

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    //<Grid container className={classes.root} spacing={2}>
      //<Grid item xs={12}>
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
        <ListItem>
          <Grid container justify="space-around" >
            {[0, 1, 2].map((value) => (
              <Grid className={classes.gridItem} key={value} item>
                {/* <Paper className={classes.paper} /> */}
                <TeamCard/>
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
      //</Grid>
    //</Grid>
  );
}