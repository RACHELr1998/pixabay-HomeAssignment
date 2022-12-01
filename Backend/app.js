const express = require("express");
const router = require("./router");
const cors = require("cors");
const { images } = require("./middleware/categoryMiddleware");

// Create server object:
const server = express();
server.use(cors());
// Tell express to read the body json object:
server.use(express.json());

//Create port:
const port = 3001;
//Call middleware to get all images:
server.use(images);
//Route request into our router:
server.use("/", router);

server.listen(port, () => {
  console.log(`Listening on http://localhost: ${port}`);
});
