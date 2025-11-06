import { Model } from 'mongoose'
import { productSchema } from '~/api/v1/models'
import { BaseRepository } from '~/api/v1/repositories/base.repository'
import { IProduct } from '~/api/v1/types/product.type'

export class ProductRepository extends BaseRepository {
  private models = {
    product: new Map<string, Model<IProduct>>(),
  }

  private async getProductModel(): Promise<Model<IProduct>> {
    const dbName = this.dbName
    if (!this.models.product.has(dbName)) {
      const connection = await this.getConnection()
      const productModel = connection.model<IProduct>('Product', productSchema)
      this.models.product.set(dbName, productModel)
    }
    return this.models.product.get(dbName)!
  }

  //create product
  async createProduct(productData: BaseProductType) {
    const ProductModel = await this.getProductModel()
    const product = new ProductModel(productData)
    return await product.save()
  }
}
