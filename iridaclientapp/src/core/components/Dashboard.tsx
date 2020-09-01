import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
// import RootRef from '@material-ui/core/RootRef';

import PlayerCard from './PlayerCard';
import PlayersList from './PlayersList';
import PlayersGroupsList from './PlayersGroupsList';

import { Tournament } from './../../models';
import { PlayersListDroppableId } from './../../consts';

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
        players: [{id: 1, name: 'Nigel Martin'}, {id: 2, name: 'Alain Smith'}, 
                  {id: 3, name: 'Maggie Thompson'}, {id: 4, name: 'Robert Wilkins'}
                ],
        playersGroup: [
                { id: 1,
                  players:
                  [{id: 11, name: 'Michael Adams'},
                  {id: 41, name: 'Aaron Brown'},
                  {id: 21, name: 'Kate Wood'}]
                },
                { id: 2,
                  players:
                  [{id: 23, name: 'Mike Tilkovski'}]
                }
              ]
      };
    const classes = useStyles();
    
    const [tournament, setTournament] = React.useState<Tournament>(tournamentInit);

    const handleOnDragEnd = (result: DropResult) => {
      const { destination, source, draggableId } = result
  
      if (!destination) {
        return
      }

      const sourceArray = source.droppableId === PlayersListDroppableId ? tournament.players 
              : tournament.playersGroup.find(t => t.id === Number(source.droppableId))?.players;
      const destinationArray = destination.droppableId === PlayersListDroppableId ? tournament.players
              : tournament.playersGroup.find(t => t.id === Number(destination.droppableId))?.players;

      if(!sourceArray || !destinationArray) {
        return;
      }
      
      const sourceItem = sourceArray[source.index];
      sourceArray.splice(source.index, 1);
      destinationArray.splice(destination.index, 0, sourceItem);
      setTournament(tournament);

      // if (source.droppableId === PlayersListDroppableId && destination.droppableId === PlayersListDroppableId) {
        
        

      //   tournament.players.splice(source.index, 1);
      //   tournament.players.splice(destination.index, 0, sourceItem);
        
      //   setTournament(tournament);
      // }

      // else if (source.droppableId === destination.droppableId) {

      // }
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