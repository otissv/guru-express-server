/*
* GraphQL rourte
*/

'use strict';

import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { parse } from 'graphql';
import Cache from './cache-route';
import fs from 'fs';
import { capitalize } from '../utils';
import { mergeStrings } from 'gql-merge';

export default function graphqlRoute ({
  app,
  context,
  schema,
  resolvers,
  routes
}) {
  const logger = { log: e => console.log(e) };

  function parsePersistedQuery ({ req, res, next, dir, whitelist }) {
    const query = req.body.query;
    const variables = req.body.variables || '';

    if (Array.isArray(query) && query[0]) {
      req.body = [...query].map(item => {
        if (item.id) {
          const file = `${dir}${item.id}-query.json`;
          if (fs.existsSync(file)) {
            const queryDoc = fs.readFileSync(file, 'utf8');
            
            const vars = {
              ...JSON.parse(variables),
              ...item.variables
            };

            return {
              query: JSON.parse(queryDoc).query,
              operationName: item.operationName || null,
              variables: JSON.stringify(vars)
            };
          } else {
            console.log('The persisted query file not found');
            return res.status(400).json({
              errors: 'Invalid request'
            });
          }

        } else {
          if (whitelist) {
            console.log('The request is not a persisted query');
            return res.status(400).json({
              errors: 'Invalid request'
            });
          } else {
            return item;
          }
        }
      });

      next();
    } else {
      if (whitelist) {
        console.log('The request is not a persisted query');
        res.status('400').json({
          errors: 'Invalid request'
        });
      } else {
        next();
      }
    }
  }

  // function validateQueryOperation (req, res, next) {
  //   const queryAst = parse(req.body.query);

  //   queryAst.definitions.forEach(definition => {
  //     const operation = definition.operation;
  //     if (operation === 'mutation' || operation === 'query') {
  //       definition.selectionSet.selections.forEach(selection => {
  //         const result = schema.definition.operations[
  //           capitalize(operation)
  //         ].filter(item => item.name === selection.name.value);

  //         if (result.length === 0) {
  //           console.log(
  //             `Operation ${selection.name.value} does not exist in schema${operation}`
  //           );
  //           res.status('400').json({
  //             errors: 'Invalid request'
  //           });
  //         } else {
  //           next();
  //         }
  //       });
  //     } else {
  //       next();
  //     }
  //   });
  // }

  app.use('/graphql', (req, res, next) => {
    parsePersistedQuery({
      req,
      res,
      next,
      dir: `${process.cwd()}/server/queries/`,
      whitelist: false
    });
  });

  // app.use('/graphql', validateQueryOperation);

  app.use(
    '/graphql',
    graphqlExpress(req => {
      return {
        schema: makeExecutableSchema({
          typeDefs: schema.ast,
          resolvers,
          logger
        }),
        context: {
          ...context,
          cache: new Cache(),
          req
        }
      };
    })
  );
}
