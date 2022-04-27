import { useState } from 'react'
import MainComponent from './components/mainComponent'
import Aside from './components/asideComponent'


function App() {
  return (
    <div className="app">
      <Aside />
      <MainComponent />
    </div>
  )
}

export default App
