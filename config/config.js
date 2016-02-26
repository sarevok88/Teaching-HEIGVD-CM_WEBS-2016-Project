var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ioflux'
    },
    port: 3000,
    db: 'mongodb://localhost/ioflux-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ioflux'
    },
    port: 3000,
    db: 'mongodb://localhost/ioflux-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ioflux'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/webs-2016-example-production'
  }
};

module.exports = config[env];
