/*
* redis connection
*/

'use strict';

const Promise = require('bluebird');
const redis = require('promise-redis')(resolver => new Promise(resolver));

function connection ({ port, uri }) {

  let client;
  client = redis.createClient({ port, uri });

  // Event handlers
  client.on('connect', () => {
    console.log(`Redis connected to ${uri}:${port}`);
  });


  client.on('end', () => {
    console.log('Redis disconnected');
    client.quit();
  });

  client.on('error', function (err) {
    console.log('Error ' + err);
  });

  // Return instance of redis client
  return client;
};

module.exports = {
  connect: (options) => connection(options)
};
