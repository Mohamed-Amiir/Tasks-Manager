const express = require('express');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
// Parsing middleware
app.use(express.urlencoded({ extended: true }));
// Middleware
app.use(express.json());
// User routers
app.use('/user', userRouter);
// Task routers 
app.use('/task', taskRouter);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task-manager', {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));    

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
