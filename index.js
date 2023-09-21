const http = require("http");
const port = process.env.PORT || 3000

http.createServer((req, res) => {
    res.write("hai section jayapuraaa")
    res.end()
}).listen(port, () => {
    console.log(`server running on localhost:${port}`)
})