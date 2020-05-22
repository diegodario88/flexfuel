import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MapIcon from '@material-ui/icons/Map'; import Title from '../title/title.component'
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
      <Title>Mais Barato</Title>
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
        <Link color="primary" href={location}>
          Ver no mapa <MapIcon />
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
