const express = require('express')
const app = express()

//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// middleware
const breadsController = require ("./controllers/breads_controllers.js")
app.use(express.static('public'))
app.use('/breads',breadsController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
// 404 page 
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT)
})