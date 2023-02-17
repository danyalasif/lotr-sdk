import { ISdk, MovieQuote, MovieResponse } from "./types/movie";

export default class LOTRSDK implements ISdk {
  baseUrl = "https://the-one-api.dev/v2";
  options: RequestInit = {};

  constructor(apiKey?: string) {
    this.options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
  }

  async getMovies(options?: RequestInit): Promise<MovieResponse> {
    const res = await fetch(`${this.baseUrl}/movie`, {
      ...this.options,
      ...options,
    });
    const json = await res.json();
    return json;
  }

  async getMovieById(
    id: string,
    options?: RequestInit
  ): Promise<MovieResponse> {
    const res = await fetch(`${this.baseUrl}/movie/${id}`, {
      ...this.options,
      ...options,
    });
    const json = await res.json();
    return json;
  }

  async getMovieQuotes(id: string, options?: RequestInit): Promise<MovieQuote> {
    const res = await fetch(`${this.baseUrl}/movie/${id}/quote`, {
      ...this.options,
      ...options,
    });
    const json = await res.json();
    return json;
  }
}
