import api from "../../services/api";
import { addMovies } from "./movieAction";

export const getAllMovies = () => {
  return dispatch => {
    api
      .get("/v1/movies/")
      .then(res => {
        console.log("API RESPONSE ", res);
        dispatch(addMovies(res.data ));
      })
      .catch(console.log);
  };
};
