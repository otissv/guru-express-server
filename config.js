'use strict';

module.exports = {
  development: {
    port: '8000',
    portHttps: '8888',
    domain: `localhost:$`,
    title  : 'GraphQL Guru' + ' Dev',
    redis: {
      uri : '127.0.0.1',
      port: 6379
    }
  },
  staging: {
    port: '8000',
    portHttps: '8888',
    domain: `localhost:$`,
    title  : 'GraphQL Guru' + ' Dev',
    redis: {
      uri : '127.0.0.1',
      port: 6379
    }
  },
  production: {
    port: '8000',
    portHttps: '8888',
    domain: `localhost:$`,
    title  : 'GraphQL Guru' + ' Dev',
    redis: {
      uri : '127.0.0.1',
      port: 6379
    }
  }
};
