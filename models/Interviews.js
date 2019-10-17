const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterviewSchema = new Schema({
  company: {
    type: String,
    required: true,
    min: 3,
    max: 30
  },
  position: {
    type: String,
    required: true,
    min: 3,
    max: 30
  },
  details: {
    type: String,
    required: true,
    min: 1
  },
  dayofinterview : {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Interviews = mongoose.model('Interviews', InterviewSchema)
module.exports = Interviews