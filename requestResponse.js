const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/home') {
        return setHomePage(req,res);
    }

    if(req.url === '/about') {
        return setAboutPage(req,res);
    }

    if(req.url === '/node') {
        return nodePage(req,res);
    }
});

function setHomePage(req,res) {

    res.setHeader('Content-Type','text/html');
    return res.end(`<div>Welcome home</div>`);

}

function setAboutPage(req,res) {
    res.setHeader('Content-Type','text/html');
    return res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>About</title>
        </head>
        <body>
        <h1>Welcome to About Us Page</h1> 
        </body>
    </html>
    `);
}

function nodePage(req,res) {

    res.setHeader('Content-Type','text/html');
    return res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Node</title>
        </head>
        <body>
        <h1>Welcome to my Node Js Project</h1>
        </body>
    </html>
    `);
}
server.listen(3000);
