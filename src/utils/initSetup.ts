import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'

const initSetup = (app) => {
  // dotenv
  dotenv.config()
  // morgan logger
  app.use(morgan('dev'))
  app.use(helmet())
}

export default initSetup
