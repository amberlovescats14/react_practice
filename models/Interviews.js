const mongoose = require('monogoose')
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
  date : {
    type: String,
    required: true,
  }
})

const Interviews = mongoose.model('Interviews', InterviewSchema)
module.exports = Interviews