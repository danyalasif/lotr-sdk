import SDK from "../dist/lib/es5/index";

const client = new SDK(process.env.API_KEY);
console.log({ env: process.env.API_KEY });
async function getMovie() {
  const res = await client.getMovieById("1");
  console.log({ res });
  return res;
}

getMovie();
