import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../title/title.component'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  salesContext: {
    flex: 1
  },
  img: {
    width: '100px',
    height: '80px'
  }
})

export default function Sales({ price, station, date, fuelType, location, logo }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>Melhor Valor</Title>
      <Typography component="p" variant="h4">
        R$ {price}
      </Typography>
      <Typography color="textSecondary" className={classes.salesContext}>
        {fuelType}
      </Typography>
      <div>
        <Typography component="p">
          {station}
        </Typography>
        <img className={classes.img} alt='logo' src={require(`../../assets/brands/${logo}.png`)} />
        <Typography color="textSecondary" className={classes.salesContext}>
        em {date}
        </Typography>
        <Link color="primary" href={`geo:${location}`}>
          Ver no mapa 🗺
        </Link>
      </div>
    </React.Fragment>
  )
}

Sales.propTypes = {
  price: PropTypes.string,
  station: PropTypes.string,
  date: PropTypes.string,
  fuelType: PropTypes.string,
  logo: PropTypes.string,
  location: PropTypes.string
}