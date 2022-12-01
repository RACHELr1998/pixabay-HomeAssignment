import config from "../config.json";
import http from "./httpService";

async function getImages(page, limit, category) {
  return await http.get(
    `${config.apiUrl}/paginate?page=${page}&limit=${limit}&category=${category}`
  );
}

const imagesMethods = { getImages };
export default imagesMethods;
