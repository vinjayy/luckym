// Mock product data for Lucky Mart
export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  featured?: boolean
}

export const categories = ["AC", "TV LED", "Refrigerator", "Washing Machine"]

export const products: Product[] = [
  {
    id: "1",
    name: "AC 1 PK Standard",
    category: "AC",
    price: 4500000,
    image: "/white-air-conditioner-unit.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "AC 1.5 PK Inverter",
    category: "AC",
    price: 6500000,
    image: "/modern-inverter-air-conditioner.jpg",
  },
  {
    id: "3",
    name: "AC 2 PK Premium",
    category: "AC",
    price: 8500000,
    image: "/premium-split-air-conditioner.jpg",
  },
  {
    id: "4",
    name: "Smart LED TV 43 Inch",
    category: "TV LED",
    price: 4200000,
    image: "/43-inch-smart-led-tv.jpg",
    featured: true,
  },
  {
    id: "5",
    name: "Smart LED TV 55 Inch",
    category: "TV LED",
    price: 6800000,
    image: "/55-inch-smart-led-tv.jpg",
  },
  {
    id: "6",
    name: "LED TV 32 Inch",
    category: "TV LED",
    price: 2500000,
    image: "/32-inch-led-television.jpg",
  },
  {
    id: "7",
    name: "Refrigerator 2 Pintu",
    category: "Refrigerator",
    price: 5500000,
    image: "/two-door-refrigerator-silver.jpg",
    featured: true,
  },
  {
    id: "8",
    name: "Refrigerator 1 Pintu",
    category: "Refrigerator",
    price: 2800000,
    image: "/single-door-refrigerator-white.jpg",
  },
  {
    id: "9",
    name: "Refrigerator Side by Side",
    category: "Refrigerator",
    price: 12000000,
    image: "/side-by-side-refrigerator-stainless.jpg",
  },
  {
    id: "10",
    name: "Mesin Cuci Front Load",
    category: "Washing Machine",
    price: 5800000,
    image: "/front-load-washing-machine-white.jpg",
    featured: true,
  },
  {
    id: "11",
    name: "Mesin Cuci Top Load",
    category: "Washing Machine",
    price: 3200000,
    image: "/top-load-washing-machine.jpg",
  },
  {
    id: "12",
    name: "Mesin Cuci 2 Tabung",
    category: "Washing Machine",
    price: 2200000,
    image: "/twin-tub-washing-machine.jpg",
  },
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}
