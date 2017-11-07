const http = require('http')

const srv = http.createServer(handler)
srv.listen(8081)

function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello, World!</h1>\n')
}
