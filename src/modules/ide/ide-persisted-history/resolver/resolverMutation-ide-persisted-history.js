'use strict';
import Bluebird from 'bluebird';
import low from 'lowdb';
import { PERSISTED_HISTORY_FILE } from '../../../constants';
const fs = Bluebird.promisifyAll(require('fs'));

export default {
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
