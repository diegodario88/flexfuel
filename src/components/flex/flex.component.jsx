/* eslint-disable camelcase */
import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../chart/chart.component'
import Footer from '../footer/footer.component'
import PropTypes from 'prop-types'

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

export default function Flex({ products }) {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedMainHeightPaper = clsx(classes.paper, classes.fixedMainHeight)

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedMainHeightPaper}>

          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart products={products} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Footer />
      </Box>
    </Container>
  )
}

Flex.propTypes = {
  products: PropTypes.array
}
