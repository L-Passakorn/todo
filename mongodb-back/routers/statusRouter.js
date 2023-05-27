const express = require('express');
const Status = require('../models/Status')
const Activity = require('../models/Activity')
const router = express.Router();

router.use(express.json())

// router.post('/', async(req,res)=>{
//     console.log(req.body)
//     Status.create(req.body).then(data=>{
//         res.send(data)
//     })
// })

router.post('/', async (req, res) => {
    console.log(req.body)
    
    Status.create(req.body).then((data)=>{
      res.json(data)
    })
})

router.delete('/:id', (req,res)=>{
    Status.findByIdAndRemove(req.params.id).then(data=>{
        Activity.deleteMany({statusId: data._id})
        res.send(data)
    })
})

module.exports = router