import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting='' />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Error 404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  )
}
