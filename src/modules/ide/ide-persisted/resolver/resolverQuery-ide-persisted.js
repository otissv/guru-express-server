'use strict';
import Bluebird from 'bluebird';
import shell from 'shelljs';
import low from 'lowdb';
import { PERSISTED_DIRECTORY, PERSISTED_HISTORY_FILE } from '../../../constants';

const fs = Bluebird.promisifyAll(require('fs'));
const { mkdir, ls, error } = shell;

export default {
  idePersistedFindAll: async (obj, args, context) => {
    try {
      ls(PERSISTED_DIRECTORY);
      if (error()) {
        mkdir(PERSISTED_DIRECTORY);
        console.log('Created queries directory');
        return Bluebird.resolve([]);
      } else {
        const files = await fs.readdirAsync(PERSISTED_DIRECTORY);

        const queries =
          files.length > 0
            ? await Bluebird.all(
              files.map(async file => {
                try {
                  const content = await fs.readFileAsync(
                    `${PERSISTED_DIRECTORY}/${file}`,
                    'utf8'
                  );

                  const contentParse = JSON.parse(content);
                  return contentParse.results
                    ? {
                      ...contentParse,
                      results: JSON.stringify(contentParse.results)
                    }
                    : contentParse;
                } catch (error) {
                  console.log(error);
                }
              })
            )
            : Bluebird.resolve([]);
        return queries;
      }
    } catch (error) {
      return error;
    }
  },

  idePersistedHistoryFindAll (obj, args, context) {
    const db = low(PERSISTED_HISTORY_FILE);
    if (db.source !== PERSISTED_HISTORY_FILE) {
      db.defaults({ history: [] }).write();
      return { history: [] };
    } else {
      return db.get('history').value();
    }
  }
};
