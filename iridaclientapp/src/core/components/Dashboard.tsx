import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { DragDropContext } from 'react-beautiful-dnd';
// import RootRef from '@material-ui/core/RootRef';

import PlayerCard from './PlayerCard';
import PlayersList from './PlayersList';
import PlayersGroupsList from './PlayersGroupsList';

import { Tournament } from './../../models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootPaper: {         
      height: '100%',
      position: 'relative',
      overflow: 'auto'
    },
    playersPaper: {         
      height: '100%',
      width: '100%',
      position: 'absolute',
      overflow: 'auto'
    },
    teamsPaper: {         
      height: '100%',
      width: '100%',
      position: 'absolute',
      overflow: 'auto'
    },
    rootBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    playersBox: {
      flexGrow: 1,
      position: 'relative',
      margin: theme.spacing(4),
    },
    teamsBox: {
      flexGrow: 2.3,
      position: 'relative',
      margin: theme.spacing(4),
    }
  }));

export default function Dashboard() {
    const tournamentInit: Tournament = 
      {
        players: [{id: 1, name: 'Michael Adams'}, {id: 2, name: 'Tim Collins'}, 
                  {id: 3, name: 'Kate Wood'}, {id: 4, name: 'Aaron Brown'}
                ],
        playersGroup: [
                { id: 1,
                  players:
                  [{index: 1, player: {id: 1, name: 'Michael Adams'}},
                  {index: 2, player: {id: 4, name: 'Aaron Brown'}},
                  {index: 3, player: {id: 3, name: 'Kate Wood'}}]
                },
                { id: 2,
                  players:
                  [{index: 1, player: {id: 1, name: 'Michael Adams'}}]
                }
              ]
      };
    const classes = useStyles();
    
    const [tournament, setTournament] = React.useState<Tournament>(tournamentInit);

    const handleOnDragEnd = () => {

    };

    return (
        <Paper className={classes.rootPaper} elevation={5} >
          <Box className={classes.rootBox}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Box className={classes.playersBox}>
                <Paper className={classes.playersPaper} elevation={3} >
                  <PlayersList Tournament={tournament}/>
                </Paper>
              </Box>
              <Box className={classes.teamsBox}>
                <Paper className={classes.teamsPaper} elevation={3} >
                  <PlayersGroupsList Tournament={tournament}/>
                </Paper>
              </Box>
            </DragDropContext>
          </Box>
        </Paper>
    );
}