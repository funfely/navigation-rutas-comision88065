import { PRODUCTS } from '../data'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export async function fetchProducts(categoryId) {
  await delay(600) // retardo simulado
  if (!categoryId || categoryId === 'all') return PRODUCTS
  return PRODUCTS.filter(p => p.category === categoryId)
}

export async function fetchProductById(id) {
  await delay(500)
  return PRODUCTS.find(p => p.id === id)
}
