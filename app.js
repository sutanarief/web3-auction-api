require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { connect } = require('./config/db.js')
const cors = require('cors')
const PORT = 3000
const router = require('./router')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
//yuhuuuu

connect()
.then(() => {
  console.log('connected to MongoDB')
  app.listen(3000, ()=> {
      console.log(`Node API app is running on port 3000`)
  });
}).catch((error) => {
  console.log(error)
})
