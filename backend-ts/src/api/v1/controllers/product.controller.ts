import { ProductService } from '~/api/v1/services/product.service'

export class ProductController {
  private productService: ProductService
  constructor() {
    this.productService = new ProductService()
  }
}
