import { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)

  const inc = () => setCount(c => (c < stock ? c + 1 : c))
  const dec = () => setCount(c => (c > 1 ? c - 1 : c))

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
      <button onClick={dec} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={inc} disabled={count >= stock}>+</button>
      <button onClick={() => onAdd?.(count)} disabled={stock === 0}>
        Agregar
      </button>
    </div>
  )
}
