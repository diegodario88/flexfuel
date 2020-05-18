import React from 'react'
import './App.css'

import Dashboard from './components/dashboard/dashboard.component'
import Drawer from './components/drawer/drawer.component'

function App() {
  return (
    <div className="App">
      <Drawer>
        <Dashboard />
      </Drawer>
    </div>
  )
}

export default App
