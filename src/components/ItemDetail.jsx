import ItemCount from './ItemCount'

export default function ItemDetail({ item, onAdd }) {
  if (!item) return null

  const handleAdd = (qty) => onAdd?.(qty)

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: 12 }} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p><strong>Precio:</strong> ${item.price.toLocaleString('es-AR')}</p>
        <p><strong>Stock:</strong> {item.stock}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </section>
  )
}
