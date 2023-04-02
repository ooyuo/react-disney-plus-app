const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7cc9f9d3ffbc414db380b40acb8b8150",
    language: "ko-KR",
  },
});

export default instance;
