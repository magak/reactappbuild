import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

import '../App.css';
import MainAppBar from './MainAppBar'
import Copyright from './Copyright';
import Dashboard from '../core/components/Dashboard';
import DeveloperBoard from './DeveloperBoard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      display:"flex", 
      flexDirection: "column",
      bgcolor: "background.paper"
    },    
    mainPanel: {
      flexGrow:1,
      display:"flex", 
      flexDirection: (wideScrenMode: Boolean) => wideScrenMode ? "row" : "column",
    },
    dashboard: {
      flexGrow: 6
    },
    developerBoard: {
      flexGrow: 1,
    }
  }));

export default function HomePage() {
    const wideScrenMode = useMediaQuery('(min-aspect-ratio: 8/5)');
    const classes = useStyles(wideScrenMode);

    return (
      <Box className={classes.root}>
        <Box p={2}>
          <MainAppBar />
        </Box>
        <Box p={2} className={classes.mainPanel} >
          <Box className={classes.dashboard}>
            <Dashboard />
          </Box>
          <Box p={4} className={classes.developerBoard}>
            <DeveloperBoard />
          </Box>
        </Box>
        <Box p={2}>
          <Copyright />
        </Box>
      </Box>
    );
}