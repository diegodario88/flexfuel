import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import Title from '../title/title.component'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData('Jan', 1.50),
  createData('Fev', 2.50),
  createData('Março', 2.56),
  createData('Abril', 3.60),
  createData('Maio', 3.58)

]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Histórico</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Vendas (R$)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
