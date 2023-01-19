import { Button, Typography } from '@mui/material';
import React from 'react';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import SchoolIcon from '@mui/icons-material/School';
import Popup from 'reactjs-popup';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#eb2872',
        padding: '5px',
        
      }}
    >
      <Button
      onClick={()=>navigate('/adminHome')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
       <HomeIcon style={{marginRight:"5px",color:"white"}}/> Home
      </Button>
      <Button
         onClick={()=>navigate('/addUniversities')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
      <SchoolIcon style={{marginRight:"5px",color:"white"}}/>  Add University
      </Button>
      <Button
       onClick={()=>navigate('/ViewUniversities')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
        <VisibilityIcon style={{marginRight:"5px",color:"white"}}/> View Universities
      </Button>
      <Button
       onClick={()=>navigate('/addEvent')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
         <EmojiEventsIcon style={{marginRight:"5px",color:"white"}}/> Add Events
      </Button>
      <Button
        onClick={()=>navigate('/viewEvents')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
         <EmojiEventsIcon style={{marginRight:"5px",color:"white"}}/> View Events
      </Button>
      <Button
       onClick={()=>navigate('/ViewRequests')}
        style={{
          color: 'white',
          marginRight:'20px'
        }}
      >
       <VisibilityIcon style={{marginRight:"5px",color:"white"}}/> View Requests
      </Button>

      <div className='chats'>
         
        <Button variant="contained" onClick={()=>navigate('/adminLogin')} style={{backgroundColor:'#eb2872',color:'white',marginLeft:"180px"}} >Logout</Button>
        </div>
      {/* <div
       
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }}
      >
        
        <div >
        
            <div
              className='act'
              style={{
                borderRadius:'10px',
                width: '230px',
                height: 'auto',
                 marginTop: '24vmax',
                marginLeft: '2vmax',
                backgroundColor: '#eb2872',
              }}
            >
              <ul className='uls' style={{ listStyle: 'none' }}>
                <li style={{ padding: '14px' }}>
                <HomeIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/adminHome'
                  >
                    Home
                  </a>{' '}
                </li>
                <li style={{ padding: '14px' }}>
                 <SchoolIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/addUniversities'
                  >
                    Add University
                  </a>{' '}
                </li>
                <li style={{ padding: '10px' }}>
                <VisibilityIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/ViewUniversities'
                  >
                   View Universities
                  </a>{' '}
                </li>
                <li style={{ padding: '14px' }}>
                <EmojiEventsIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/addEvent'
                  >
                    {' '}
                   Add Events
                  </a>{' '}
                </li>
                <li style={{ padding: '14px' }}>
                <EmojiEventsIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/viewEvents'
                  >
                    View Events
                  </a>{' '}
                </li>
                <li style={{ padding: '14px' }}>
                <VisibilityIcon style={{marginRight:"5px",color:"white"}}/>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontSize: 'large',
                      cursor: 'pointer',
                    }}
                    href='/ViewRequests'
                  >
                    View Requests
                  </a>{' '}
                </li>
              </ul>
            </div>
         
        </div>
        <div>
         <Typography variant="h5" style={{color:'white'}}>Admin Panel</Typography>
        </div>
        
      </div> */}
    </div>
  );
};

export default AdminNavbar;
