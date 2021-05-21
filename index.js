const express = require("express");

const server = express();

server.use(express.json());

const PORT = 5000;

server.get("/", (req, res) => {
    res.json({message: "This is the polkadot test!"})
})

server.listen(PORT, () => {
    console.log('\n Server running on port ${PORT} \n');
});
