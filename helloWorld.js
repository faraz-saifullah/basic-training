let http = require('http');

function myFunction(request,response) {
  console.log('User is making a request');
  response.writeHead(200,{"Context-Type" : "html"});
  response.write("Here is a response..!");
  response.end();

}


http.createServer(myFunction).listen(8888);
console.log('Server is running');