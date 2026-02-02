import { Router } from 'express'

export const productRouter = Router()

productRouter.get('/', ProductController.getAllProducts)
