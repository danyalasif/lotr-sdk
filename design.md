## Simple and fast initialization

A main class SDK that handles the logic of initialization and has 3 methods in it.

These methods can later be extracted into a separate file `movieService.ts` for expansion.

Each method takes an optional `options` parameter where user can define further options.

## Fetch

Using native `fetch` to keep it simple, I would prefer extracting it and making a custom fetch method that handles retries and colocates the logic in one place.

## API Key

`apiKey` is optional for later expansion to services that don't require one.

## Compilation

The code is compiled into ES5 and ES6 libraries for use on the client and server side. It exists in the `dist/lib` folder.

## Example

A basic example in `example/server.ts` that initializes the `SDK` and calls one method
