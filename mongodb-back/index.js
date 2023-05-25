const mongoose = require('mongoose');
const express = require('express');
const activityRouter = require('./routers/activityRouter');

mongoose.connect("mongodb://localhost:27017/planer").then(() => {console.log('connect success mf')})

const app = express();

app.use(express.json())
app.use('/api/activity',activityRouter)

app.listen(3000, () =>{
    console.log('server is freeking running port 3000')
})