import React from 'react';
import {
  InputLabel,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  FormControl,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Header from '../components/Heading';
import Footer from '../../GlobalComponent/Footer';
import AdminNavbar from '../components/navbar';
import { makeStyles } from '@material-ui/core/styles';
import AddScholarship from '../components/addScholarship';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from 'axios';
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
import ImageIcon from '@mui/icons-material/Image';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const useStyles = makeStyles((theme) => ({
  spacing: {
    padding: '10px',
    width: '400px',
  },
  spacing1: {
    marginLeft: '190px',
  },
}));
const initialData = {
  province: '',
  deadline: '',
  contact: '',
  degree: '',
  discipline: '',
  info: '',
  merit: '',
  ranking: '',
  title: '',
  status: '',
  web: '',
  logo: '',
  city: '',
  admissions: '',
  scholarships: {
    scholar: [],
  },
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#eb2872',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const background =
  'https://img.freepik.com/free-vector/students-celebrating-graduation-campus-park_1262-20687.jpg?w=2000';
const AddUniversity = () => {
  const [Scholarships, setScholarShips] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const classes = useStyles();
  const [universityData, setUniversityData] = React.useState(initialData);
  const [initialScholarships, setInitialScholarships] = React.useState();
  const [image, setImage] = React.useState('');
  const [error, setError] = React.useState(false);
  const [error1, setError1] = React.useState(false);
  const [province, setProvince] = React.useState();
  const [error2, setError2] = React.useState(false);
  const[error3,setError3]=React.useState(false)
  console.log(universityData);
  
  const handleScholarShips = (data) => {
    setUniversityData({
      ...universityData,
      scholarships: {
        scholar: [...universityData?.scholarships?.scholar, data],
      },
    });
    setOpen(false);
  };
  const editScholarships = (data) => {
    setUniversityData({
      ...universityData,
      scholarships: {
        scholar: universityData.scholarships?.scholar.map((x, index) => {
          if (data.id.toString() === x._id.toString()) {
            return { ...x, title: data.title, description: data.description };
          }
          return x;
        }),
      },
    });

    setEditOpen(false);
  };
  const deleteScholarships = (index) => {
    setUniversityData({
      ...universityData,
      scholarships: {
        scholar: universityData.scholarships?.scholar.filter(
          (obj, roundIndex) => {
            return roundIndex !== index;
          }
        ),
      },
    });
  };
  console.log(universityData);

  const postData = async (e) => {
    e.preventDefault();
   const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    
 
    const formData = new FormData();
    console.log(universityData?.scholarships?.scholar);
    formData.append('city', universityData?.city);
    formData.append('title', universityData?.title);
    formData.append('province', universityData?.province);
    formData.append('deadline', universityData?.deadline);
    formData.append('degree', universityData?.degree);
    formData.append('contact', universityData?.contact);
    formData.append('fee', universityData?.fee);
    formData.append('discipline', universityData?.discipline);
    formData.append('info', universityData?.info);
    formData.append('merit', universityData?.merit);
    formData.append('ranking', universityData?.ranking);
    formData.append('status', universityData?.status);
    formData.append('web', universityData?.web);
    formData.append('logo', universityData?.logo);
    formData.append('admissions', universityData?.admissions);
    formData.append(
      'scholarships',
      JSON.stringify(universityData?.scholarships)
    );
    formData.append('address', universityData?.address);
    console.log(formData);

    const res = await fetch('/addUni', {
      method: 'POST',

      body: formData,
    });
    const data = await res.json();

    window.alert('University Added Successfully');
  
  };

  React.useEffect(() => {
    getProvince();
  }, []);

  const getProvince = () => {
    axios.get('/getProvince').then((res) => {
      const unique = [...new Set(res.data.data.map((item) => item?.province))];
      console.log(unique);
      setProvince(unique);
    });
  };

  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid item container justifyContent='center' mt={1} mb={1}>
        <Header text='Enter University Data' />
      </Grid>
      <Grid
        container
        justifyContent={'center'}
        alignItems='center'
        direction='row'
      >
        <Button
          variant='contained'
          style={{
            backgroundColor: '#eb2872',
            color: 'white',
            marginBottom: '20px',
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Scholarships
        </Button>
      </Grid>
      <Paper
        style={{
          width: '100%',
          padding: '35px',
          backgroundImage: `url(${background})`,
        }}
      >
        <Grid
          container
          justifyContent={'center'}
          alignItems='center'
          direction='row'
        >
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.title}
              placeholder='Enter UniversityName'
              onChange={(e) => {
                setUniversityData({ ...universityData, title: e.target.value });
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
          </Grid>
          <Grid item className={classes.spacing}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Type</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={universityData?.status}
                label='Select Type'
                style={{
                  height: '7vh',
                }}
                onChange={(e) => {
                  setUniversityData({
                    ...universityData,
                    status: e.target.value,
                  });
                }}
              >
                <MenuItem value={0}>Public</MenuItem>
                <MenuItem value={1}>Private</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.spacing}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-lasbel'>
                AdmissionStatus
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={universityData?.admissions}
                label='Select Type'
                style={{
                  height: '7vh',
                }}
                onChange={(e) => {
                  setUniversityData({
                    ...universityData,
                    admissions: e.target.value,
                  });
                }}
              >
                <MenuItem value={1}>closed</MenuItem>
                <MenuItem value={0}>open</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.web}
              placeholder='Enter Web'
              onChange={(e) => {
                setUniversityData({ ...universityData, web: e.target.value });
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
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              error={error}
              type={'number'}
              value={universityData?.fee}
              placeholder='Enter fees'
              onChange={(e) => {
                if (e.target.value < 0) {
                  setError(true);
                } else {
                  setUniversityData({ ...universityData, fee: e.target.value });
                  setError(false);
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AttachMoneyIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              error={error1}
              type={'Number'}
              value={universityData?.ranking}
              placeholder='Enter Ranking'
              onChange={(e) => {
                if (e.target.value < 0) {
                  setError1(true);
                } else {
                  setUniversityData({
                    ...universityData,
                    ranking: e.target.value,
                  });
                  setError1(false);
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <StarIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Select Province
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={universityData?.province}
                label='Select Provice'
                style={{
                  height: '7vh',
                }}
                onChange={(e) => {
                  setUniversityData({
                    ...universityData,
                    province: e.target.value,
                  });
                }}
              >
                {province?.map((x) => (
                  <MenuItem value={x}>{x}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              error={error2}
              type='Number'
              value={universityData?.contact}
              placeholder='Enter Contact'
              onChange={(e) => {
                if (e.target.value.length > 11 || e.target.value < 0) {
                  setError2(true);
                  setUniversityData({
                    ...universityData,
                    contact: e.target.value,
                  });
                } else {
                  setUniversityData({
                    ...universityData,
                    contact: e.target.value,
                  });
                  setError2(false);
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CallIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.city}
              placeholder='Enter City'
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  city: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LocationCityIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              placeholder='admission Date'
              type={'date'}
              value={universityData?.deadline}
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  deadline: e.target.value,
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
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.info}
              placeholder='email'
              onChange={(e) => {
               
                setUniversityData({
                  ...universityData,
                  info: e.target.value,
                });
             
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <EmailIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.degree}
              placeholder='Degree'
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  degree: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SchoolIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              value={universityData?.discipline}
              placeholder='Discipline'
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  discipline: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AutoStoriesIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              type='Number'
              fullWidth
              error={error3}
              value={universityData?.merit}
              placeholder='Eligibility Merit'
              onChange={(e) => {
                if(e.target.value<0){
                  setError3(true)
                }else{
                setUniversityData({
                  ...universityData,
                  merit: e.target.value,
                });
                setError3(false)
              }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PercentIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={classes.spacing}>
            <TextField
              variant='outlined'
              size='small'
              type='text'
              fullWidth
              placeholder='Enter Address'
              value={universityData?.address}
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  address: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <HomeIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item style={{ marginRight: '400px' }}>
            <TextField
              variant='outlined'
              size='small'
              type='file'
              name='logo'
              fullWidth
              onChange={(e) => {
                setUniversityData({
                  ...universityData,
                  logo: e.target.files[0],
                });
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <ImageIcon style={{ color: '#eb2872' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <br />
          <Grid item className={classes.spacing}>
            {image && <img src={image} width='300px' height={'100px'} />}
          </Grid>
        </Grid>
        {universityData?.scholarships?.scholar.length > 0 && (
          <Paper style={{ width: '100%', padding: '35px' }}>
            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Title</StyledTableCell>
                      <StyledTableCell align='right'>
                        Description
                      </StyledTableCell>
                      <StyledTableCell align='right'>Actions</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {universityData?.scholarships?.scholar?.map(
                      (row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component='th' scope='row'>
                            {row?.title}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {row?.description}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            <Button
                              variant='contained'
                              style={{
                                backgroundColor: '#eb2872',
                                color: 'white',
                                marginRight: '5px',
                              }}
                              onClick={() => {
                                setInitialScholarships({
                                  title: row?.title,
                                  description: row?.description,
                                  id: row?._id,
                                });
                                setEditOpen(true);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant='contained'
                              style={{
                                backgroundColor: '#eb2872',
                                color: 'white',
                              }}
                              onClick={() => deleteScholarships(index)}
                            >
                              Delete
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Paper>
        )}
        <Grid container justifyContent={'center'} item>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#eb2872',
              color: 'white',
              marginTop: '20px',
            }}
            onClick={postData}
           
          >
            Save
          </Button>
        </Grid>
      </Paper>
      {editOpen && (
        <AddScholarship
          open={editOpen}
          handleClose={() => setEditOpen(false)}
          handleUpdate={editScholarships}
          dialogtitle={'Edit ScholarShip'}
          initial={initialScholarships}
        />
      )}
      {open && (
        <AddScholarship
          open={open}
          handleClose={() => setOpen(false)}
          handleUpdate={handleScholarShips}
          dialogtitle={'Add Scholarships'}
        />
      )}

      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AddUniversity;
