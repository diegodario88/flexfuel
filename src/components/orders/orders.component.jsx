import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../title/title.component'

// Generate Order Data
function createData(id, price, station, name) {
  return { id, price, station, name }
}

const rows = [
  createData(0, 3.63, 'B. BRANCA', 'POSTO SAO MATHEUS'),
  createData(1, 3.63, 'RODOIL', 'EMIVE AUTO POSTO'),
  createData(2, 3.72, 'B. BRANCA', 'AUTO POSTO LOANDA'),
  createData(3, 3.79, 'SHELL', 'TORREZAN AUTO POSTO 5'),
  createData(4, 3.79, 'PETROBRAS', 'BONETTI AUTO POSTO')
]

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function Orders() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Lista de Preços</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Preço</TableCell>
            <TableCell>Bandeira</TableCell>
            <TableCell align="left">Posto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell>{row.station}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Veja mais resultados
        </Link>
      </div>
    </React.Fragment>
  )
}
