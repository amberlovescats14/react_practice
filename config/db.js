const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`DB connected`);
  } catch (error) {
    console.log(`Connection Error`);
    console.error(error.message)
  }
}

module.exports = connectDB