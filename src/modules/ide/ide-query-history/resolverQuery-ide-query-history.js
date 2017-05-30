'use strict';

import low from 'lowdb';

const historyFile = `${process.cwd()}/query-history.json`;

export default {
  ideQueryHistoryFindAll (obj, args, context) {
    const db = low(historyFile);
    return db.get('history').value();
  }
};
