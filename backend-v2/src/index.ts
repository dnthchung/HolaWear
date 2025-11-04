import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

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

// ===== Error Handling =====

export default app
