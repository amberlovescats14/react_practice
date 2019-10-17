const express = require('express')
const router = express.Router()
const Apps = require('../models/Apps')

router.get('/', async (req, res) => {
  try {
    let apps = await Apps.find()
    res.json(apps)
  } catch (error) {
    console.log(`GET ERROR`);
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
    console.log(`POST ERROR`);
    console.error(error.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const singleApp = await Apps.findById(req.params.id)
    if(!singleApp) return res.status(404).json({msg:`App Not Found`})
    else {
      singleApp.company = req.body.company
      singleApp.position = req.body.position
      singleApp.status = req.body.status
      singleApp.interview = req.body.interview
      await singleApp.save()
      return res.json(singleApp)
    }
  } catch (error) {
    console.log(`PUT ERROR`);
    console.error(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const app = await Apps.findById(req.param.id)
    if(!app) return res.status(404).json({msg: `App not found`})

    await app.remove()
    res.json({msg: `App Deleted`})
  } catch (error) {
    console.log(`DELETE ERROR`);
    console.error(error.message)
  }
})




module.exports = router