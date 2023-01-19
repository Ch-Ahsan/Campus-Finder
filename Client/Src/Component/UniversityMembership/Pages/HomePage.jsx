import { Grid, IconButton } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../../GlobalComponent/Footer';
import MenusCard from '../components/MenusCard';
import SchoolIcon from '@mui/icons-material/School';
import PreviewIcon from '@mui/icons-material/Preview';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
const HomePagePortal = () => {
  const navigate=useNavigate()
  const ViewEvents=()=>{

  }

  const AddEvents=()=>{
   navigate('/AddEventPortal')
  }
  return (
    <Grid container>
      <Grid item width='100%'>
        <Navbar />
      </Grid>
      <Grid
        container
        justifyContent={'space-between'}
        direction='row'
        style={{padding:'75px'}}
        alignItems='center'
       
       
      >
        <Grid item >
          <MenusCard
            description={'Enter University Data'}
            title={
              <SchoolIcon
                style={{ color: 'white', height: '100px', width: '100px' }}
              />
            }
          />
          </Grid>
          <Grid item >
          <MenusCard
            description={'View University Data'}
            title={
              <PreviewIcon
                style={{ color: 'white', height: '100px', width: '100px' }}
              />
            }
          />
          </Grid>
          <Grid item >
          <MenusCard
            description={'Add Events'}
            title={
              <IconButton onClick={()=>AddEvents()}>
              <EmojiEventsIcon
                style={{ color: 'white', height: '100px', width: '100px' }}
              />
               </IconButton>
            }
          />
        </Grid>
        <Grid item >
          <MenusCard
            description={'View Events'}
           
            title={
              <IconButton onClick={()=>ViewEvents()}>
              <PreviewIcon
                style={{ color: 'white', height: '100px', width: '100px' }}
              />
              </IconButton>
            }
          />
        </Grid>
      </Grid>
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePagePortal;
