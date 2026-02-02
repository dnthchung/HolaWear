import { Types } from 'mongoose'

export interface IProduct {
  _id?: Types.ObjectId
  shop_id: Types.ObjectId //  trỏ tới id của shop nào có product này
  product_name: string
  product_description: string
  product_price: number
}
