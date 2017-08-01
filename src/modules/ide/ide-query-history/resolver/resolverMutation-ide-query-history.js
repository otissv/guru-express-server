'use strict';
import Bluebird from 'bluebird';
import low from 'lowdb';
import { QUERY_HISTORY_FILE } from '../../../constants';
const fs = Bluebird.promisifyAll(require('fs'));

export default {
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
