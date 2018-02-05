const http = require('http');

let hits = 1;

const server = http.createServer( (request, response) => {
  if( request.url == '/')
  {
    response.end("Hello World! You are caller number " + hits);
    hits = hits + 1;
    if(hits > 50)
    {
      hits = 1;
    }
  }
  else
  {
    response.end();
  }
});

server.listen(8124);
console.log("Listening");
