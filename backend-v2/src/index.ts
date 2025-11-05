import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Database from '~/api/v1/db/init.mongo'
import { errorHandler } from '~/api/v1/middlewares'
import routerApiV1 from '~/api/v1/routes/index.route'

const app = express()

// ===== Body Parser =====
app.use(
  express.json({
    limit: '10mb',
  }),
)
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// ===== Middleware =====
app.use(compression())
app.use(morgan('dev'))
app.use(helmet())

// ===== Routes =====
app.use('/api/v1', routerApiV1)
app.get('/health', async (req, res) => {
  try {
    const database = Database.getInstace()
    const dbHealth = await database.healthCheck()

    res.status(200).json({
      timeStamp: new Date(),
      database: dbHealth,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
    })
  }
})

// ===== Error Handling =====
app.use(errorHandler)

export default app
