import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import uni from '../../../Images/unis.png';
const MenusCard = ({description,title,}) => {
  return (
    <Paper>
      <Grid
        container
        justifyContent={'center'}
        style={{  height: '180px', width: '220px' }}
      >
        {/* <img src={uni} width='200px'/> */}
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          style={{
            height: '120px',
            width: '170px',
            marginTop: '10px',
            backgroundColor: '#eb2872',
            borderRadius: '10px',
           cursor:'pointer'
          }}
        
        >
          <Grid item style={{ padding: '7px', borderRadius: '10px' }}>
            {title}
          </Grid>
        </Grid>
        <Typography>{description}</Typography>
      </Grid>
    </Paper>
  );
};

export default MenusCard;
