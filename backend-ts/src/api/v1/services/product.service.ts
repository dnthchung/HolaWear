import { ProductRepository, ShopRepository } from '~/api/v1/repositories'

export class ProductService {
  private productRepository: ProductRepository
  private shopRepository: ShopRepository

  constructor() {
    this.productRepository = new ProductRepository()
    this.shopRepository = new ShopRepository()
  }
}
