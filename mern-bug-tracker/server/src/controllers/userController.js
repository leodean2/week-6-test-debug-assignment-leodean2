// Example in server/src/controllers/userController.js
const debug = require('debug')('server:userController');

exports.createUser = async (req, res, next) => {
  debug('Creating user with data:', req.body);
  try {
    // ... implementation
  } catch (error) {
    debug('Error creating user:', error);
    next(error);
  }
};