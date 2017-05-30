'use strict';
import Bluebird from 'bluebird';
const fs = Bluebird.promisifyAll(require('fs'));
const queriesPath = `${process.cwd()}/server/queries`;


export default {
  ideQueryFindAll: async (obj, args, context) => {
    try {
      const files = await fs.readdirAsync(queriesPath);
      
      const queries = files.length > 0
        ? await Bluebird.all(files.map(async file => {
          try {
            const content = await fs.readFileAsync(`${queriesPath}/${file}`, 'utf8');
            const contentParse = JSON.parse(content);

            return contentParse.results
              ? { ...contentParse, results: JSON.stringify(contentParse.results) }
              : contentParse;

          } catch (error) {
            console.log(error);
          }
        }))
        : Bluebird.resolve([]);
      return queries;

    } catch (error) {
      console.log(error);
      return error;
    }
    
  }
};

