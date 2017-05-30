# Guru Express Server

Express Graphql server for Guru.  

Guru Server is to address the pain points with a Node GraphQl server.

## Features
- GraphQL schema language first philosophy
- Uses GraphqQL and Express, so nothing new to learn.
- Modulizing and splitting schema and resolvers.
- Dynamically builds connectors from resolvers.
- Dynamic importing of schema and resolvers modules. No more imports.
- Multiple database clients support.
- White listing queries.
- Query batching.
- GraphQL Ide

## Usage
```npm install @graphql-guru/express-server```


```
import graphQLExpress from "@graphql-guru/express-server";

graphQLExpress();
```


## License
MIT

