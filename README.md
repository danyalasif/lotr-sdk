# LOTR SDK

A SDK wrapper for [The One API]("https://the-one-api.dev/")

Handles API key and fetch logic, you can get the API key by signing up on the website.

It has 3 methods that can be called after initialization:

## SDK Reference

Initialize it by calling the constructor:

```typescript
import LOTRSDK from "danyal/SDK";
const client = new LOTRSDK();

async function getMovie() {
  const res = await client.getMovieById("1");
  return res;
}
```

| Method           | Params       | Description                |
| :--------------- | :----------- | :------------------------- |
| `getMovies`      | none         | **Required**. Your API key |
| `getMovieById`   | `id: string` | **Required**. Your API key |
| `getMovieQuotes` | `id: string` | **Required**. Your API key |

e.g. `getMovies` and `getMovieById`returns:

```ts
  docs: [{
    _id: string;
    academyAwardNominations: number;
    academyAwardWins: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    name: string;
    rottenTomatoesScore: number;
    runtimeInMinutes: number;
  }]
  limit: number;
  offset: number;
  page: number;
```
