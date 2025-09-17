const img = (File) => import.meta.env.BASE_URL + 'images/' + File

export const PRODUCTS = [
  {
    id: '1',
    title: 'Remera en V',
    price: 15000,
    category: 'ropa',
    stock: 12,
    description: 'Remera con cuello en V',
    image: '/images/remera-en-v.png'
  },
  {
    id: '2',
    title: 'Buzo polar',
    price: 12000,
    category: 'ropa',
    stock: 45,
    description: 'Buzo Polar gris',
    image: '/images/Buzo-polar.png'
  },
  {
    id: '3',
    title: 'Llaveros Devs',
    price: 30000,
    category: 'accesorios',
    stock: 30,
    description: 'Buzo con logo Node',
    image: '/images/llaveros-devs.png'
  },
  {
    id: '4',
    title: 'Gorras',
    price: 4000,
    category: 'accesorios',
    stock: 50,
    description: 'Gorra Linux',
    image: '/images/gorra-linux.png'
  }
]

export const CATEGORIES = [
  { id: 'ropa', label: 'Ropa' },
  { id: 'accesorios', label: 'Accesorios' }
]

