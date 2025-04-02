# mcpjam-spotify

## Installation Instructions

Install the packages. I prefer yarn:

```
yarn install
```

Build the typescript file using `tsc`:

```
yarn run build
```

Copy over the file directory over to Claude Desktop config:

```
{
  "mcpServers": {
    "MCPJam Spotify": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcpjam-spotify/build/index.js"]
    }
  }
}

```
