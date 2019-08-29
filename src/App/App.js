import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.scss' 

import Routes from './Routes/Routes'

function App(props) {
  return (
    
      <div className="App">
        <BrowserRouter>
            <Routes user={props.user} />
        </BrowserRouter>
      </div>

  )
}

export default App;
