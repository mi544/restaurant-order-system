import express from 'express'
import initSetup from './utils/initSetup'

const app = express()
initSetup(app)

app.use('/', (_, res) => {
  res.json({ hi: 'ho' })
})

app.listen(1080, () => console.log('listening on 1080'))
