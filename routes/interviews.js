const express = require('express')
const router = express.Router()
const Interviews = require('../models/Interviews')

router.get('/', async(req, res) => {
  try {
    let interviews = await Interviews.find()
    res.json(interviews)
  } catch (error) {
    console.log(`INTERVIEW GET ERROR`);
    console.error(error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newInterview = new Interviews({
      company: req.body.company,
      position: req.body.position,
      details: req.body.details,
      dayofinterview: req.body.dayofinterview
    })
    const save = await newInterview.save()
    res.json(save)
  } catch (error) {
    console.log(`INTERVIEW POST ERROR`);
    console.error(error.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const singleInterview = await Interviews.findById(req.params.id)
    if(!singleInterview) return res.status(404).json({msg: `Not Found`})
     else {
       singleInterview.company = req.body.company 
       singleInterview.position = req.body.position 
       singleInterview.details = req.body.details 
       singleInterview.dayofinterview = req.body.dayofinterview

       await singleInterview.save()
       return res.json(singleInterview)
     }
  } catch (error) {
    console.log(`INTERVIEW PUT ERROR`);
    console.error(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const interview = await Interviews.findById(req.params.id)
    if(!interview) return res.status(404).json({msg: `NOT FOUND`})

    await interview.remove()
    res.json({msg: `Interview Removed`})
  } catch (error) {
    console.log(`INTERVIEW REMOVE ERROR`);
    console.error(error.message)
  }
})


module.exports = router