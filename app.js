import http from "http";

const session = { message: "Request handled successfully", requestCount: 0 };

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(session));
    res.end();
    session.requestCount++;
});

server.listen(3000, () => {
    console.log("Listening: " + 3000);
});
