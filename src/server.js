/*
* Application Server
*/

import express from 'express';
import main from './main';

export default async function server () {
  try {
    const app = express();
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();

    await main({ app });

    app.set('port', process.env.PORT || app.locals.port);

    let externalAddress;

    if (networkInterfaces.en0 === true) {
      externalAddress = networkInterfaces.en0[0].address;
    } else if (networkInterfaces.wlp4s0) {
      externalAddress = networkInterfaces.wlp4s0[0].address;
    }

    const server = app.listen(app.get('port'), () => {
      const port = server.address().port;

      process.stdout.write(`
Guru Express server started in ${app.get('env')} mode.
 - IDE address           = http://localhost:${port}
${externalAddress
  ? ' - External IDE address  = ' + 'http://' + externalAddress + ':' + port
  : ''}

 - GraphQL endpoint:     = http://localhost:${port}/graphql
${externalAddress
  ? ' - External IDE endpoint = ' + 'http://' + externalAddress + ':' + port + '/graphql'
  : ''}

`);
    });
  } catch (error) {
    console.log(error);
  }
}


