const http = require("http")
const fs = require('fs')
const host = 'localhost'
const port = 8000
const categoryJson = fs.readFileSync('category.json', 'utf8');
const requestListener = (req, res) => {
    const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    }
    res.write(categoryJson)
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`category Server is running on http://${host}:${port}`);
});