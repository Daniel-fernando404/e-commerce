import Items from './components/NavBar/items/Items'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Items greeting = {"Bienvenidos a mi ecommer"}/>
    </div>
  )
}

export default App
