import '../App.css';
import { store } from '../redux/store'

import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Genfunction from "../function/Genfunction";




function Mdm(props) {
  let paperSxStyle = { width: '100%'}
  let TableContainerSxStyle = { maxHeight: 200 }
  if (Object.keys(props).length > 0) {
    if (typeof props.paperSxStyle !== 'undefined') {
      paperSxStyle = props.paperSxStyle
    }

    if (typeof props.TableContainerSxStyle !== 'undefined') {
      TableContainerSxStyle = props.TableContainerSxStyle
    }
  }

  const [bodyTab, setbodyTab] = useState([]);

  useEffect(() => {    
    setbodyTab(Genfunction())
  }, []);

  store.subscribe(() => {
    setbodyTab(Genfunction())
  })

  return (
    <Paper sx={paperSxStyle}>
      <TableContainer sx={TableContainerSxStyle}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell><b>Formatted Address</b></TableCell>
              <TableCell align="right"><b>Town</b></TableCell>
              <TableCell align="right"><b>City</b></TableCell>
              <TableCell align="right"><b>State</b></TableCell>
              <TableCell align="right"><b>Country</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyTab}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Mdm;
