import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const UniversityViewCard = ({
  title = 'comsats university Islamabad',
  type = 'Public',
  img,
}) => {
  return (
    <Card
      sx={{ width: 300, height: 300, marginBottom: '20px', marginLeft: '35px',border:'1px solid #eb2872' }}
    >
      <CardMedia component='img' alt='green iguana' height='140' image={img} />
      <CardContent>
        <Typography gutterBottom component='div'>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          style={{
            color: ' white',
            borderColor: ' #eb2872',
            backgroundColor: '#eb2872',
          }}
        >
          Open
        </Button>
      </CardActions>
    </Card>
  );
};
export default UniversityViewCard;
