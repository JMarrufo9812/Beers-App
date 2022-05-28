import axios from "axios";
const baseURL = "https://api.punkapi.com/v2/";

const get = async (url) => await axios.get(`${baseURL}${url}`);

const baseApi = {
  get,
};

export default baseApi;
