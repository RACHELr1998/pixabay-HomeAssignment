// middleware function
function paginatedResults() {
  return (req, res, next) => {
    //Get all images
    const model = req.images;
    //Create current page
    const page = parseInt(req.query.page);
    //Create total items per page
    const limit = parseInt(req.query.limit);

    // calculating the starting and ending page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    //Check the number page and replace the items by 9 forward
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    //Check the number page and replace the items by 9 backwards
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = model.slice(startIndex, endIndex);
    //Return pagination
    res.paginatedResults = results;

    next(); //Continue next function
  };
}

module.exports = { paginatedResults };
