export interface ISuccessResponse<T = any> {
  status: 'success'
  statusCode: number
  message: string
  data?: T
  metadata?: {
    timestamp: string
    requestId?: string
    pagination?: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
    refreshType?: string
  }
}
