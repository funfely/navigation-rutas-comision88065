import ItemCard from './ItemCard'

export default function ItemList({ items }) {
  if (!items?.length) return <p>No hay productos.</p>
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {items.map(item => <ItemCard key={item.id} item={item} />)}
    </div>
  )
}
