/*
* Database connections
*/

'use strict';

const redis = require('./redis');

const databases = {
  redis: redis
};

module.exports = databases;
