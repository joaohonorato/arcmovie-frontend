import axios from "axios";

export default axios.create({
  baseURL: "https://arcmovie-backend.herokuapp.com/"
});
