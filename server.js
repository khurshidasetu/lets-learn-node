const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, "request made")

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about-us':
            path += 'about-us.html';
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about-us')
            res.end()
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end('<h1>Error</h1>')
        }
        res.end(data)
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000')
})