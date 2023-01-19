import { Typography } from '@mui/material';
import react from 'react';
import '../../Styles/Heading.css';
const Heading = ({ text }) => {
  return (
    <div class="head">
      <div></div>
      <Typography
        style={{
          fontWeight: 700,
          fontFamily: 'monospace',
          color:"#eb2872"
        }}
      >
        {text}
      </Typography>
      <div></div>
    </div>
  );
};
export default Heading;
