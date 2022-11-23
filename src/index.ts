import express from 'express'
import initSetup from './utils/initSetup'
import router from './router'

const app = express()
initSetup(app)

app.use('/api/v1', router)

app.use('/', (_, res) => {
  res.json({ hi: 'ho' })
})

app.listen(1080, () => console.log('listening on 1080'))
