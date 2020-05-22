/* eslint-disable camelcase */
import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../chart/chart.component'
import Sales from '../sales/sales.component'
import TablePrice from '../table-price/table-price.component'
import Footer from '../footer/footer.component'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  makeUrlForGoogleMaps,
  getFirstBrandName, getSecondBrandName, removeSpace
} from '../../utils/string-utils'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedMainHeight: {
    height: 295
  },
  fixedHeight: {
    height: 240,
    [theme.breakpoints.up('md')]: {
      height: 295
    }
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()

  const {
    datahora, valor, desc,
    estabelecimento: { nm_fan, nm_emp, tp_logr, nm_logr, nr_logr, mun, uf }
  } = props.products[0]

  const stationAddress = `${tp_logr} ${nm_logr}, ${nr_logr} ${mun}-${uf}`
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedMainHeightPaper = clsx(classes.paper, classes.fixedMainHeight)

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedMainHeightPaper}>
            <Sales
              price={valor}
              date={moment(datahora).format('DD/MM/YYYY, h:mm a')}
              fuelType={desc}
              station={getSecondBrandName(nm_fan || nm_emp)}
              location={makeUrlForGoogleMaps(nm_fan, stationAddress)}
              logo={removeSpace(getFirstBrandName(nm_fan).toLowerCase().trim()) || 'b.branca'}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart products={props.products} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TablePrice data={props.products} />
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Footer />
      </Box>
    </Container>
  )
}

Dashboard.propTypes = {
  products: PropTypes.array,
  sales: PropTypes.object
}
