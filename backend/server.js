/**
 * Core server imports.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Config = require('./Config'),
    port = process.env.PORT || 3000,
    routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Config.AccessControl);

routes(app); // link routes to express app
app.listen(port);

console.log(`Listening on port ${port}...`);

app.get('/', (req, res) => {
    console.log('I received a get request');
})