const express = require('express')
const path = require('path');

const PORT = 9090

const app = express()

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('/'))
app.use(express.static('/exoclick'))
app.use(express.static('/exoinpage'))
app.use(express.static('/adsterra'))
app.use(express.static('/adstera1'))
app.use(express.static('/direct'))
app.use(express.static('/newpop'))
app.use(express.static('/popcash'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/exoclick', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'exoclick.html'))
})
app.get('/exoinpage', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'exoinpage.html'))
})
app.get('/adstera1', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'adstera1.html'))
})
app.get('/adsterra', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'adsterra.html'))
})
app.get('/popcash', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'popcash.html'))
})
app.get('/newpop', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'newpop.html'))
})
app.get('/direct', (request, response) => {
  // eslint-disable-next-line no-undef
  response.sendFile(path.resolve(__dirname, 'direct.html'))
})

// listen for requests :)
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`)
})