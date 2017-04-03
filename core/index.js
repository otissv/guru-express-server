/*
* Starts Express server
*/

'use strict';

const express = require('express');
const main = require('./main.js');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const os = require('os');
const networkInterfaces = os.networkInterfaces();

main(app, express);


app.set('port', process.env.PORT || app.locals.port);

var externalAddress;

if (networkInterfaces.en0 === true) {
  externalAddress = networkInterfaces.en0[0].address;
} else if (networkInterfaces.wlp4s0) {
  externalAddress = networkInterfaces.wlp4s0[0].address;
}


const server = app.listen(app.get('port'), () => {
  const port = server.address().port;


  process.stdout.write(`
  Express server started in ${app.get('env')} mode.
  Local address : http://localhost:${port}
  ${externalAddress ? 'External address ' + 'http://' + externalAddress + ':' + port : ''}
  `);

  return `Express server started on ${server.address().port}`;
});
