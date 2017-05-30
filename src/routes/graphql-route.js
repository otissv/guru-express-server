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
    if (Array.isArray(req.body) && req.body[0]) {
      req.body = [...req.body].map(item => {
        if (item.id) {
          const queryDoc = fs.readFileSync(
            `${dir}${item.id}-query.json`,
            'utf8'
          );

          const fragments = item.fragments
            ? item.fragments.map(fragment => {
              const fragmentDoc = fs.readFileSync(
                  `${dir}${fragment}-query.json`,
                  'utf8'
                );

              return JSON.parse(fragmentDoc).query;
            })
            : [];

          return {
            query: `${JSON.parse(queryDoc).query} ${fragments.join('\n\n')}`,
            operationName: item.operationName || null,
            variables: JSON.stringify(item.variables)
          };
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
