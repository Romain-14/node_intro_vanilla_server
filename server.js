const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT = process.env.PORT || 9000;

// console.log(process.env);

http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url === "/favicon.ico") {
        res.writeHead(200, { "content-type": "image/x-icon" });
        res.end();
        return;
    }

    if (req.url === "/") {
        console.log("Je suis dans le home !!");
        console.log(__dirname);
        fs.readFile(path.join(__dirname, "views/home.html"), (err, data)=>{
            if(err){
                res.writeHead(404);
                res.end();
                return;
            }

            res.writeHead(200, {"content-type": "text/html"})
            res.end(data);
            return;
        });
    }

    if (req.url === "/json") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(
            JSON.stringify({ msg: "Salut l'url ! je m'appelle Jason !!" })
        );
        res.end();
        return;
    }


    
}).listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
