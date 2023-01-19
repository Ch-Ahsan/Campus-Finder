import { Button, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../GlobalComponent/Footer';
import AdminNavbar from '../components/navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';

const ViewEvents = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  console.log(rows);

  const callHomePage = () => {
    axios.get('/getEvents').then((res) => {
      console.log(res);
      setRows(res.data.data);
    });
  };
  const DeleteEvent = (id) => {
    axios.post(`/deleteEvent/${id}`).then((res) => {
      window.alert('event has been deleted');
      callHomePage();
    });
  };

  React.useEffect(() => {
    callHomePage();
  }, []);

  const EditEvent = (id) => {
    navigate(`/editEvents/${id}`);
  };

  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent={'center'}
        alignItems='center'
      >
        <Grid item>
          <Heading text='View Events' />
        </Grid>
        <Grid item style={{ width: '1200px', padding: '30px' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: '#eb2872' }}>
                    Name
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{ backgroundColor: '#eb2872' }}
                  >
                    Organizer
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{ backgroundColor: '#eb2872' }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{ backgroundColor: '#eb2872' }}
                  >
                    Link
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{ backgroundColor: '#eb2872' }}
                  >
                    Location
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{ backgroundColor: '#eb2872' }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.organizer}</TableCell>
                    <TableCell align='right'>{row.description}</TableCell>
                    <TableCell align='right'>{row.link}</TableCell>
                    <TableCell align='right'>{row.address}</TableCell>
                    <TableCell align='right'>
                      <Button
                        variant='contained'
                        onClick={() => EditEvent(row?._id)}
                        style={{
                          backgroundColor: '#eb2872',
                          color: 'white',
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        onClick={() => DeleteEvent(row?._id)}
                        style={{
                          backgroundColor: '#eb2872',
                          color: 'white',
                          marginLeft: '10px',
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ViewEvents;
