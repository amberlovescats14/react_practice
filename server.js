const express = require('express')
const connectDB = require('./config/db.js')
const path = require('path')

const app = express()
connectDB()
app.use(express.json({extended: false}))

app.get('/', (req, res) => {
  res.send(`API running...`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))