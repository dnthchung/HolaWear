import { Types } from 'mongoose'

export interface IShop {
  _id?: Types.ObjectId
  shop_name: string
  shop_description: string
  shop_address?: string
  shop_phone?: string
  shop_email?: string
  shop_website?: string
  shop_logo?: string
  shop_banner?: string
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}
