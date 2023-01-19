import React from 'react';
import NavbarCustomer from './NavbarCustomer';
import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './GlobalComponent/Footer';
import { useState, useEffect } from 'react';

const passwo = (
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
const address = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#000000'
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
  </svg>
);
const call = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#000000'
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z' />
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
    <path d='M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
  </svg>
);
const ema = (
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

const Profile = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [contact, SetContact] = useState('');
  const [location, SetLocation] = useState('');

  const PostData = async (e) => {
    e.preventDefault();

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = await fetch('/Profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        location,
        contact,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials');
      console.log('invalid Registration');
    } else {
      window.alert('Updated Successfully');
      console.log('successfull login');
    }
  };

  const CallUpdatedPage = async (e) => {
    try {
      const res = await fetch('/Profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();

      SetName(data.name);
      SetEmail(data.email);
      SetPassword(data.password);
      SetContact(data.contact);

      SetLocation(data.address);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CallUpdatedPage();
  }, []);

  return (
    <div>
      <div>
        <NavbarCustomer name={name} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* <div>
                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }}/>
                         {selectedImage && (
                  <img style={{borderRadius:"320px"}} alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                  )}
                </div> */}
        <div style={{ width: '30%' }}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <div class='input-group'>
                <div
                  class='input-group-addon'
                  style={{
                    border: '0.1px solid',
                    borderColor: ' rgb(194, 190, 188)',
                    padding: '5px',
                  }}
                >
                  {ema}
                </div>
                <Form.Control
                  disabled
                  type='email'
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicusername'>
              <Form.Label>Username</Form.Label>
              <div class='input-group'>
                <div
                  class='input-group-addon'
                  style={{
                    border: '0.1px solid',
                    borderColor: ' rgb(194, 190, 188)',
                    padding: '5px',
                  }}
                >
                  {username}
                </div>
                <Form.Control
                  type='username'
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicuserContact'>
              <Form.Label>Contact</Form.Label>
              <div class='input-group'>
                <div
                  class='input-group-addon'
                  style={{
                    border: '0.1px solid',
                    borderColor: ' rgb(194, 190, 188)',
                    padding: '5px',
                  }}
                >
                  {call}
                </div>
                <Form.Control
                  type='tel'
                  maxlength='11'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                  value={contact}
                  onChange={(e) => SetContact(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicuserAddress'>
              <Form.Label>Address</Form.Label>
              <div class='input-group'>
                <div
                  class='input-group-addon'
                  style={{
                    border: '0.1px solid',
                    borderColor: ' rgb(194, 190, 188)',
                    padding: '5px',
                  }}
                >
                  {address}
                </div>
                <Form.Control
                  type='address'
                  value={location}
                  onChange={(e) => SetLocation(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <div class='input-group'>
                <div
                  class='input-group-addon'
                  style={{
                    border: '0.1px solid',
                    borderColor: ' rgb(194, 190, 188)',
                    padding: '5px',
                  }}
                >
                  {passwo}
                </div>
                <Form.Control
                  type='password'
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </div>
            </Form.Group>

            <Button
              onClick={PostData}
              style={{
                backgroundColor: 'green',
                borderColor: 'green',
                padding: '10px',
                marginLeft: '7vmax',
              }}
              variant='primary'
            >
              {' '}
              <a
                style={{ textDecoration: 'none', color: 'white' }}
                href='/Profile'
              >
                Update
              </a>{' '}
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
