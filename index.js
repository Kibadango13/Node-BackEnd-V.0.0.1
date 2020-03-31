const config        = require('config');
const express       = require('express');
const middleware    = require('./middleware');
//const routes        = require('./routes');
const api = require('./api');
const database      = require('./database');

const app           = express();
//json configuracion en config folder
const {host,port}   = config.get('server');
database.connect();


middleware(app);
//routes(app);
app.use('/api',api);
app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`);
});

module.exports = app;