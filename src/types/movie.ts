export interface Movie {
  _id: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
}

export interface MovieQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface IParams {
  limit: number;
  offset: number;
  page: number;
}

export interface ISdk {
  getMovies(options?: RequestInit): Promise<MovieResponse>;
  getMovieById(id: string): Promise<MovieResponse>;
  getMovieQuotes(id: string): Promise<MovieQuote>;
}

export interface MovieResponse extends IParams {
  docs: Movie[];
}

export interface MovieQuoteResponse extends IParams {
  docs: MovieQuote[];
}
