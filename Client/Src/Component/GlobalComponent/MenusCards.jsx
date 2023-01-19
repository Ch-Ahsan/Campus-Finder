import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MenusCard = ({description,title}) => {
  return (
    <Paper style={{marginRight:'20px',marginBottom:'20px'}}>
      <Grid
        container
        justifyContent={'center'}
        direction='column'
        alignItems={'center'}
        style={{  height: '120px', width: '280px' }}
      >
        {/* <img src={uni} width='200px'/> */}
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          style={{
            height: '60px',
            width: '220px',
            marginTop: '10px',
            backgroundColor: '#eb2872',
            borderRadius: '10px',
          }}
        >
          <Grid item style={{ padding: '7px', borderRadius: '10px' }}>
            <h6 style={{ color: 'white' }}>{title}</h6>
          </Grid>
        </Grid> <br />
        <Grid item>
        <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MenusCard;
