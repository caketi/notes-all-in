const fs = require("fs");
const server = require("https").createServer(
    {
        key: fs.readFileSync("my")
    }
)