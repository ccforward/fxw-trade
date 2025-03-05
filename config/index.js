const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  module.exports = require('./config.local');
} else {
  module.exports = require('./config.prod');
}
