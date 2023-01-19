import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Footer from '../GlobalComponent/Footer';
import Navbar from '../GlobalComponent/Navbar';
import axios from 'axios';
import Heading from '../GlobalComponent/Heading';
import moment from 'moment'
const Events = () => {
  const [events, setEvents] = React.useState();

  const getEvents = () => {
    axios.get('/getEvents').then((res) => {
      setEvents(res.data.data);
    });
  };
  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <Grid container justifyContent='center' >
      <Grid item width='100%'>
        <Navbar />
      </Grid>
    
      {events?.map((x) => (
        <Paper
          style={{
            width: '80%',
            boxShadow: '6px 6px 6px 6px #f5c6cc ',
            height: '350px',
            marginBottom:"30px",
            
            marginTop:'40px'
          }}
        >
          <Grid container>
            <Grid item>
              <img src={`/Upload/${x?.logo}`} width='300' height={'350'} />
            </Grid>
            <Grid
              item
              container
              direction='column'
              width='69%'
              style={{ padding: '5px' }}
            >
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872', marginRight: '25px' }}>
                    Name
                  </span>
                  {x?.name}
                </Typography>
              </Grid>
              <Divider />
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872', marginRight: '25px' }}>Organizer</span>
                  {x?.organizer}
                </Typography>
              </Grid>
              <Divider />
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872', marginRight: '25px' }}>Description</span>{x?.description}
                </Typography>
              </Grid>
              <Divider />
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872', marginRight: '25px' }}>Start Date</span>{moment(x?.startDate).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
              </Grid>
              <Divider />
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872', marginRight: '25px' }}>End Date</span>{moment(x?.endDate).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
              </Grid>
              <Divider />
              <Grid item style={{ padding: '15px' }}>
                <Typography>
                  <span style={{ color: '#eb2872' , marginRight: '25px'}}>Link</span>{x?.link}
                </Typography>
              </Grid>
              <Divider />
            </Grid>
          </Grid>
        </Paper>
        
      ))}

      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Events;
