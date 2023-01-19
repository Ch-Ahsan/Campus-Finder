import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@material-ui/core';

const AddScholarship = ({
  open,
  handleClose,
  handleUpdate,
  initial,
  dialogtitle
}) => {
  const [roundsData, setRoundsData] = useState();
 console.log(initial)
  useEffect(() => {
    if (!initial) return;
    setRoundsData(initial);
  }, [initial]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='rounds-dialog'
      maxWidth={'sm'}
      fullWidth
    >
      <DialogTitle id='topic-dialog'>{dialogtitle}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='text'
          fullWidth
          value={roundsData?.title}
          onChange={(e) => {
            setRoundsData({ ...roundsData, title: e.target.value });
          }}
        />
        <TextareaAutosize
          aria-label='minimum height'
          minRows={8}
          placeholder='Enter Scholarship Details'
          style={{ width: 550 }}
          value={roundsData?.description}
          onChange={(e)=>{
            setRoundsData({ ...roundsData, description: e.target.value });
          }}
        
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={() => handleUpdate(roundsData)}
          color='primary'
          variant='contained'
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScholarship;
