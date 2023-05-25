const express = require('express');
const Activity = require('../models/Activity');
const router = express.Router();

router.use(express.json())

router.get('/', async (req, res) => {
    console.log('Get activity')
    const activity = await Activity.find();
    res.json(activity)
  });

  router.get('/id/:id', async (req, res) => {
    const activity = await Activity.findById(req.params.id);
    res.json(activity)
  });

router.post('/', async (req, res) => {
    console.log(req.body)
  
    Activity.create(req.body).then((data)=>{
      res.json(data)
    })
})

router.put('/:id', async (req, res) => {
    const activity = Activity.findByIdAndUpdate(req.params.id, req.body).then(data => {
      if (!data) {
        res.status(404).send({
          message: `Activity not found.`
        });
      } else {
        res.send({ message: "Activity updated successfully." })
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  })

  router.delete('/:id', async (req, res) => {
    const activity = Activity.findByIdAndRemove(req.params.id).then(data => {
      if (!data) {
        res.status(404).send({
          message: `Activity not found.`
        });
      } else {
        res.send({ message: "Activity deleted successfully." })
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  })

module.exports = router