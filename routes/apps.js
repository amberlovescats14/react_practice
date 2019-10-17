const express = require('express')
const router = express.Router()
const Apps = require('../models/Apps')

router.get('/', async (req, res) => {
  try {
    let apps = await Apps.find()
    res.json(apps)
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newApp = new Apps({
      company: req.body.company,
      position: req.body.position,
      status: req.body.status,
      interview: req.body.interview
    })
    const save = await newApp.save()
    res.json(save)
  } catch (error) {
    console.error(error.message)
    console.log(`post app`);
  }
})




module.exports = router