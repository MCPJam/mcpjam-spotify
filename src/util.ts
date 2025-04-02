import { SpotifyApi } from "@spotify/web-api-ts-sdk";

// TODO: Configure these env keys
export const api = SpotifyApi.withClientCredentials("123", "123");
