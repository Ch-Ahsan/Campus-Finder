import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import Footer from '../../GlobalComponent/Footer';
import AdminNavbar from '../components/navbar';
import UniversityViewCard from '../components/universityViewCard';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'Type', label: 'Type', minWidth: 70 },
  {
    id: 'logo',
    label: 'Logo',
    minWidth: 130,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 120,
    align: 'left',
    format: (value) => {
      console.log(value);
    },
  },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 120,
    align: 'left',
    format: (value) => {
      console.log(value);
    },
  },
];

const ViewUniversity = () => {
  const [uniData, setUniData] = React.useState([]);
  const navigate = useNavigate()

  const [search, setSearch] = React.useState('');
  console.log(search.length);
  const CallHomePage = async (e) => {
    axios.get(`/getTitles`).then((res) => {
      setUniData(res.data.data);
    });
  };
  useEffect(() => {
    CallHomePage();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const newPacientes = uniData.filter((value) =>
        value.title
          .toLowerCase()
          .split(' ')
          .join('')
          .includes(search.toLowerCase())
      );
      setUniData(newPacientes);
    } else {
      CallHomePage();
    }
  }, [search]);

  console.log(uniData);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - uniData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const deleteRecord=(id)=>{
    console.log(id)

    axios.post(`/deleteUni/${id}`).then((res)=>{
      if(res){
        window.alert('deleted successfully')
        CallHomePage();
      }
      console.log(res)
    })

  }
  const EditUni=(id)=>{
    console.log(id)
    navigate(`/EditUniversity/${id}`)

  }
  return (
    <Grid container>
      <Grid item width='100%'>
        <AdminNavbar />
      </Grid>
      <Grid width='100%' item style={{ padding: '15px' }}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Search'
          onChange={(e) => setSearch(e.target.value)}
          variant='standard'
        />
      </Grid>
      <Grid
        container
        item
        justifyContent={'space-between'}
        alignItems='center'
        style={{ padding: '35px' }}
      >
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer  sx={{ maxHeight: 790 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead >
                <TableRow >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth,backgroundColor:'#eb2872' }}
                     
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {uniData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={row._id}
                      >
                        <TableCell key={row._id}>{row?.title}</TableCell>
                        <TableCell key={row._id}>{row?.status===0?"Public":"Private"}</TableCell>
                        <TableCell key={row._id}>
                          <img src={`/Upload/${row?.logo}`} height='50px' width='50px' />
                        </TableCell>
                        <TableCell key={row._id}>{row?.city}</TableCell>
                        <TableCell key={row._id}>
                          <Button
                            variant='contained'
                            onClick={()=>EditUni(row?._id)}
                            style={{
                              backgroundColor: '#eb2872',
                              color: 'white',
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant='contained'
                            onClick={()=>deleteRecord(row?._id)}
                            style={{
                              backgroundColor: '#eb2872',
                              color: 'white',
                              marginLeft:'10px'
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={uniData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      <Grid item width='100%'>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ViewUniversity;
