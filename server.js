// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello there!</h1>'
    )
  } else if (request.url === '/random-joke') {
    // Math.random()
    response.end('jokes')
  } else if (request.url === '/cuteness') {
    response.end('Something cute')
  } else {
    response.end('Page Not Found')
  }
})

var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
