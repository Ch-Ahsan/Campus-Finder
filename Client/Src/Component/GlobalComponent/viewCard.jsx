import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PercentIcon from '@mui/icons-material/Percent';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const ViewCard = ({ data }) => {
  return (
    <Grid
      container
      justifyContent={'center'}
      direction='column'
      alignItems='center'
    >
      <Grid item>
        
        <img src={`/Upload/${data?.logo}`} width='600px' height={'300px'} />
      </Grid>
      <Grid
        item
        container
        justifyContent='space-between'
        direction='row'
        style={{ padding: '35px' }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 950 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell width={'30%'} style={{ backgroundColor: '#eb2872' }}>
                <span style={{fontWeight:1000,color:'white'}}>Attributes</span>  
                </TableCell>
                <TableCell
                  align='left'
                  width={'90%'}
                  style={{ backgroundColor: '#eb2872' }}
                >
                  <span style={{fontWeight:1000,color:'white'}}>Information</span>  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <BadgeIcon style={{ color: '#eb2872' }} />  Name
                </TableCell>
                <TableCell align='left'>{data?.title}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <LocationCityIcon style={{ color: '#eb2872' }} />  Province
                </TableCell>
                <TableCell align='left'>{data?.province}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <CalendarMonthIcon style={{ color: '#eb2872' }} /> Deadline
                </TableCell>
                <TableCell align='left'>{data?.deadline}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <CallIcon style={{ color: '#eb2872' }} /> contact
                </TableCell>
                <TableCell align='left'>{data?.contact}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <AttachMoneyIcon style={{ color: '#eb2872' }} />Fees
                </TableCell>
                <TableCell align='left'>{data?.fee}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <AutoStoriesIcon style={{ color: '#eb2872' }} />   Discipline
                </TableCell>
                <TableCell align='left'>{data?.discipline}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <EmailIcon style={{ color: '#eb2872' }} /> Info
                </TableCell>
                <TableCell align='left'>{data?.info}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <PercentIcon style={{ color: '#eb2872' }} /> Merit
                </TableCell>
                <TableCell align='left'>{data?.merit}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <StarIcon style={{ color: '#eb2872' }} /> Ranking
                </TableCell>
                <TableCell align='left'>{data?.ranking}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <SchoolIcon style={{ color: '#eb2872' }} /> Type
                </TableCell>
                <TableCell align='left'>{data?.type===0?'Public':'Private'}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <SchoolIcon style={{ color: '#eb2872' }} /> Degree
                </TableCell>
                <TableCell align='left'>{data?.degree}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <LinkIcon style={{ color: '#eb2872' }} />  Web
                </TableCell>
                <TableCell align='left'>{data?.web}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <HomeIcon style={{ color: '#eb2872' }} />  Address
                </TableCell>
                <TableCell align='left'>{data?.address}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                <LockOpenIcon style={{ color: '#eb2872' }} />  Admission Status
                </TableCell>
                <TableCell align='left'>{data?.admissions===1?'closed':'open'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ViewCard;
