//DEPENDENCIES
const express = require('express')
const app = express()
const methodOverride = require('method-override')


//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// middleware
const breadsController = require ("./controllers/breads_controllers.js")
app.use(methodOverride('_method'))
app.use('/breads',breadsController)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

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