// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import AppContext from './use context/AppContext'

function App() {
  const appname = {
    width:'75vw',
    padding:'5px ',
    // background:'orange',
    // display: 'flex',
    // justifyContent:'space-between',
    // alignItems:'center'

  }


  return (
    <>
    <div style={appname}>
    
      <AppContext/>
      </div>
    </>
  )
}

export default App
