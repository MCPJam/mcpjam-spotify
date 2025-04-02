import { SpotifyApi } from "@spotify/web-api-ts-sdk";

// TODO: Make these configurable
export const api = SpotifyApi.withClientCredentials(
  "530cc8f8c0564ef48875b014e32bc987",
  "80e3e74b5a88479292a5c508dbc0a0e6"
);
