const express = require('express')
const path = require('path')

const PORT = 9090

const app = express()

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('/'))
app.use(express.static('/adsterra'))
app.use(express.static('/adstera1'))
app.use(express.static('/direct'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/adstera1', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'adstera1.html'))
})
app.get('/adsterra', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'adsterra.html'))
})

app.get('/direct', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'direct.html'))
})

// listen for requests :)
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`)
})
