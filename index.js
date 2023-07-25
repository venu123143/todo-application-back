const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const routes = require('./routes/TaskRoute')
// config and db connection
require('dotenv').config();
require('./database/db')

// cors and json
const options={
    origin: ['http://localhost:3000','https://taskcreation.onrender.com'],
    credentials: true,
    withCredentials:true,
    optionSuccessStatus: 200,
}
app.use(cors(options))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('this is home page backend :-)')
})
// routes
app.use('/api/tasks',routes)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})
