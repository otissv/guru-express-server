/*
* GraphQL rourte
*/

'use strict';

import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { parse } from 'graphql';
import { schema, resolvers } from '../modules/ide/index-ide';

export default function ideRoute ({ app, context }) {
  const logger = { log: e => console.log(e) };

  app.route('/ide/schema').get((req, res) => res.json(parse(schema)));

  app.use(
    '/ide',
    graphqlExpress(req => {
      return {
        schema: makeExecutableSchema({
          typeDefs: schema,
          resolvers,
          logger
        }),
        context: {
          ...context,
          req
        }
      };
    })
  );
}
