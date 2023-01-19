import React, { useState, useEffect } from 'react';
import '../../Styles/Login.css';
import PreNavbar from '../GlobalComponent/PreNavbar';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import Alert from '@mui/material/Alert';
const pass = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#000000'
  >
    <g fill='none'>
      <path d='M0 0h24v24H0V0z' />
      <path d='M0 0h24v24H0V0z' opacity='.87' />
    </g>
    <path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' />
  </svg>
);
const face = (
  <svg
    width='20'
    height='25'
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    viewBox='0 0 24 24'
  >
    <path d='M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z' />
  </svg>
);
const google = (
  <svg
    fill='#000000'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 30'
    width='24px'
    height='24px'
  >
    {' '}
    <path d='M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z' />
  </svg>
);
const ema = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    class='feather feather-mail'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    <polyline points='22,6 12,13 2,6'></polyline>
  </svg>
);
const username = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#000000'
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
  </svg>
);

const Logins = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PostData = (e) => {
    e.preventDefault();

    if (email === 'admin' && password === '123') {
      window.alert('LoginSuccessfully');
      navigate('/AdminHome');
    } else {
      window.alert('Invalid login');
    }
  };

  return (
    <div className='pre'>
      <div>
        <PreNavbar />
      </div>
      <div></div>

      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        className='Loginform'
      >
        <form>
          <h2>Login</h2>
          <br />
          <br />
          <div class='input-group'>
            <div
              class='input-group-addon'
              style={{
                marginBottom: '10px',
                border: '0.1px solid',
                borderColor: ' rgb(194, 190, 188)',
                padding: '5px',
              }}
            >
              {username}
            </div>
            <input
              style={{
                width: '300px',
                marginBottom: '10px',
                border: '0.1px solid',
                borderColor: ' rgb(194, 190, 188)',
                borderRadius: '6px',
              }}
              type='text'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />{' '}
            <br /> <br />
          </div>
          <div class='input-group'>
            <div
              class='input-group-addon'
              style={{
                marginTop: '10px',
                border: '0.1px solid',
                borderColor: ' rgb(194, 190, 188)',
                padding: '5px',
              }}
            >
              {pass}
            </div>
            <input
              style={{
                width: '300px',
                marginTop: '10px',
                border: '0.1px solid',
                borderColor: ' rgb(194, 190, 188)',
              }}
              type='password'
              name='password'
              value={password}
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />{' '}
            <br /> <br />
          </div>
          <div className='button'>
            <Button
              onClick={PostData}
              style={{
                color: ' #eb2872',
                borderColor: ' #eb2872',
                backgroundColor: 'white',
              }}
              variant='outlined'
            >
              Welcome To Campus Finder Portal
            </Button>
          </div>{' '}
          <br />
        </form>
      </div>
    </div>
  );
};
export default Logins;
