import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const estilos = {backgroundColor: 'black'}

  return (
    <div className="App">
      
      <NavBar />
    </div>
    
  )
}

export default App
