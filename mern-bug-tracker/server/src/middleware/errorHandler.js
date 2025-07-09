// server/src/app.js (or your main server file)
const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Other middleware and routes...

// Error handler should be the last middleware
app.use(errorHandler);

module.exports = app;