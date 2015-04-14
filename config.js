// Ghost Configuration for Heroku

var path = require('path'),
    config;

config = {

  // Production (Heroku)
  production: {
    url: process.env.HEROKU_URL,
    mail: {
      transport: 'SMTP',
      host: 'smtp.mandrillapp.com',
      options: {
        service: 'Mandrill',
        auth: {
          user: process.env.MANDRILL_USERNAME,
          pass: process.env.MANDRILL_APIKEY
        }
      }
    },
    fileStorage: false,
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  // Development
  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'postgres',
      connection: 'postgres://athuddqmwhxjpz:JkGZ7YvVOzd2D29z5UpSD9gScC@ec2-54-247-68-87.eu-west-1.compute.amazonaws.com:5432/d93jqcgbc14p2q?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }

};

// Export config
module.exports = config;
