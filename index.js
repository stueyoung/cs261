let express = require('express');
let routes = require('./routes/routes.js');

let app = express();
let port = 8123;


routes.register(app);
/*
app.get('/hello' ,(req, res) => {
  res.send("Hello! You are caller number " + hits + ".\n");
  hits = hits + 1;
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req,res) => {
  res.send('Got a DELETE request at /user');
});
*/
app.listen(port);

