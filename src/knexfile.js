// Update with your config settings.
const { config_db }  = require('../.env');

module.exports = {
    client: 'mysql',
    connection: config_db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
