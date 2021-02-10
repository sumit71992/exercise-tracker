const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://tvastra:sumit1992@cluster0.7mxep.mongodb.net/tvastraplus?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=>{
    console.warn("db connected");
})
.catch((err)=>{
    console.warn("db not connecting",err);
})

const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});