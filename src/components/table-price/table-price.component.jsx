import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import Title from '../title/title.component'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import PropTypes from 'prop-types'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0
  }
}))

function TablePaginationActions(props) {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}
// Generate Order Data
function createData(id, price, station, name) {
  return { id, price, station, name }
}

const rows = [
  createData(0, 3.63, 'B. BRANCA', 'POSTO SAO MATHEUS'),
  createData(1, 3.63, 'RODOIL', 'EMIVE AUTO POSTO'),
  createData(2, 3.72, 'B. BRANCA', 'AUTO POSTO LOANDA'),
  createData(3, 3.79, 'SHELL', 'TORREZAN AUTO POSTO 5'),
  createData(4, 3.79, 'PETROBRAS', 'BONETTI AUTO POSTO'),
  createData(5, 3.63, 'B. BRANCA', 'POSTO SAO MATHEUS'),
  createData(6, 3.63, 'RODOIL', 'EMIVE AUTO POSTO'),
  createData(7, 3.72, 'B. BRANCA', 'AUTO POSTO LOANDA'),
  createData(8, 3.79, 'SHELL', 'TORREZAN AUTO POSTO 5'),
  createData(9, 3.79, 'PETROBRAS', 'BONETTI AUTO POSTO')
]

const useStyles = makeStyles((theme) => ({
  priceTable: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    display: 'flex'
  }
}))

export default function Orders() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <React.Fragment>
      <Title>Lista de Preços</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.priceTable}>Ordem</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell >Posto</TableCell>
            <TableCell className={classes.priceTable}>Bandeira</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.priceTable}>{row.id}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell className={classes.priceTable}>{row.station}</TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
              colSpan={2}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </React.Fragment>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}
