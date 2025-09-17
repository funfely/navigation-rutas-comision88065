import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../utils/api'
import ItemDetail from '../components/ItemDetail'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProductById(id)
      .then(setItem)
      .catch((e) => setError(e?.message || 'Error cargando producto'))
      .finally(() => setLoading(false))
  }, [id]) // ✅ dependencia correcta

  const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de: ${item?.title}`)
  }

  if (loading) return <p>Cargando...</p>
  if (error) return <p style={{ color: 'crimson' }}>{error}</p>
  if (!item) return <p>No se encontró el producto.</p>

  return <ItemDetail item={item} onAdd={handleAdd} />
}
