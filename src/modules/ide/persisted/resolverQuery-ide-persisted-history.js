'use strict';

import low from 'lowdb';
import { PERSISTED_HISTORY_FILE } from '../../../constants';

export default {
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
