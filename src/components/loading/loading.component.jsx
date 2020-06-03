import React from 'react'
import { useStyles } from '../../assets/styles/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'
import clsx from 'clsx'

export default function LoadingComponent() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedMainHeightPaper = clsx(classes.paper, classes.fixedMainHeight)

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedMainHeightPaper}>
            <React.Fragment>
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="40%" />
              <Skeleton animation="wave" height={10} width="100%" className={classes.salesContext} />
              <div>
                <Skeleton animation="wave" variant="rect" className={classes.salesContext} />
                <Skeleton animation="wave" height={10} width="80%" style={{ marginTop: 6 }} />
                <Skeleton animation="wave" height={10} width="40%" />
              </div>
            </React.Fragment>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <React.Fragment>
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="40%" />
              <Skeleton animation="wave" height={10} width="100%" className={classes.salesContext} />
              <div>
                <Skeleton animation="wave" variant="rect" className={classes.salesContext} />
                <Skeleton animation="wave" height={10} width="80%" style={{ marginTop: 6 }} />
                <Skeleton animation="wave" height={10} width="40%" />
              </div>
            </React.Fragment>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <React.Fragment>
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="40%" />
              <Skeleton animation="wave" height={80} width="100%" className={classes.salesContext} />
              <div>
                <Skeleton animation="wave" variant="rect" className={classes.salesContext} />
                <Skeleton animation="wave" height={10} width="80%" style={{ marginTop: 6 }} />
                <Skeleton animation="wave" height={10} width="40%" />
              </div>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
