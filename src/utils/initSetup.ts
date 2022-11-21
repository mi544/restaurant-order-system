import dotenv from 'dotenv'
import morgan from 'morgan'

const initSetup = (app) => {
  // dotenv
  dotenv.config()
  // morgan logger
  app.use(morgan('dev'))
}

export default initSetup
