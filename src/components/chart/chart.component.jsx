import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'
import Title from '../title/title.component'

export default function Chart({ products }) {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Histórico</Title>
      <ResponsiveContainer>
        <LineChart
          data={products}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="tempo" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Preços (R$)
            </Label>
          </YAxis>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="valor" stroke={theme.palette.primary.main} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="distkm" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

Chart.propTypes = {
  products: PropTypes.array
}
