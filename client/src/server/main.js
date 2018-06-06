const express = require('express');

let app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('dist'));

app.listen(PORT, function() {console.log('Express serv is up to ', PORT)})
