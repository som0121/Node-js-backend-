const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{

    const log = `${Date.now()}: ${req.url} New Req Received\n`

    fs.appendFile("log.txt", log, (err,data)=> {

        switch(req.url) {
            case '/': res.end("Homepage");
            break;
            case '/about': res.end(" my name is Som");
            break;
            default:
                res.end("404 req Not Found");
        }
        
    })
    console.log(req.headers);
});

myServer.listen(8000, ()=> console.log("Server Started!"));