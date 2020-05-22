import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import LocalGas from '@material-ui/icons/LocalGasStation'
import Contact from '@material-ui/icons/Contacts'
import Code from '@material-ui/icons/Code'
import BarChartIcon from '@material-ui/icons/BarChart'
import CloudDownloa from '@material-ui/icons/CloudDownload'
import Info from '@material-ui/icons/Info'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  dividerSpace: {
    marginBottom: 24,
    marginTop: 24
  }
}))

export default function DrawerItems(props) {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  const handleFuelListItemClick = (event, index, type) => {
    setSelectedIndex(index)
    props.onclick(type)
  }

  return (
    <div className={classes.root}>
      <Divider />
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={
          (event) => handleFuelListItemClick(event, 0, 'gasolina')
        }
      >
        <ListItemIcon>
          <LocalGas style={{ fill: 'red' }} />
        </ListItemIcon>
        <ListItemText primary="Gasolina" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleFuelListItemClick(event, 1, 'etanol')}
      >
        <ListItemIcon>
          <LocalGas style={{ fill: 'green' }} />
        </ListItemIcon>
        <ListItemText primary="Etanol" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleFuelListItemClick(event, 2, 'diesel')}
      >
        <ListItemIcon>
          <LocalGas style={{ fill: 'yellow' }}/>
        </ListItemIcon>
        <ListItemText primary="Diesel" />
      </ListItem>

      <Divider className={classes.dividerSpace} />

      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Gráficos" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
      >
        <ListItemIcon>
          <CloudDownloa />
        </ListItemIcon>
        <ListItemText primary="Downloads" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Code />
        </ListItemIcon>
        <ListItemText primary="Código" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Contact />
        </ListItemIcon>
        <ListItemText primary="Contato" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="Informações" />
      </ListItem>
    </div>

  )
}

DrawerItems.propTypes = {
  onclick: PropTypes.func
}
