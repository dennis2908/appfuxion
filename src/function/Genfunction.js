import '../App.css';
import { store } from '../redux/store'

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';




function Genfunction() {

  let bodyTabX = []
  if(store.getState()){

    let long = [];
    let arrC = Object.entries(store.getState().place)

    for (let i = 0; i < arrC.length; i++) {
      if (parseInt(arrC[i][1].address_components.length) > 0)
        long[0] = arrC[i][1].address_components[0].long_name
      else
        long[0] = "-"

      if (parseInt(arrC[i][1].address_components.length) > 1)
        long[1] = arrC[i][1].address_components[1].long_name
      else
        long[1] = "-"

      if (parseInt(arrC[i][1].address_components.length) > 2)
        long[2] = arrC[i][1].address_components[2].long_name
      else
        long[2] = "-"

      if (parseInt(arrC[i][1].address_components.length) > 3)
        long[3] = arrC[i][1].address_components[3].long_name
      else
        long[3] = "-"

      if (parseInt(arrC[i][1].formatted_address.length) > 0)
        long[4] = arrC[i][1].formatted_address
      else
        long[4] = "-"

      bodyTabX.push(<TableRow
        key={i + arrC[i][1].address_components[0].long_name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {long[4] || ""}
        </TableCell>
        <TableCell align="right">{long[0] || "-"}</TableCell>
        <TableCell align="right">{long[1] || "-"}</TableCell>
        <TableCell align="right">{long[2] || "-"}</TableCell>
        <TableCell align="right">{long[3] || "-"}</TableCell>
      </TableRow>)
    }

    return bodyTabX;

  }

  bodyTabX.push(<TableRow
  key={1}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  <TableCell component="th" scope="row">
  </TableCell>
  <TableCell align="right"></TableCell>
  <TableCell align="right"></TableCell>
  <TableCell align="right"></TableCell>
  <TableCell align="right"></TableCell>
</TableRow>)

  return bodyTabX;

}

export default Genfunction;
