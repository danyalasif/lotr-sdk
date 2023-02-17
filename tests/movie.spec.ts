import SDK from "../src";
import { Movie as MovieType } from "../src/types/movie";

describe("movie", () => {
  const client = new SDK(process.env.API_KEY);
  test("getMovies: it responds with a list of movies", async () => {
    const response = await client.getMovies();

    expect(response).toHaveProperty("docs");
  });

  test("it responds a with movie", async () => {
    const movieId = "5cd95395de30eff6ebccde5a";
    const response = await client.getMovieById(movieId);

    expect(response).toHaveProperty("docs");
    expect(response.docs[0]._id).toBe(movieId);
  });

  test("getMovieQuotes : it responds with a quote object", async () => {
    const movieId = "5cf58080b53e011a64671584";

    const response = await client.getMovieQuotes(movieId);

    expect(response).toHaveProperty("docs");
  });
});
