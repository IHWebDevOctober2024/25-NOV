const http = require("http");
// this is the syntax to import modules
// is the default syntax in node

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("this is the documentation of the API");
  } else if (request.url === "/users") {
    response.write("We are going to send you all the users in a json file");
  } else {
    response.statusCode = 404;
    response.write("This was not found");
  }
  response.end();
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
