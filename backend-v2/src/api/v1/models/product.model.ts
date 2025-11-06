import { Schema } from 'mongoose'
import { IProduct } from '~/api/v1/types/product.type'

export const productSchema = new Schema<IProduct>(
  {
    shop_id: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
    product_price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
)
