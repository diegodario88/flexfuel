import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../title/title.component'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

export default function Sales() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Venda Recente</Title>
      <Typography component="p" variant="h4">
        R$ 3.63
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        em 14/05/2020 às 16:31
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mapa
        </Link>
      </div>
    </React.Fragment>
  )
}
