import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
