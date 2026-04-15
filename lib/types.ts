export type ProductCategory = 'running' | 'triathlon' | 'cycling'
export type ProductLevel = 'iniciante' | 'intermediario' | 'avancado'
export type OrderStatus = 'pending' | 'paid' | 'cancelled'

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: ProductCategory
  level: ProductLevel
  duration_weeks: number
  price_cents: number
  training_peaks_url?: string
  cover_image_url?: string
  is_active: boolean
  created_at: string
}

export interface Order {
  id: string
  customer_id: string
  product_id: string
  status: OrderStatus
  price_cents: number
  paid_at: string | null
  created_at: string
  product?: Product
  customer?: Customer
}

export interface Customer {
  id: string
  name: string
  email: string
  created_at: string
}
