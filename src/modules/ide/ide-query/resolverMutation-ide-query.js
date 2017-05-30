'use strict';


import Bluebird from 'bluebird';

const fs = Bluebird.promisifyAll(require('fs'));
const queriesPath = `${process.cwd()}/server/queries`;


export default {
  ideQueryCreate (obj, args, context) {
    const data = {
      ...args,
      created: new Date().toISOString()
    };

    return fs.writeFileAsync(`${queriesPath}/${args.id}-query.json`, JSON.stringify(data))
      .then(() => {
        return { RESULTS_ : { 
          result: 'ok' 
        } };
      })
      .catch(error => {
        console.log(error);

        return { RESULTS_: { 
          result: 'ok',
          error: {
            type: 'QUERY_SAVE_ERROR',
            message: 'Query did not save'
          }
        } };
      });
  },

  ideQueryRemove (obj, args, context) {

  }
};
