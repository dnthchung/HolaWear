import { Schema } from 'mongoose'
import { IShop } from '~/api/v1/types/shop.type'

export const shopSchema = new Schema<IShop>(
  {
    shop_name: { type: String, required: true },
    shop_description: { type: String, required: true },
    shop_address: { type: String },
    shop_phone: { type: String },
    shop_email: { type: String },
    shop_website: { type: String },
    shop_logo: { type: String },
    shop_banner: { type: String },
    status: { type: Boolean, default: true },
  },
  { timestamps: true },
)
