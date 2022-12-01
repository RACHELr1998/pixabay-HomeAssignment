const axios = require("axios");

//Sort images by id in ascending order:
const sortImages = (images) => {
  return images.sort((a, b) => {
    return a.id - b.id;
  });
};

//Get all images from API:
const getAllImages = async (category) => {
  const result = await axios.get(
    `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`,
    {
      headers: {
        "Accept-Encoding": "application/json",
      },
    }
  );
  //Extract data from the compressed JSON:
  let images = result.data.hits;

  //Sort data images:
  images = sortImages(images);

  return images;
};

module.exports = { getAllImages };
