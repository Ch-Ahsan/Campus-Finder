import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import data from '../../Data/data.json';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import Navbar from '../GlobalComponent/Navbar.jsx';
import Select from '@mui/material/Select';
import Slider from '../GlobalComponent/Slider';
import SendIcon from '@mui/icons-material/Send';
import Header from '../GlobalComponent/Heading';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Footer from '../GlobalComponent/Footer';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../GlobalComponent/paymentForm';

const PUBLIC_KEY =
  'pk_test_51L32mVKjJZwCXRHyrAD7RXj1Eg48q2afWX3DMk4nupUE7o8OogvwjmQQSqpv7zOwbgK8gzRdUnM5gYLoyuI2Ctlx00L1z2eYhT';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

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

const useStyles = makeStyles((theme) => ({
  TextFeilds: {
    '& p': {
      color: 'white',
    },
  },
}));
const Background1="https://www.99images.com/download-image/920968/1920x1080"
const Background='https://c0.wallpaperflare.com/preview/663/817/172/equipment-illustration-letter-message.jpg'
const HomePage = () => {
  const classes = useStyles();
  let totalPrice = 1500;
  const navigate = useNavigate();

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
  const [disciplines, setDesciplines] = React.useState([]);
  const [uniqueTitle, setUniqueTitle] = React.useState([]);
  const [admissionStatus, setAdmissionStatus] = React.useState('');
  const [ranking, setRanking] = React.useState();
  const [status, setStatus] = React.useState();
  const [merit, setMerit] = React.useState('');
  const[loading,setLoading]=React.useState(false)
  const [moduleData, setModuleData] = React.useState({
    uniName: '',
    username: '',
    email: '',
    password: '',
  });
  console.log(uniqueTitle);
  console.log(uniData);

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

  useEffect(() => {
    CallHomePage();
    fetchDesipline();
  }, []);

  const postData = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(maximum, minimum);

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
      if(res){
        setLoading(false)
      }
      navigate('/filteredUniversities', { state: res.data.data });
    });
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>
        <Slider start={data.banner.start} />
      </Grid>
      <Header text='Finds Best Matches For You'  />
    
      <Grid
        item
        container
        justifyContent={'center'}
        direction='row'
        style={{  width: '100%', height: '100%', }}
      >
        
        <Grid
          justifyContent={'center'}
          direction='row'
          style={{
            // margin: '15px',
            // marginRight: '15px',
            
            width:'100%',
            // background: "linear-gradient(#f5f5f5, #f7b0d6)",
            backgroundImage: `url(${Background})`,
            // boxShadow: '6px 6px 8px 8px rgb(68, 67, 67)',
          }}
        >
          {/* <h1
            style={{ fontFamily: 'Serif', color: 'black', marginLeft: '55vh' }}
          >
            Finds Best Matches For You
          </h1> */}
          <Grid
            item
            container
            direction={'row'}
            alignItems='center'
            justifyContent={'center'}
            style={{ padding: '35px' }}
          >
            <Grid item style={{ marginBottom: '15px',marginLeft:'140px' }} width='42%'>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select Discipline</InputLabel>
              <Select
                inputProps={{ 'aria-label': 'Without label' }}
                MenuProps={MenuProps}
                label='Age'
                labelColor='white'
                value={discipline}
                onChange={(e) => setDescipline(e.target.value)}
                style={{
                  width: '68vh',
                  borderColor: '#eb2872',
                  color: 'white',
                  height:'8vh'
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
            <Grid
              item
              container
              justifyContent={'center'}
              direction='row'
              alignItems={'center'}
              style={{ marginBottom: '15px',marginLeft:'100px' }}
            >
              <Grid item container width='42%'>
                <Grid>
                <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Admission Status</InputLabel>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={MenuProps}
                    label='Age'
                    labelColor='black'
                    value={admissionStatus}
                    onChange={(e) => setAdmissionStatus(e.target.value)}
                    style={{
                      width: '68vh',
                      borderColor: '#eb2872',
                      color: 'black',
                      height:'8vh'
                    }}
                  >
                    <MenuItem value='open'>open</MenuItem>
                    <MenuItem value='closed'>closed</MenuItem>
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              direction='row'
              alignItems={'center'}
              style={{ marginBottom: '15px',marginLeft:'100px' }}
            >
              <Grid item container justifyContent={'space-between'} width='42%'>
                <Grid>
                <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Ranking</InputLabel>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={MenuProps}
                    label='Age'
                    labelColor='black'
                    value={ranking}
                    onChange={(e) => setRanking(e.target.value)}
                    style={{
                      width: '68vh',
                      borderColor: '#eb2872',
                      color: 'black',
                      height:'8vh'
                    }}
                  >
                    <MenuItem value={10}>Top 50</MenuItem>
                    <MenuItem value={100}>Top 100</MenuItem>
                    <MenuItem value={200}>Top 200</MenuItem>
                    <MenuItem value={300}>Top 300</MenuItem>
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              direction='row'
              alignItems={'center'}
              style={{ marginBottom: '15px',marginLeft:'100px' }}
            >
              <Grid item container justifyContent={'space-between'} width='42%'>
                <Grid>
                <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Status</InputLabel>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={MenuProps}
                    label='Age'
                    labelColor='black'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{
                      width: '68vh',
                      borderColor: '#eb2872',
                      color: 'black',
                      height:'8vh'
                    }}
                  >
                    <MenuItem value={'public'}>Public</MenuItem>
                    <MenuItem value={'private'}>Private</MenuItem>
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              direction='row'
              alignItems={'center'}
              style={{ marginBottom: '15px',marginLeft:'100px' }}
            >
              <Grid item container justifyContent={'space-between'} width='42%'>
                <Grid style={{ width: '87%' }}>
                  <TextField
                    type='Number'
                    variant='outlined'
                    size='small'
                    error={error6}
                    fullWidth
                    value={merit}
                    helperText={
                      errorMessage6 ? errorMessage6 : 'Eligibility merit'
                    }
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
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              direction='row'
              alignItems={'center'}
              style={{ marginBottom: '15px',marginLeft:'100px' }}
            >
              <Grid item container width='42%'>
                <Grid>
                  <TextField
                    variant='outlined'
                    size='small'
                    error={error4}
                    style={{ width: '31vh', marginRight: '55px' }}
                    helperText={errorMessage4 ? errorMessage4 : 'Maximum Fees'}
                    placeholder='Maximum'
                    onChange={handleChange4}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant='outlined'
                    size='small'
                    error={error5}
                    style={{ width: '29vh' }}
                    helperText={errorMessage5 ? errorMessage5 : 'Minimum Fees'}
                    placeholder='Minimum'
                    onChange={handleChange5}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container alignItems='center' justifyContent='center'>
              {discipline === 'Medical' && (
                <Grid item>
                  <TextField
                    variant='outlined'
                    size='small'
                    style={{ width: '600px' }}
                    error={error5}
                    helperText={errorMessage5 ? errorMessage5 : 'MCAT MARKS'}
                    placeholder='Enter MCAT Marks'
                    // onChange={handleChange9}
                  />
                </Grid>
              )}
            </Grid>
            <Grid
              direction={'column'}
              justifyContent={'center'}
              container
              alignItems='center'
              item
              width='42%'
              style={{marginLeft:'143px'}}
            >
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
                  width: '68vh',
                  marginRight: '98px',
                  borderColor: '#eb2872',
                  color: 'black',
                  height:'8vh'
                }}
              >
                {cityData?.map((x, index) => (
                  <MenuItem key={index} value={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>  

              <Button
                style={{
                  color: ' white',
                  borderColor: ' #eb2872',
                  backgroundColor: '#eb2872',
                  marginRight: '126px',
                  marginTop: '10px',
                }}
                variant='contained'
                endIcon={loading?<CircularProgress size={20} />:<LocationSearchingIcon />}
                onClick={postData}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Header text='Pay for University Membership' />
      <Grid item container direction='row' justifyContent='space-between'>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          style={{ padding: '10vh', backgroundImage: `url(${Background1})` }}
        >
          <Grid item style={{ width: '40%' }}>
            <Typography>
              Campus finder allows universities to buy Managment Tool so that
              they can update thier university details about admissions and
              events been occurred. it helps universities to become prominent in
              market and student should consider them Campus finder allows
              universities to buy Managment Tool so that they can update thier
              university details about admissions and events been occurred. it
              helps universities to become prominent in market and student
              should consider them. if your univesity is not resgistered yet
              email us at ahsan.akram@gmail.com
            </Typography>
          </Grid>
          <Grid item container direction='column' style={{ width: '40%' }}>
          <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select Discipline</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              MenuProps={MenuProps}
              label='university'
              fullWidth
              onChange={(e) =>
                setModuleData({ ...moduleData, uniName: e.target.value })
              }
              style={{
                width: '68vh',
                borderColor: '#eb2872',
                color: 'black',
                marginBottom: '10px',
              }}
            >
              {uniqueTitle?.map((x) => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
            </Select>
            </FormControl>  

            <TextField
              variant='outlined'
              size='small'
              fullWidth
              id='outlined-username-isnput'
              label='username'
              type='text'
              style={{ marginBottom: '10px', width: '68vh' }}
              onChange={(e) =>
                setModuleData({ ...moduleData, username: e.target.value })
              }
            />

            <TextField
              variant='outlined'
              size='small'
              id='outlined-email-input'
              label='Email'
              type='text'
              fullWidth
              style={{ marginBottom: '10px', width: '68vh' }}
              onChange={(e) =>
                setModuleData({ ...moduleData, email: e.target.value })
              }
            />

            <TextField
              variant='outlined'
              size='small'
              id='outlined-passsword-input'
              label='Password'
              type='password'
              fullWidth
              style={{ marginBottom: '10px', width: '68vh' }}
              onChange={(e) =>
                setModuleData({ ...moduleData, password: e.target.value })
              }
            />
            <Elements stripe={stripeTestPromise}>
              <PaymentForm data={moduleData} payment={parseFloat(totalPrice)} />
            </Elements>
          </Grid>
        </Grid>
        {/* <Grid
          width='50%'
          item
          style={{ border: '2px solid red', padding: '30vh' }}
        ></Grid> */}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default HomePage;
