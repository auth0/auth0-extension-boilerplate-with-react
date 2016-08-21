var App = require('./');
var path = require('path');
var nconf = require('nconf');

// Initialize configuration.
nconf.file(path.join(__dirname, '../config.json'))
    .defaults({
        NODE_ENV: 'development',
        HOSTING_ENV: 'default',
        PORT: 3000,
        WT_URL: 'http://localhost:3000'
    });

// Start the server.
var port = nconf.get('PORT');
App.listen(port, function () {
    console.log('Server started on port', port);
})
