const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppSchema = new Schema({
  company: {
    type: String,
    required: true,
    min: 4,
    max: 30
  },
  position: {
    type: String,
    required: true,
    min: 4,
    max: 30
  },
  status: {
    type: String,
    required: true,
    min: 2,
    max:30
  },
  interviewed: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Apps = mongoose.model('Apps', AppSchema)
module.exports = Apps