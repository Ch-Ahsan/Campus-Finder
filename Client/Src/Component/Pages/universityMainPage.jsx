import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../GlobalComponent/Footer';
import Navbar from '../GlobalComponent/Navbar';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

import UniversityViewCard from '../GlobalComponent/UniversityViewCard';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import axios from 'axios';
import { margin } from '@mui/system';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const UniversityMainPage = () => {
  const { state } = useLocation();
  console.log(state);
  const [filteredUniversities, setFilteredUniversities] = React.useState(state);
  const [disciplines, setDesciplines] = React.useState([]);
  const [error4, setError4] = React.useState(false);
  const [errorMessage4, setErrorMessage4] = React.useState('');
  const [error5, setError5] = React.useState(false);
  const [errorMessage5, setErrorMessage5] = React.useState('');
  const [city, setCity] = React.useState('');
  const [error6, setError6] = React.useState(false);
  const [errorMessage6, setErrorMessage6] = React.useState('');
  const [maximum, setMaximum] = React.useState(0);
  const [minimum, setMinimum] = React.useState(0);
  const [discipline, setDescipline] = React.useState('');
  const [uniData, setUniData] = React.useState([]);
  const [cityData, setCityData] = React.useState([]);
  const [uniqueTitle, setUniqueTitle] = React.useState([]);
  const [admissionStatus, setAdmissionStatus] = React.useState('');
  const [ranking, setRanking] = React.useState();
  const [status, setStatus] = React.useState();
  const [merit, setMerit] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange4 = (e) => {
    if (e.target.value < 0) {
      setError4(true);
      setErrorMessage4('value cant be negative');
    } else {
      setError4(false);
      setErrorMessage4('');
      setMaximum(e.target.value);
    }
  };
  const handleChange5 = (e) => {
    if (e.target.value < 0) {
      setError5(true);
      setErrorMessage5('value cant be negative');
    } else {
      setError5(false);
      setErrorMessage5('');
      setMinimum(e.target.value);
    }
  };

  const fetchDesipline = () => {
    axios.get(`/getDiscipline`).then((res) => {
      const unique = [
        ...new Set(res.data.data.map((item) => item?.discipline)),
      ];
      console.log(unique);
      setDesciplines(unique);
    });
  };

  const CallHomePage = async (e) => {
    axios.get(`/getTitles`).then((res) => {
      const unique = [...new Set(res.data.data.map((item) => item?.city))];
      const uniqueTitle = [
        ...new Set(res.data.data.map((item) => item?.title)),
      ];
      console.log(unique);
      setUniData(res.data.data);
      setCityData(unique);
      setUniqueTitle(uniqueTitle);
      console.log();
    });
  };

  React.useEffect(() => {
    CallHomePage();
    fetchDesipline();
  }, []);

  React.useEffect(() => {
    if (search.length > 0) {
      const newPacientes = filteredUniversities.filter((value) =>
        value.title
          .toLowerCase()
          .split(' ')
          .join('')
          .includes(search.toLowerCase())
      );
      setFilteredUniversities(newPacientes);
    } else {
      setFilteredUniversities(state);
    }
  }, [search]);

  const ApplyFilter = () => {
    setLoading(true);
    let update = {
      merit,
      maximum,
      minimum,
      admissionStatus,
      status,
      discipline,
      city,
      ranking,
    };
    console.log(update);
    axios.post('/fetchUniversities', update).then((res) => {
      console.log(res);
      if (res) {
        setLoading(false);
      }
      setFilteredUniversities(res.data.data);
    });
  };

  return (
    <Grid container>
      <Grid item width='100%'>
        <Navbar />
      </Grid>
      <Paper>
        <Grid
          container
          justifyContent={'space-between'}
          width='100%'
          style={{ padding: '40px' }}
        >
          <Grid item>
            <TextField
              variant='outlined'
              size='small'
              type='text'
              name='Search'
              fullWidth
              placeholder='Search'
              style={{
                height: '7vh',
              }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SavedSearchIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={MenuProps}
              label='Age'
              labelColor='black'
              value={discipline}
              onChange={(e) => setDescipline(e.target.value)}
              style={{
                width: '32vh',
                borderColor: '#eb2872',
                color: 'black',
                height: '7vh',
              }}
            >
              {disciplines?.map((x, index) => (
                <MenuItem key={index} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select City</InputLabel>
            <Select
              inputProps={{ 'aria-label': 'Without labeel' }}
              MenuProps={MenuProps}
              label='Age'
              labelColor='black'
              value={city}
              onChange={(e) => {
                console.log(e);
                setCity(e.target.value);
              }}
              style={{
                width: '32vh',
                borderColor: '#eb2872',
                color: 'black',
                height: '7vh',
              }}
            >
              {cityData?.map((x, index) => (
                <MenuItem key={index} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select Ranking</InputLabel>
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={MenuProps}
              label='Age'
              labelColor='black'
              value={ranking}
              onChange={(e) => setRanking(e.target.value)}
              style={{
                width: '32vh',
                borderColor: '#eb2872',
                color: 'black',
                height: '7vh',
              }}
            >
              <MenuItem value={10}>Top 50</MenuItem>
              <MenuItem value={100}>Top 100</MenuItem>
              <MenuItem value={200}>Top 200</MenuItem>
              <MenuItem value={300}>Top 300</MenuItem>
            </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Admissions</InputLabel>
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={MenuProps}
              label='Age'
              labelColor='black'
              value={admissionStatus}
              onChange={(e) => setAdmissionStatus(e.target.value)}
              style={{
                width: '32vh',
                borderColor: '#eb2872',
                color: 'black',
                height: '7vh',
              }}
            >
              <MenuItem value='open'>open</MenuItem>
              <MenuItem value='closed'>closed</MenuItem>
            </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label' style={{marginTop:'17px'}}>Status</InputLabel>
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={MenuProps}
              label='Age'
              labelColor='black'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                width: '41vh',
                borderColor: '#eb2872',
                color: 'black',
                height: '7vh',
                margin: '5px',
                marginTop:'25px'
              }}
            >
              <MenuItem value={'public'}>Public</MenuItem>
              <MenuItem value={'private'}>Private</MenuItem>
            </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              variant='outlined'
              size='small'
              style={{ marginTop: '30px', width: '32vh' }}
              error={error4}
              helperText={errorMessage4 ? errorMessage4 : 'Maximum Fees'}
              placeholder='Maximum'
              onChange={handleChange4}
            />
          </Grid>
          <Grid item>
            <TextField
              variant='outlined'
              size='small'
              style={{ marginTop: '30px', width: '32vh' }}
              error={error5}
              helperText={errorMessage5 ? errorMessage5 : 'Minimum Fees'}
              placeholder='Minimum'
              onChange={handleChange5}
            />
          </Grid>
          <Grid item>
            <TextField
              type='Number'
              variant='outlined'
              size='small'
              error={error6}
              fullWidth
              value={merit}
              style={{ marginTop: '30px', width: '32vh' }}
              helperText={errorMessage6 ? errorMessage6 : 'Eligibility merit'}
              placeholder='Eligibility Merit'
              onChange={(e) => {
                if (e.target.value < 0) {
                  setError6(true);
                  setErrorMessage6('merit cant be negative');
                } else {
                  setError6(false);
                  setErrorMessage6('');
                  setMerit(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={ApplyFilter}
              endIcon={
                loading ? <CircularProgress /> : <LocationSearchingIcon />
              }
              style={{
                color: ' white',
                borderColor: ' #eb2872',
                backgroundColor: '#eb2872',
                marginTop: '30px',
                width: '32vh',
              }}
              variant='contained'
            >
              Apply Filter
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginTop: '30px' }}>
        <Grid
          container
          item
          alignItems='center'
          justifyContent={'center'}
          style={{ padding: '20px' }}
        >
          <Grid container alignItems='center' justifyContent={'center'} item>
            {filteredUniversities.length > 0 &&
              filteredUniversities.map((x) => (
                <UniversityViewCard
                  title={x?.title}
                  type={x?.type}
                  img={`/Upload/${x?.logo}`}
                  id={x?._id}
                  status={x.status===1?"Public":"Private"}
                  admission={x.admission===0?"Open":"Closed"}
                  location={x?.city}
                />
              ))}
          </Grid>
        </Grid>
      </Paper>
      {filteredUniversities.length === 0 && (
        <Typography style={{ color: '#eb2872', marginLeft: '80vh',marginTop:"20px",fontWeight:1000 }}>
          No University Found According to Your filter
        </Typography>
      )}
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default UniversityMainPage;
