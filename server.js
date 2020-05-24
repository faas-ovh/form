// Start Express web app based on Express
const web = require('./server/form');
return new web('FaaS Form / app.faas.ovh ', 'localhost',3001, "./public");
// const web = require('./server/express');
// return new web('FaaS Form / app.faas.ovh ', 'localhost',3001, "./public");

