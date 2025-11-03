import env from 'dotenv'
import fs from 'fs'
import path from 'path'

// call fn config env - only load .env if not in test environment
if (process.env.NODE_ENV !== 'test') {
  env.config({
    path: '.env',
  })
}

// check file .env is exists
const checkIsExistEnvFile = () => {
  if (!fs.existsSync(path.resolve('.env'))) {
    console.log('file Env not found')
  }
}
checkIsExistEnvFile()
