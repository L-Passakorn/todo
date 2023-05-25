const express = require('express');
const Activity = require('../models/Activity');
const router = express.Router();

router.use(express.json())

router.get('/', async (req, res) => {
    console.log('Get activity')
    const activity = await Activity.find();
    res.json(activity)
  });

router.post('/', async (req, res) => {
    console.log(req.body)
  
    Activity.create(req.body).then((data)=>{
      res.json(data)
    })
})

module.exports = router