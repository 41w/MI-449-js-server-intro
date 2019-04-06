// Require Node's http module and assign it to a variable
var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Homepage</h1>' +
      '<h2>Hello World</h2>' +
      '<ul>' +
      '<li><a href="/random-joke">Jokes</a></li>' +
      '<li><a href="/cuteness">Something Cute</a></li>' +
      '</ul>'
    )
  } else if (request.url === '/random-joke') {
    var choice = Math.random()
    if (choice < 0.5) {
      response.end(
        '<h1>Joke #1</h1>' +
        '<h4>Knock, knock! <br> Who\'s there? <br> Double. <br>' +
        'Double who? <br> W! </h4>' +
        '<a href="/">Home</a>'
      )
    } else if (choice < 0.75) {
      response.end(
        '<h1>Joke #2</h1>' +
        '<h4>Knock, knock! <br> Who\'s there? <br> Beats. <br>' +
        'Beats who? <br> Beats me.</h4>' +
        '<a href="/">Home</a>'
      )
    } else {
      response.end(
        '<h1>Joke #3</h1>' +
        '<h4>Knock, knock! <br> Who\'s there? <br> Cook. <br>' +
        'Cook who? <br> Yeah, you do sound kinda crazy. </h4>' +
        '<a href="/">Home</a>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Something Cute Here</h1>' +
      '<a href="https://paperpull.com/best-wallpaper-of-garfield-from-the-2004-garfield-movie/">' +
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9ftlUjd1dMQ3cE1WwojNO3uw2BSITFyL2mvQoWBVHsENH9yD_A" alt="Garfield">' + '</a><br>' +
      '<a href="/">Home</a>'
    )
  } else {
    response.end(
      '<h1>Page Not Found</h1>' +
      'The requested URL' + request.url +
      '/ was not found on this server. That\'s all we know. <br>' +
      '<a href="/">Home</a>'
    )
  }
})

var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
