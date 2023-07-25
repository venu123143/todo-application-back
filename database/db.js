const mongoose = require('mongoose')

const db = process.env.DATABASE
// const db = 'mongodb://127.0.0.1:27017/tasks'

mongoose.connect(db)
    .then(console.log('connection sucessful'))
    .catch((err) => console.log(err, "conn failed"))