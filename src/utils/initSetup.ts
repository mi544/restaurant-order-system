import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import hpp from 'hpp'

const initSetup = (app) => {
  // dotenv
  dotenv.config()
  // express middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  // 3rd-party middleware
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors())
  app.use(hpp())
}

export default initSetup
