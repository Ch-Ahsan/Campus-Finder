import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/navbar';
import Footer from '../../GlobalComponent/Footer';
import Header from '../components/Heading';
import Table from 'react-bootstrap/Table';
import { Grid, Paper, Typography } from '@mui/material';
import MenusCard from '../components/MenusCard';
import axios from 'axios'
const background='https://img.freepik.com/free-vector/students-celebrating-graduation-campus-park_1262-20687.jpg?w=2000'
const AdminHome = () => {
  const [userData, SetuserData] = useState([]);
  const [date, SetDate] = useState('');
  const[eventCount,setEventCount]=useState()
  const[uniCount,setUniCount]=useState();
  const[total,setTotal]=useState();
  const[pending,setPending]=useState()

  console.log(userData);
  const CallHomePage = async (e) => {
    try {
      const res = await fetch('/AdminDetails', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      SetuserData(data.result);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCounts=()=>{
    axios.get('/TotalUniversity').then((res)=>{
      setUniCount(res.data.uni.length);
      setEventCount(res.data.event.length);

    })

    axios.get('/requestStats').then((res)=>{
      setTotal(res.data.total)
      setPending(res.data.pending)
    })
  }

  useEffect(() => {
    CallHomePage();
    getCounts();

  }, []);
  //  console.log(menuArray);

  const HandleChange = (e) => {
    const date = e.target.value;
    console.log(date);
    SetDate(date);
  };
  const Search = () => {
    const array = userData.filter((obj) => {
      return obj.dates === date;
    });
    console.log(array);
    SetuserData(array);
  };

  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid item container justifyContent='center' mt={5} mb={2}>
        <Typography variant='h4'>Manage Your Campus Finder</Typography>
      </Grid>
      <Paper style={{ width: '100%', backgroundImage: `url(${background})`, }}>
        <Grid
          style={{ height: '400px', padding: '70px' }}
          item
          container
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <MenusCard title={eventCount} description='Total Events Registered' />
          <MenusCard title={uniCount} description='Total University Registered' />
          <MenusCard title={total} description='Total Requests' />
          <MenusCard title={pending} description='Total Pending Requests' />
        </Grid>
      </Paper>
      <Grid item mt={11} style={{ width: '100%' }}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AdminHome;
