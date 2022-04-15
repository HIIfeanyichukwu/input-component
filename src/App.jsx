import { useState } from 'react'
import logo from './logo.svg'
import InputCard from './components/inputCard'

function App() {
  return (
    <div className="app">
      <InputCard />
      <div className="flex">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}

export default App
