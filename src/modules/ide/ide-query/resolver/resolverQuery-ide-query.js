'use strict';
import Bluebird from 'bluebird';
import shell from 'shelljs';
import low from 'lowdb';
import { QUERY_DIRECTORY, QUERY_HISTORY_FILE } from '../../../constants';
const fs = Bluebird.promisifyAll(require('fs'));
const { mkdir, ls, error } = shell;

export default {
  ideQueryFindAll: async (obj, args, context) => {
    try {
      ls(QUERY_DIRECTORY);
      if (error()) {
        mkdir(QUERY_DIRECTORY);
        console.log('Created queries directory');
        return Bluebird.resolve([]);
      } else {
        const files = await fs.readdirAsync(QUERY_DIRECTORY);

        const queries =
          files.length > 0
            ? await Bluebird.all(
                files.map(async file => {
                  try {
                    const content = await fs.readFileAsync(
                      `${QUERY_DIRECTORY}/${file}`,
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

  ideQueryHistoryFindAll (obj, args, context) {
    const db = low(QUERY_HISTORY_FILE);
    db.defaults({ history: [] }).write();
    return db.get('history').value();
  }
};
