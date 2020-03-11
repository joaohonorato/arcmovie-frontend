import { searchMovie } from "./movieAction";

describe("Movie actions", () => {
  describe("Action Types", () => {
    test("Should return action type SEARCH_MOVIE", () => {
      expect(searchMovie.type).toEqual("SEARCH_MOVIE");
    });
  });

  describe("Action Creators", () => {
    test("Should return action creatir searchMovie", () => {
      expect(searchMovie()).toEqual({ type: "SEARCH_MOVIE" });
    });
  });
});
