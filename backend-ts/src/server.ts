import envConfig from '~/api/v1/config/env.config'
import Database from '~/api/v1/db/init.mongo'
import app from '~/index'
// import MongoDBMonitor from '~/monitoring/mongoDb.monitor'

async function startServer() {
  console.log('Starting server...')
  try {
    // 1. Connect DB
    if (process.env.NODE_ENV !== 'test') {
      const mongoDb = Database.getInstace()
      mongoDb.connect()

      // 4. Gracefull shutdown handling
      const gracefulShutdown = (signal: string) => {
        console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`)
        try {
          // Stop accepting new connections
          server.close(() => {
            console.log('✅ HTTP server closed')
          })

          // stop monitor
          // mongoDbMonitor.stopMonitor()

          // disconnect DB
          mongoDb.disconnect()

          console.log('✅ Graceful shutdown completed')
          process.exit(0)
        } catch (error) {
          console.error('❌ Error during shutdown:', error)
          process.exit(1)
        }
      }
      // Listen for shutdown signals
      process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
      process.on('SIGINT', () => gracefulShutdown('SIGINT'))
    }

    // 2. start monitor DB
    // const mongoDbMonitor = MongoDBMonitor.getInstance()
    // mongoDbMonitor.startMonitoring()

    // 3. Start server when connect DB & start Monitor
    const server = app.listen(envConfig.PORT, () => {
      console.log(`✅ Server is running at http://localhost:${envConfig.PORT}`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}
startServer()
