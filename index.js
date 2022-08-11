const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

require('dotenv').config();

const DB = process.env.DATABASE;

app.use(cors());
app.use(express.json());

const studentRoute = require('./routes/StudentRoutes')

mongoose.connect(DB)
.then(()=> {
    console.log('database connected')
})
.catch((err)=> {
    console.log(err);
})

app.use('/api/student', studentRoute);



app.listen(port, ()=> {
    console.log('listening on port', port)
})