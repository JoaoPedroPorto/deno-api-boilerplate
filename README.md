# DENO-API-BOILERPLATE

This is a REST API using [Deno](https://deno.land/) and [Oak](https://oakserver.github.io/oak/)

## Clone the repository

```
    # https
    git clone https://github.com/JoaoPedroPorto/deno-api-boilerplate.git
```

## Environment variables

- You must create an .env file with the following information:

Variable | Development | Production
--- | --- | ---
PODCAST_API_HOST | http://localhost | -
PODCAST_API_PORT | 3333 | -
HOSTNAME | http://localhost | -
PORT | 8080 | -

## Usage

- Before that, you need to start [Podcast-api](podcast-api/README.md)

```sh
    # start
    deno run --allow-net --allow-read src/index.ts

    # test
    deno test src/
```

## Routes

- `GET` /api/v1/podcasts/:

```sh
curl --location --request GET 'http://localhost:8080/api/v1/podcasts/'

curl --location --request GET 'http://localhost:8080/api/v1/podcasts/?page=1&perPage=2'
```

- `GET` /api/v1/podcasts/:slug

```sh
curl --location --request GET 'http://localhost:8080/api/v1/podcasts/a-importancia-da-contribuicao-em-open-source'
```

### Requires

- Deno

### Note

For ".editorconfig" and ".env" to work, we need to install the "EditorConfig" and "DotENV" extensions on VS Code.
