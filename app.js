const http = require("http")

const handler = (request, response) => {
  console.log(request.url);
  response.end("Hello, World!");
}

const server = http.createServer(handler)

server.listen(3000, (error) => {
  if (error) {
    return console.log("an error occurred: ", err)
  }

  console.log("server listening on port: 3000")
})