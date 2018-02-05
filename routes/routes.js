let apiRoot = '/api/v1/';

let motd = require('./motd.js');

let hits = 1;

function getRoot(req,res) {
  res.send('Hello! You are caller number ' + hits + '!\n');
  hits = hits + 1;
}

module.exports.register = function(app) {
  app.get('/', getRoot);
  motd.register(app, apiRoot + "motd/");
}

