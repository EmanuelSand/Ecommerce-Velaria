import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer'
import ItemCount from './components/NavBar/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludos='Hola soy un prototipo de pagina de compras ja!'/>
      </header>
      <ItemCount stock="5" initial="1"/>

    </div>
  )
}

export default App
