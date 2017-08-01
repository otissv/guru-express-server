'use strict';

import Bluebird from 'bluebird';
import shell from 'shelljs';
import { QUERY_DIRECTORY } from '../../../constants';

const { rm } = shell;
const fs = Bluebird.promisifyAll(require('fs'));

export default {
  ideQueryCollectionClear (obj, args, context) {
    rm('-r', QUERY_DIRECTORY);
  },

  ideQueryCreate (obj, args, context) {
    const data = {
      ...args,
      created: new Date().toISOString()
    };

    return fs
      .writeFileAsync(
        `${QUERY_DIRECTORY}/${args.id}-query.json`,
        JSON.stringify(data)
      )
      .then(() => {
        return {
          RESULTS_: {
            result: 'ok'
          }
        };
      })
      .catch(error => {
        console.log(error);

        return {
          RESULTS_: {
            result: 'ok',
            error: {
              type: 'QUERY_SAVE_ERROR',
              message: 'Query did not save'
            }
          }
        };
      });
  },

  ideQueryRemove (obj, args, context) {}
};
