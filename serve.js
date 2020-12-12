require('http').createServer((req, res) => {
    let path = req.url.split('?')[0];

    if (path === '/') {
        path = '/index.html';
    } else {
        path = path.replace(/^\/posts(?=\/dist)/, '');
    }

    require('fs').readFile(`${__dirname}${path}`, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }

        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);