const express = require("express");
const router = express.Router();
const { paginatedResults } = require("./middleware/paginator");

//GET `http://localhost:3001/images`
router.get("/", (req, res) => {
  try {
    res.send(req.images.slice(0, 9));
  } catch (err) {
    res.status(err.status || 500);
    res.send(err.message);
  }
});

//GET `http://localhost:3001/images/paginate?`
router.get("/images/paginate", paginatedResults(), (req, res) => {
  try {
    res.json(res.paginatedResults);
  } catch (err) {
    res.status(err.status || 500);
    res.send(err.message);
  }
});

module.exports = router;
