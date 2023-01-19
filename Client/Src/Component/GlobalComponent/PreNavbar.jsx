import React from 'react';
import '../../Styles/Prenav.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const PreNavbar = ({buttons}) => {

  const navigate=useNavigate()
  return (
    <div className='preNav'>
      <div>
      <Button onClick={()=>navigate('/')}  style={{fontWeight:'bold',color:'white',borderColor:'white',border:'none'}}  variant="outlined"> 
         Welcome To Campus Finder Portal
        </Button>
        
      </div>
   
    </div>
  );
};
export default PreNavbar;
