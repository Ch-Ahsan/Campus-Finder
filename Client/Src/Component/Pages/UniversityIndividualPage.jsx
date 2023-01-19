import { Grid } from '@mui/material';
import React from 'react';
import Footer from '../GlobalComponent/Footer';
import MenusCard from '../GlobalComponent/MenusCards';
import Navbar from '../GlobalComponent/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Heading from '../GlobalComponent/Heading';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,

} from '@mui/material';
import ViewCard from '../GlobalComponent/viewCard'
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

const UniversityIndividualPage = () => {
  const [uniData, setUniData] = React.useState('');
  const { id } = useParams();
  console.log(uniData);

  const getUniversity = () => {
    axios.get(`/getUni/${id}`).then((res) => {
      setUniData(res.data.data);
    });
  };

  React.useEffect(() => {
    getUniversity();
  }, []);
  return (
    <Grid container>
      <Grid item width='100%'>
        <Navbar />
      </Grid>
      <Grid item width='100%'>
        <Heading text='University Information' />
      </Grid>
      <Grid
        container
        justifyContent={'center'}
        alignItems='center'
        style={{ padding: '20px' }}
      >

        <ViewCard data={uniData}/>
        
      </Grid>
      <Grid item width='100%'>
        <Heading text='Scholarships' />
      </Grid>
      {uniData?.scholarships?.scholar.length > 0 && (
        <Grid item width="100%">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align='right'>Description</StyledTableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {uniData?.scholarships?.scholar?.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component='th' scope='row'>
                      {row?.title}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {row?.description}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
      <Grid width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default UniversityIndividualPage;
