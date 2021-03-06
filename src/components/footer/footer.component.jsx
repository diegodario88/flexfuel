import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/diegodario88">
          Diego Dario
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
