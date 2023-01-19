import {
  Button,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import Footer from '../../GlobalComponent/Footer';
import AdminNavbar from '../components/navbar';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableBody } from '@mui/material';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#eb2872',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PortalRequests = () => {
  const [requests, setRequests] = React.useState();
  React.useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    axios.get('/getModuleRequests').then((res) => {
      if (res) {
        setRequests(res.data.data);
      }
    });
  };

  console.log(requests);

  const approveRequest = (type, id) => {
    let update = {
      type: type,
      id: id,
    };
    if (type === 'approve') {
      axios.post('/approveStatus', update).then((res) => {
        if (res) {
          getRequests();
        }
      });
    }
    if (type === 'disapprove') {
      axios.post('/approveStatus', update).then((res) => {
        if (res) {
          getRequests();
        }
      });
    }
  };

  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid container style={{ padding: '45px' }}>
        <Grid item width='100%'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>University Name</StyledTableCell>
                  <StyledTableCell align='left'>Username</StyledTableCell>
                  <StyledTableCell align='left'>Email</StyledTableCell>
                  <StyledTableCell align='left'>Password</StyledTableCell>
                  <StyledTableCell align='left'>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests?.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component='th' scope='row'>
                      {row?.uniName}
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      {row?.username}
                    </StyledTableCell>
                    <StyledTableCell align='left'>{row?.email}</StyledTableCell>
                    <StyledTableCell align='left'>
                      {row?.password}
                    </StyledTableCell>

                    <StyledTableCell align='left'>
                      {row.status ? (
                        <>
                          <Typography style={{fontWeight:800,color:'#eb2872'}}>{row.status}</Typography>
                        </>
                      ) : (
                        <>
                          <Button
                            variant='contained'
                            style={{
                              backgroundColor: '#eb2872',
                              color: 'white',
                              marginRight: '5px',
                            }}
                            onClick={() => approveRequest('approve', row._id)}
                          >
                            Approve
                          </Button>
                          <Button
                            variant='contained'
                            style={{
                              backgroundColor: '#eb2872',
                              color: 'white',
                            }}
                            onClick={() =>
                              approveRequest('disapprove', row._id)
                            }
                          >
                            Disapprove
                          </Button>
                        </>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default PortalRequests;
