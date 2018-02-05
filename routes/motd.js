
function getMotd(req, res) {
  let response = {
    status: 'success',
    data: { 
      lastModified: new Date().toISOString(),
      motd: 'Nothin to say.'
    }

  }
  res.send(JSON.stringify(response));
}

module.exports.register = function(app, root) {
  app.get(root + 'get', getMotd);
} 
