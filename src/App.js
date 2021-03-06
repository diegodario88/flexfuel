import React from 'react'
import './App.css'

import Drawer from './components/drawer/drawer.component'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ptBR } from '@material-ui/core/locale'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }, ptBR),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Drawer />
      </div>
    </ThemeProvider>
  )
}

export default App
