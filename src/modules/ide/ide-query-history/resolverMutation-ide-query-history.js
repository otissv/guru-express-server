'use strict';
import Bluebird from 'bluebird';
import low from 'lowdb';

const historyFile = `${process.cwd()}/query-history.json`;

export default {
  ideQueryHistoryClear (obj, args, context) {},

  ideQueryHistorySave (obj, args, context) {
    const db = low(historyFile);

    db.defaults({ history: [] }).write();

    db.get('history').push(args).write();
  }
};
