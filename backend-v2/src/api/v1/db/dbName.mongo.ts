import mongoose from 'mongoose'
import envConfig from '~/api/v1/config/env.config'

class DatabaseManager {
  private static instance: DatabaseManager
  private connections = new Map()

  private databaseConfig = {
    testing: {
      uri: `${envConfig.DB_URI}`,
      options: {
        maxPoolSize: 10,
      },
    },
    holawear_v2_db: {
      uri: `${envConfig.DB_URI}`,
      options: {
        maxPoolSize: 10,
      },
    },
  }

  static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager()
    }
    return DatabaseManager.instance
  }

  async getConnection(dbName: keyof typeof this.databaseConfig): Promise<mongoose.Connection> {
    // Nếu đã có connection rồi thì trả về luôn, bất kể readyState
    const existing = this.connections.get(dbName)
    if (existing) {
      return existing
    }

    const config = this.databaseConfig[dbName]
    if (!config) {
      throw new Error(`Database configuration for '${dbName}' not found`)
    }

    try {
      const connection = mongoose.createConnection(`${config.uri}/${dbName}?${envConfig.DB_OPTION}`, config.options)

      // Lưu ngay để các lần gọi sau tái sử dụng, tránh tạo thêm connection
      this.connections.set(dbName, connection)
      console.log('Connected MongoDb Success ')
      return connection
    } catch (error) {
      console.error(`❌ Failed to connect to ${dbName}:`, error)
      throw error
    }
  }
}

const dbManager = DatabaseManager.getInstance()
export default dbManager
