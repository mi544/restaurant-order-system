import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

const initSetup = (app) => {
  // dotenv
  dotenv.config()
  // morgan logger
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors())
}

export default initSetup
