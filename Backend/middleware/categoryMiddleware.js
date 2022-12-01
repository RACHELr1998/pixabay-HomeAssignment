const { getAllImages } = require("../imagesAPI");

const images = async function (req, res, next) {
  //Extract category from request
  const category = req.query.category || "flowers";

  //Call imagesAPI
  req.images = await getAllImages(category);

  next(); //Continue next router
};

module.exports = { images };
