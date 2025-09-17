import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  return (
    <article style={{ border: '1px solid #ddd', padding: 12, borderRadius: 12 }}>
      <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: 8 }} />
      <h3 style={{ margin: '8px 0' }}>{item.title}</h3>
      <p style={{ margin: 0 }}>${item.price.toLocaleString('es-AR')}</p>
      <Link to={`/item/${item.id}`} style={{ display: 'inline-block', marginTop: 8 }}>
        Ver detalle
      </Link>
    </article>
  )
}
