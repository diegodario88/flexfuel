import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4)
  },
  fixedMainHeight: {
    height: 295
  },
  fixedHeight: {
    height: 240,
    [theme.breakpoints.up('md')]: {
      height: 295
    }
  },
  salesContext: {
    flex: 1,
    height: 100
  }
}))

export default function LoadindComponent(props) {
  const classes = useStyles()
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
