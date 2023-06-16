// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
//index
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})
baker.get('/', (req, res) => {
    Baker.find()
        .then(foundBakers =>{
            res,send(foundBaker)
  })
  })
// export
module.exports = baker                    
