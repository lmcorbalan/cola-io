var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var ip = require('os').networkInterfaces().eth0[0];

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cola-io'
    },
    port: 3000,
    session : {
      secret : "wild thing"
    },
    proxy: ip.address+':3000',
    db: 'mongodb://localhost/cola-io-development',
    fixtures: true,
  },

  test: {
    root: rootPath,
    app: {
      name: 'cola-io'
    },
    port: 3000,
    session : {
      secret : "wild thing"
    },
    proxy: ip.address+':3000',
    db: 'mongodb://localhost/cola-io-test',
    fixtures: true,
  },

  production: {
    root: rootPath,
    app: {
      name: 'cola-io'
    },
    port: 3000,
    session : {
      secret : "wild thing"
    },
    proxy: ip.address+':3000',
    db: 'mongodb://localhost/cola-io-production',
    fixtures: true,
  }
};

module.exports = config[env];
