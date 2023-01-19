import React, { useState, useEffect } from 'react';
import '../../../Styles/Login.css';
import PreNavbar from '../../GlobalComponent/PreNavbar';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import Alert from '@mui/material/Alert';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  TextField,
} from '@mui/material';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, SetValue] = useState('');

  const PostData = async (e) => {
    e.preventDefault();

    if (email === 'admin' && password === '123') {
      SetValue('true');
      navigate('/adminHome')
    } else {
      SetValue('false');
    }
  };

  return (
    <div className='pre'>
      <div>
        <PreNavbar buttons={true} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className='Loginform'
      >
        {value === 'true' && (
          <>
            <Alert severity='success'>Login Sucessfull</Alert>
          </>
        )}
        {value === 'false' && (
          <>
            <Alert severity='error'>Wrong Credentials</Alert>
          </>
        )}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>Admin Login</h2>
          </div>
          <br />
          <TextField
            required
            id='outlined-required'
            label='Email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
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
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
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
          <div className='button'>
            <Button
              onClick={PostData}
              endIcon={<LoginIcon />}
              style={{
                color: ' white',
                borderColor: ' #eb2872',
                backgroundColor: '#eb2872',
                marginTop: '30px',
              }}
              variant='contained'
            >
              Sign In
            </Button>
          </div>{' '}
          <br />
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;
