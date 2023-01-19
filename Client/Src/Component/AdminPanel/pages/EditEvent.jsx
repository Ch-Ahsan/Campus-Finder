import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import React from 'react';
import axios from 'axios';
import Footer from '../../GlobalComponent/Footer';
import Heading from '../components/Heading';
import AdminNavbar from '../components/navbar';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LinkIcon from '@mui/icons-material/Link';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useParams } from 'react-router-dom';

const EditEvents = () => {
  const { id } = useParams();
  const [image, setImage] = React.useState('');
  const [events, setEvents] = React.useState({
    name: '',
    organizer: '',
    description: '',
    link: '',
    startDate: '',
    endDate: '',
    location: '',
    logo: '',
  });
  console.log(events, 'sad');

  React.useEffect(() => {
    getEvent();
  }, []);

  const getEvent = () => {
    axios.get(`/getEvent/${id}`).then((res) => {
      res.data.data[0].startDate = res.data.data[0]?.startDate?.slice(0, 16);
      res.data.data[0].endDate = res.data.data[0]?.endDate?.slice(0, 16);
      setEvents(res.data.data[0]);
    });
  };

  const postData = () => {
    const formData = new FormData();
    formData.append('name', events?.name);
    formData.append('organizer', events?.organizer);
    formData.append('description', events?.description);
    formData.append('link', events?.link);
    formData.append('startDate', events?.startDate);
    formData.append('endData', events?.endDate);
    formData.append('address', events?.address);
    formData.append('logo', events?.logo);
    axios.post(`/editEvents/${id}`, formData).then((res) => {
      window.alert('Events has been added');
    });
  };
  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid
        container
        item
        direction='column'
        justifyContent={'center'}
        alignItems='center'
      >
        <Grid item>
          <Heading text='Edit Events' />
        </Grid>
        <Paper>
          <Grid item style={{ width: '800px', padding: '15px' }}>
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              placeholder='Name'
              style={{ marginBottom: '20px' }}
              value={events?.name}
              onChange={(e) => {
                setEvents({
                  ...events,
                  name: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <BadgeIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              placeholder='Organizer'
              style={{ marginBottom: '20px' }}
              value={events?.organizer}
              onChange={(e) => {
                setEvents({
                  ...events,
                  organizer: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PersonIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              placeholder='Description'
              style={{ marginBottom: '20px' }}
              value={events?.description}
              onChange={(e) => {
                setEvents({
                  ...events,
                  description: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <DescriptionIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              style={{ marginBottom: '20px' }}
              placeholder='Link'
              value={events?.link}
              onChange={(e) => {
                setEvents({
                  ...events,
                  link: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LinkIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='datetime-local'
              style={{ marginBottom: '20px' }}
              fullWidth
              placeholder='Start Date'
              value={events?.startDate}
              onChange={(e) => {
                setEvents({
                  ...events,
                  startDate: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CalendarMonthIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='datetime-local'
              fullWidth
              style={{ marginBottom: '20px' }}
              placeholder='End Date'
              value={events?.endDate}
              onChange={(e) => {
                setEvents({
                  ...events,
                  endDate: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CalendarMonthIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              placeholder='Location'
              style={{ marginBottom: '20px' }}
              value={events?.address}
              onChange={(e) => {
                setEvents({
                  ...events,
                  address: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AddLocationIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              size='small'
              type='file'
              name='logo'
              fullWidth
              style={{ marginBottom: '20px' }}
              onChange={(e) => {
                setEvents({
                  ...events,
                  logo: e.target.files[0],
                });
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AddAPhotoIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {typeof events?.logo === 'string' && (
              <>
                <img
                  src={`/Upload/${events?.logo}`}
                  width='300px'
                  height='200px'
                />{' '}
                <br /> <br /> <br />
              </>
            )}
            {image && <img src={image} width='300px' height='300px' />}
            <br /> <br />
            <Button
              variant='contained'
              onClick={postData}
              style={{
                backgroundColor: '#eb2872',
                color: 'white',
                marginLeft: '10px',
              }}
            >
              Update
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default EditEvents;
