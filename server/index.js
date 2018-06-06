const express = require('express');
const http =  require('http');
const bodyParser =  require('body-parser');
const morgan =  require('morgan');
const app =  express();
const router = require('./router')
const mongoose = require('mongoose');
const cors = require('cors');

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/magicBuild';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening : ',port);
