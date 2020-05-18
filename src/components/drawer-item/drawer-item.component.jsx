import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalGas from '@material-ui/icons/LocalGasStation'
import Contact from '@material-ui/icons/Contacts'
import Code from '@material-ui/icons/Code'
import BarChartIcon from '@material-ui/icons/BarChart'
import CloudDownloa from '@material-ui/icons/CloudDownload'
import Info from '@material-ui/icons/Info'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LocalGas style={{ fill: 'red' }} />
      </ListItemIcon>
      <ListItemText primary="Gasolina" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalGas style={{ fill: 'green' }} />
      </ListItemIcon>
      <ListItemText primary="Etanol" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalGas style={{ fill: 'yellow' }}/>
      </ListItemIcon>
      <ListItemText primary="Diesel" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Gráficos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CloudDownloa />
      </ListItemIcon>
      <ListItemText primary="Downloads" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
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
