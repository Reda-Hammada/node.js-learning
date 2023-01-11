const url = require('url');
const http =  require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/home'){
      res.end('Home Page')
    }
    else if(pathName === '/About'){
        res.end('about page')
    } 
    else {
     res.writeHead(404);
     res.end('Page not Found')

    }
 })
 
 server.listen(8000,'127.0.0.1',() =>{
 })