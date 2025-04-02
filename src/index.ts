import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { api } from "./util.js";

// Create an MCP server
const server = new McpServer({
  name: "Spotify MCP",
  version: "1.0.0",
});

// Add a Spotify artist search tool
server.tool("search", { artist: z.string() }, async ({ artist }) => {
  const results = await api.search(artist, ["artist"]);
  const artists = results.artists.items.map((artist) => ({
    name: artist.name,
    followers: artist.followers.total,
    popularity: artist.popularity,
    genres: artist.genres,
    spotifyUrl: artist.external_urls.spotify,
  }));

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(artists, null, 2),
      },
    ],
  };
});

// Add a dynamic greeting resource
server.resource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  async (uri, { name }) => ({
    contents: [
      {
        uri: uri.href,
        text: `Hello, ${name}!`,
      },
    ],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Spotify MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
