export interface IEvent {
  id: string
  user_id: string | null
  title: string
  description: string
  categories: string[]
  city: string
  address: string
  location: string[]
  banner: string
  flyers: string[]
  coupons: string[]
  price: number
  sector: string
  date: string
  created_at: string
}
