// npm i http
import http from 'http';
const server = http.createServer((req, res) => { 
    if (req.url === "/") {
        const html = `
            <html>
                <h1>Hello World</h1>
            </html>
        `
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});