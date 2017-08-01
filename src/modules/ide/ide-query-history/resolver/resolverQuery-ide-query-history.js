'use strict';

import low from 'lowdb';
import { QUERY_HISTORY_FILE } from '../../../constants';

export default {
  ideQueryHistoryFindAll (obj, args, context) {
    const db = low(QUERY_HISTORY_FILE);
    db.defaults({ history: [] }).write();
    return db.get('history').value();
  }
};
