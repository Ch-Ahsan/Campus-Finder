import { Divider, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PercentIcon from '@mui/icons-material/Percent';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const UniversityViewCard = ({
  title = 'comsats university Islamabad',
  type = 'Public',
  img,
  id,
  status,
  admission,
  location,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 250,
         height: 400,
        marginBottom: '20px',
        marginLeft: '35px',
        // border: '1px solid #eb2872',
        boxShadow:'2px 2px 2px 2px #d4d6d5'
      }}
    >
      <CardMedia component='img' alt='green iguana' height='140' image={img} />
      <CardContent>
        <Typography  style={{fontSize:'small',padding:'5px'}}>
        <BadgeIcon style={{ color: '#eb2872' }} /> {title}
        </Typography>
        <Divider/>
        <Typography  style={{fontSize:'small',padding:'5px'}}>
        <SchoolIcon style={{ color: '#eb2872' }} /> Status: {status}
        </Typography>
        <Divider/>
        <Typography  style={{fontSize:'small',padding:'5px'}}>
        <LockOpenIcon style={{ color: '#eb2872' }} /> Admission:{admission}
        </Typography>
        <Divider/>
        <Typography  style={{fontSize:'small',padding:'5px'}}>
        <LocationOnIcon style={{ color: '#eb2872' }} /> Location: {location}
        </Typography>
        <Divider/>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          style={{
            borderColor: ' #eb2872',
            backgroundColor: '#eb2872',
            color: 'white',
          }}
          onClick={() => navigate(`/viewUniversity/${id}`)}
        >
          Open
        </Button>
      </CardActions>
    </Card>
  );
};
export default UniversityViewCard;
