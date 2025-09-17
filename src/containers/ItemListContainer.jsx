import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { fetchProducts } from '../utils/api'
import ItemList from '../components/ItemList'

export default function ItemListContainer({ greeting = 'Catálogo' }) {
  const { categoryId } = useParams()
  const showGreeting = typeof categoryId === 'undefined'
  const location = useLocation()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProducts(categoryId)
      .then(setItems)
      .catch((e) => setError(e.message || 'Error cargando productos'))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return <p>Cargando...</p>
  if (error) return <p style={{ color: 'crimson' }}>{error}</p>

  return (
  <div>
    {/* Mostrar saludo solo si es la ruta raíz */}
    {location.pathname === '/' && greeting && (
      <section style={{ background: '#eef', padding: 24, borderRadius: 12, marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>{greeting}</h1>
        <p>Descubrí nuestros productos destacados.</p>
      </section>
    )}

    <ItemList items={items} />
  </div>
)

}
