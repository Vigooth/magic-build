const express = require('express');
const path = require('path');
let app = express();

const PORT = process.env.PORT || 4000;
const CLIENT_ASSETS_DIR = path.join(__dirname, '../../dist');
console.log("CLIENT_ASSETS_DIR",CLIENT_ASSETS_DIR)
app.use(express.static(CLIENT_ASSETS_DIR));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html')), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }});

app.listen(PORT, function() {console.log('Express serv is up to ', PORT)})
