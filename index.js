let express = require('express');
let app = express();
let port = 8123;
let hits = 1;

app.get('/', function(req, res) {
  res.send("Hello! You are caller number " + hits + "\n");
  hits = hits + 1;
});

app.listen(port);

