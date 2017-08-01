'use strict';

import Bluebird from 'bluebird';
import shell from 'shelljs';

const { rm } = shell;
const fs = Bluebird.promisifyAll(require('fs'));
import { PERSISTED_DIRECTORY } from '../../../constants';

export default {
  idePersistedCollectionClear (obj, args, context) {
    rm('-r', PERSISTED_DIRECTORY);
  },

  idePersistedCreate (obj, args, context) {
    const data = {
      ...args,
      created: new Date().toISOString()
    };

    return fs
      .writeFileAsync(
        `${PERSISTED_DIRECTORY}/${args.id}-persisted.json`,
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
              message: 'Persisted did not save'
            }
          }
        };
      });
  },

  idePersistedRemove (obj, args, context) {}
};
