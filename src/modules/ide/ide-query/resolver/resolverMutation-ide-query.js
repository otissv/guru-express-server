'use strict';

import Bluebird from 'bluebird';
import shell from 'shelljs';
import low from 'lowdb';
import { QUERY_DIRECTORY, QUERY_HISTORY_FILE } from '../../../constants';

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

  ideQueryRemove (obj, args, context) {},

  ideQueryHistoryClear (obj, args, context) {
    const db = low(QUERY_HISTORY_FILE);
    db.set({ history: [] }).write();

    fs.writeFileAsync(QUERY_HISTORY_FILE, '{\n  "history": [] \n}');
    return [];
  },

  ideQueryHistorySave (obj, args, context) {
    const db = low(QUERY_HISTORY_FILE);

    db.defaults({ history: [] }).write();
    db.get('history').push(args).write();
  }
};
