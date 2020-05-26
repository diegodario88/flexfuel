import React from 'react'
import { Switch, Route } from 'react-router-dom'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Skeleton from '@material-ui/lab/Skeleton'
import ListItems from '../drawer-items/drawer-items.component'
import PropTypes from 'prop-types'
import Dashboard from '../dashboard/dashboard.component'
import Flex from '../flex/flex.component'
import Api from '../../services/api'
import isEmpty from '../../utils/object-check'
import { useStyles } from '../../assets/styles/styles'
export default function DrawerComponent(props) {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedMainHeightPaper = clsx(classes.paper, classes.fixedMainHeight)

  const [gasolineSales, setGasolineSales] = React.useState([])
  const [etanolSales, setEtanolSales] = React.useState([])
  const [dieselSales, setDieselSales] = React.useState([])
  const [currentFuel, setCurrentFuel] = React.useState(gasolineSales)
  const [open, setOpen] = React.useState(false)

  async function loadFuels() {
    const [gasolina, etanol, diesel] = await Promise.all([
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=gasolina'),
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=etanol'),
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=oleo diesel')
    ])
    setCurrentFuel(gasolina.data.produtos)
    setGasolineSales(gasolina.data.produtos)
    setEtanolSales(etanol.data.produtos)
    setDieselSales(diesel.data.produtos)
  }

  React.useEffect(() => {
    loadFuels()
  }, [])

  const handleFuelTypeSelected = (type) => ({
    gasolina: () => setCurrentFuel(gasolineSales),
    etanol: () => setCurrentFuel(etanolSales),
    diesel: () => setCurrentFuel(dieselSales)
  }[type]() || 'Type not found')

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Melhor Valor Combustível
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        < ListItems onclick={(e) => { handleFuelTypeSelected(e) }} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path='/'>
            {
              !isEmpty(currentFuel)
                ? (<Dashboard products={currentFuel} />)
                : (
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
          </Route>

          <Route path='/charts'>
            <Flex data={currentFuel} />
          </Route>

        </Switch>
      </main>
    </div>
  )
}

DrawerComponent.propTypes = {
  children: PropTypes.element
}
