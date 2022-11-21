import express from 'express'

const app = express()

app.use('/', (_, res) => {
  res.json({ hi: 'ho' })
})

app.listen(1080, () => console.log('listening on 1080'))
