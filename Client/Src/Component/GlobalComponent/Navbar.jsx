import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
const pages = ['Home', 'Events'];
const settings = ['Profile', 'Logout'];

const Navbar=({expection})=> {
  const navigate=useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:"#eb2872"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Campus Finder
          </Typography>
          <br />

     
               <Button
               style={{
                 fontWeight: '1000',
                 color: 'white',
                 borderColor: '#eb2872',
                 fontFamily: 'monospace',
                 marginLeft:'420px',
                 fontSize:'large',
                 
               }}
               onClick={()=>navigate(`/`)}
               variant='outlined'
             >
               Home
             </Button>
             <Button
               style={{
                 fontWeight: 'bold',
                 color: 'white',
                 borderColor: '#eb2872',
                 margin:"12px",
                 fontFamily: 'monospace',
                 fontSize:'large'
               }}
               onClick={()=>navigate(`/events`)}
               variant='outlined'
             >
               events
             </Button>
             <Button
               style={{
                 fontWeight: 'bold',
                 color: 'white',
                 borderColor: '#eb2872',
                 margin:"12px",
                 fontFamily: 'monospace',
                 fontSize:'large'
               }}
               onClick={()=>navigate(`/portalLogin`)}
               variant='outlined'
             >
              University Portal Login
             </Button>
             <Button
               style={{
                 fontWeight: 'bold',
                 color: 'white',
                 borderColor: '#eb2872',
                 margin:"12px",
                 fontFamily: 'monospace',
                 fontSize:'large'
               }}
               onClick={()=>navigate(`/adminLogin`)}
               variant='outlined'
             >
              Admin Login
             </Button>
            
            

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
