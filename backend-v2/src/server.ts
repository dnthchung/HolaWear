import app from '.'
import envConfig from './api/v1/config/env.config'

async function startServer() {
  try {
    //start server
    app.listen(envConfig.PORT, () => {
      console.log(`Server is running on port ${envConfig.PORT}`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

startServer()
