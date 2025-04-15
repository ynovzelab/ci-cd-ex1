// npm i http
import http from "http";
import fs from "fs";
import { displayUserName } from "./lib/index";
import { User } from "./interfaces/index";

const user:User = {
    firstName: "John",
    lastName: "Doe",
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = `
            <html>
                <head>
                    <title>My First Page</title>
                    <link rel="stylesheet" href="/public/css/styles.css"/>
                </head>
                <div class="app__message">
                    <h1>Hello ${displayUserName(user)}</h1>
                </div>
            </html>
        `;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/public/css/styles.css") {
    fs.readFile("./public/css/styles.css", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/css" });
        res.end("File not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
