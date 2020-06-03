import React from 'react'
import { Switch, Route } from 'react-router-dom'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItems from '../drawer-items/drawer-items.component'
import PropTypes from 'prop-types'
import Dashboard from '../dashboard/dashboard.component'
import Loading from '../loading/loading.component'
import Flex from '../flex/flex.component'
import Api from '../../services/api'
import isEmpty from '../../utils/object-check'
import { useStyles } from '../../assets/styles/styles'

export default function DrawerComponent() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [currentFuel, setCurrentFuel] = React.useState({})
  const [fuels, setFuels] = React.useState({
    gasoline: {},
    etanol: {},
    diesel: {}
  })

  async function loadFuels() {
    const [gasolina, etanol, oleoDiesel] = await Promise.all([
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=gasolina'),
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=etanol'),
      Api.get('produtos?local=6gfjwck4g&valor_max=7.1&termo=oleo diesel')
    ])

    setCurrentFuel(gasolina.data)

    setFuels({
      gasoline: gasolina.data,
      etanol: etanol.data,
      diesel: oleoDiesel.data
    })
  }

  React.useEffect(() => {
    loadFuels()
  }, [])

  const handleFuelTypeSelected = (type) => ({
    gasolina: () => setCurrentFuel(fuels.gasoline),
    etanol: () => setCurrentFuel(fuels.etanol),
    diesel: () => setCurrentFuel(fuels.diesel)
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
                ? (<Dashboard fuels={currentFuel} />)
                : (<Loading />)
            }
          </Route>
          <Route path='/flex'>
            {
              !isEmpty(fuels.etanol && fuels.gasoline)
                ? (<Flex etanol={fuels.etanol} gasoline={fuels.gasoline} />)
                : (<Loading />)
            }
          </Route>
        </Switch>
      </main>
    </div>
  )
}

DrawerComponent.propTypes = {
  children: PropTypes.element
}
