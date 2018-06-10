const express = require('express');
const http =  require('http');
const bodyParser =  require('body-parser');
const morgan =  require('morgan');
const app =  express();
const router = require('./router')
const mongoose = require('mongoose');
const cors = require('cors');

//Set up default mongoose connection
const url = process.env.MONGODB_URI ||'mongodb://localhost/magicBuild';
mongoose.connect(url);

//Set up default mongoose connection
//const mongoDB = 'mongodb://localhost/magicBuild';
const mongoDB = 'mongodb://vigooth:N4v4rHaa@ds147190.mlab.com:47190/manacard-test';
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/magicBuild");
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Server Setup
const port = process.env.PORT || 4080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening : ',port);
console.log('DATABASE : ',url);
console.log('Server listening : ',process.env.PORT );
