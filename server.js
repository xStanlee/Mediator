import app from "./app.js";

const DEFAULT_PORT = 8080;

app.set("port", process.env.port || DEFAULT_PORT);

const server = app.listen(app.get("port"), function() {
    console.log(`Listening on port: ${server.address()?.port}`);
});