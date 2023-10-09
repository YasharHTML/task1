import http from "http";

const PORT = process.env.npm_config_port ?? 3000;

const session = { message: "Request handled successfully", requestCount: 0 };

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(session));
    res.end();
    session.requestCount++;
});

server.listen(PORT, () => {
    console.log("Listening: " + PORT);
});
