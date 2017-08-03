'use strict';

import Bluebird from 'bluebird';
import shell from 'shelljs';
import low from 'lowdb';
import { PERSISTED_DIRECTORY, PERSISTED_HISTORY_FILE } from '../../../constants';

const { rm } = shell;
const fs = Bluebird.promisifyAll(require('fs'));

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

  idePersistedRemove (obj, args, context) {},

  idePersistedHistoryClear (obj, args, context) {
    const db = low(PERSISTED_HISTORY_FILE);
    db.set({ history: [] }).write();

    fs.writeFileAsync(PERSISTED_HISTORY_FILE, '{\n  "history": [] \n}');
    return [];
  },

  idePersistedHistorySave (obj, args, context) {
    const db = low(PERSISTED_HISTORY_FILE);

    db.defaults({ history: [] }).write();
    db.get('history').push(args).write();
  }
};
