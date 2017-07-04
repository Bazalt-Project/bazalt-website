
// Load dependencies
var express     = require('express'),
    compression = require('compression'),
    morgan      = require('morgan');

// Generate the application
var app      = express(),
    compress = compression(),
    logger   = morgan('combined');

// Set configuration
app.set('x-powered-by', false);

// Add middle-ware to express
app.use(compress);
app.use(logger);

// Expose public folder
app.use(express.static('public'));

// Listen on port  1337
app.listen(1337);
