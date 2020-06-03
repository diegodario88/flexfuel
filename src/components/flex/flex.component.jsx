/* eslint-disable camelcase */
import React from 'react'
import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Footer from '../footer/footer.component'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import { useStyles } from '../../assets/styles/styles'
import { Typography } from '@material-ui/core'
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import Title from '../title/title.component'
import { getAvg, checkBestFuel } from '../../utils/fuel'

export default function Flex({ etanol, gasoline }) {
  const classes = useStyles()

  const data = [
    {
      name: 'Etanol', menor: etanol.precos.min, maior: etanol.precos.max, media: getAvg(etanol)
    },
    {
      name: 'Gasolina', menor: gasoline.precos.min, maior: gasoline.precos.max, media: getAvg(gasoline)
    }
  ]

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightFlex)

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ResponsiveContainer>
              <ComposedChart
                width={300}
                height={300}
                data={data}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: -1
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="maior"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="menor" fill="#8884d8" />
                <Bar dataKey="maior" fill="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Title> Qual compensa? </Title>
            <Alert severity="success" color="info">
            É mais vantajoso abastecer com {checkBestFuel(getAvg(etanol), getAvg(gasoline))}
            </Alert>
            <Typography align="justify" variant="body1" gutterBottom>
  De acordo com a média dos melhores valores na sua região.
            </Typography>
            <Typography align="justify" variant="body2" gutterBottom>
  Como o etanol precisa ser queimado cerca de 30% mais que a gasolina para alcançar o mesmo desempenho,
  o preço precisa ser 30% menor.
            </Typography>
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
