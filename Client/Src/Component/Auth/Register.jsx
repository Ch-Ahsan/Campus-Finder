import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PreNavbar from '../GlobalComponent/PreNavbar';
import '../../Styles/Registration.css';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handlechange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    // alert(`${name} ${value}`);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, repassword, choice } = user;
    console.log(user);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = await fetch('/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        repassword,
        choice,
      }),
    });
    const data = await res.json();
    if (res.status === 422) {
      window.alert('user Already registered');
    } else if (password != repassword) {
      window.alert('Password Doesnt Match');
      navigate('/Registration');
    } else if (!email.match(re)) {
      window.alert('Email must Contain @ && .com');
    } else {
      window.alert('Successfull Regsitration');

      navigate('/login');
    }
  };

  return (
    <div className='prenav'>
      <div>
        <PreNavbar />
      </div>

      <div
        className='registration'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h2>Student Signup</h2>
        <br />
        <TextField
          label='username'
          type='text'
          name='name'
          autoComplete='current-password'
          value={user.name}
          onChange={(e) => handlechange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <PersonIcon style={{ color: '#eb2872' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          label='Email'
          type='text'
          name='email'
          autoComplete='Email'
          value={user.email}
          onChange={(e) => handlechange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <EmailIcon style={{ color: '#eb2872' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          label='Password'
          type='password'
          name='password'
          value={user.password}
          onChange={(e) => handlechange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <LockIcon style={{ color: '#eb2872' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          label='Re-Password'
          type='password'
          name='repassword'
          value={user.repassword}
          onChange={(e) => handlechange(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <LockIcon style={{ color: '#eb2872' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />

        <Button
          onClick={PostData}
          endIcon={<HowToRegIcon />}
          style={{
            color: ' white',
            borderColor: ' #eb2872',
            backgroundColor: '#eb2872',
          }}
          variant='contained'
        >
          Register
        </Button>
      </div>
    </div>
  );
};
export default Register;
