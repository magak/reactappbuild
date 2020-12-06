import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface PlayerMasterProps {
    dialogOpened: boolean;
    closeDialogSave: (result: any) => void;
}

export default function PlayerMaster(props: PlayerMasterProps) {
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    props.closeDialogSave(4);
  };

  return (
    <div>
      <Dialog open={props.dialogOpened} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Player</DialogTitle>
        <DialogContent>
          <DialogContentText>            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Player Name"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}